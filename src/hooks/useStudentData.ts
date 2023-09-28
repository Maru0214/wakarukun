import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../components/useAuth";

type studentData = {
  isWakaru: boolean;
};

export function useStudentData() {
  const { $db } = useNuxtApp();
  const { currentUser } = useAuth();
  const addTest = async () => {
    const docRef = doc($db, "student", currentUser.value.uid);
    const student: studentData = {
      isWakaru: true,
    };
    await setDoc(docRef, student);
  };

  return {
    addTest,
  };
}
