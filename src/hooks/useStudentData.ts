import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../components/useAuth";
import { understandState } from "../pages/vote.vue"; // vote.vue から understandState をインポート

type studentData = {
  mail: string;
  isWakaru: boolean;
};

export function useStudentData() {
  const { $db } = useNuxtApp();
  const { currentUser } = useAuth();
  const addTest = async () => {
    const docRef = doc($db, "student", currentUser.value.uid);
    const student: studentData = {
      isWakaru: understandState, // understandState を isWakaru に代入
    };
    await setDoc(docRef, student);
  };

  return {
    addTest,
  };
}
