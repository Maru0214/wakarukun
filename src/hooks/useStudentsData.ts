import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { converter } from "~/helpers/converter";

type studentData = {
  isWakaru: boolean;
};

const StudentsData = ref<studentData[]>([]);

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

  const collectionRef = collection($db, "student").withConverter(
    converter<studentData>()
  );

  onSnapshot(collectionRef, (newDocs) => {
    const newStudentData = newDocs.docs.map((doc) => doc.data());
    StudentsData.value = newStudentData;
  });

  return {
    getIdListWith,
  };
}
