import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../components/useAuth";

type studentData = {
  mail: string;
  isWakaru: boolean;
};

// (引数)なし

export function useStudentData() {
  const { $db } = useNuxtApp();
  const { currentUser } = useAuth();

  const addTest = async () => {
    const docRef = doc($db, "student", currentUser.value.uid);
    // これでデータベースにデータを置き換える（入れ込む）
    const student: studentData = {
      isWakaru: false,
    };
    await setDoc(docRef, student);
  };

  return {
    addTest,
  };
}
