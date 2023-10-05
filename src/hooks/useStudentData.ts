import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { converter } from "~/helpers/converter";
import { useAuth } from "../components/useAuth";

type studentData = {
  isWakaru: boolean;
};

export function useStudentData() {
  const { $db } = useNuxtApp();
  const { currentUser } = useAuth();
  // えらーだす
  if (currentUser.value == null) {
    throw new Error("currentUser がnullです");
  }

  const student = ref<studentData>({
    isWakaru: true,
  });

  const docRef = doc($db, "student", currentUser.value.uid).withConverter(
    converter<studentData>()
  );

  watch(student, async (newStudentData) => {
    await setDoc(docRef, newStudentData);
  });

  const unsubscribe = onSnapshot(docRef, (newDoc) => {
    const newStudentData = newDoc.data();
    if (newStudentData.value == null) {
      throw new Error("studentDataがnullだよ");
    }
  });

  return {
    student,
    unsubscribe,
  };
}
