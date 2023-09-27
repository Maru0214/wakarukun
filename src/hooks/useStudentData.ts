import { doc, setDoc } from "firebase/firestore";

type studentData = {
  mail: string;
  isWakaru: boolean;
};

// (引数)なし
let mailaddress = email;

export function useStudentData() {
  const { $db } = useNuxtApp();

  const addTest = async () => {
    const docRef = doc($db, "student", "test-user");
    // これでデータベースにデータを置き換える（入れ込む）
    const student: studentData = {
      mail: mailaddress,
      isWakaru: false,
    };
    await setDoc(docRef, student);
  };

  return {
    addTest,
  };
}