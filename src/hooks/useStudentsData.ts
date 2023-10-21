import { collection, getDocs, query, where } from "firebase/firestore";
import { converter } from "~/helpers/converter";

type studentData = {
  isWakaru: boolean;
};

export function useStudentsData() {
  const { $db } = useNuxtApp();

  // データを取得する関数
  async function getIdListWith({ isWakaru }: studentData): Promise<string[]> {
    const studentsRef = collection($db, "student").withConverter(
      converter<studentData>()
    );

    const queryIsWakaru = query(studentsRef, where("isWakaru", "==", isWakaru));
    const querySnapshot = await getDocs(queryIsWakaru);

    return querySnapshot.docs.map((_doc) => _doc.id);
  }

  return {
    getIdListWith,
  };
}
