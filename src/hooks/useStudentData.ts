import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { converter } from "~/helpers/converter";
import { useAuth } from "../components/useAuth";

type studentData = {
  isWakaru: boolean;
};

export function useStudentData() {
  const { $db } = useNuxtApp();
  const { currentUser } = useAuth();

  
  const router = useRouter();

  const jumpToLogin = async (): Promise<never> => {
    await router.push("/login");
    throw new Error("ログインしてね");
  };
  // えらーだす
  if (currentUser.value == null) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw jumpToLogin();
  }

  const student = ref<studentData>({
    isWakaru: false,
  });

  const docRef = doc($db, "student", currentUser.value.uid).withConverter(
    converter<studentData>()
  );

  watch(
    student,
    async (newStudentData) => {
      console.log(
        `student の変更を感知マン: ${JSON.stringify(newStudentData)}`
      );
      await setDoc(docRef, newStudentData);
    },
    {
      deep: true,
    }
  );

  const unsubscribe = onSnapshot(docRef, (newDoc) => {
    const newStudentData = newDoc.data();
    if (newStudentData == null) {
      throw new Error("studentDataがnullがです!!!");
    }
    student.value = newStudentData;
  });

  async function getStudentDataListwith({
    isWakaru,
  }: studentData): Promise<studentData[]> {
    const studentsRef = collection($db, "student").withConverter(
      converter<studentData>()
    );

    const queryIsWakaru = query(studentsRef, where("isWakaru", "==", isWakaru));
    const QuerySnapshot = await getDocs(queryIsWakaru);

    return QuerySnapshot.docs.map((_doc) => _doc.data());
  }

  return {
    student,
    unsubscribe,
    getStudentDataListwith,
  };
}
