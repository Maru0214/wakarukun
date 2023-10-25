import {
  collection,
  onSnapshot,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { converter } from "~/helpers/converter";

// まとめて型宣言
type StudentData = {
  isWakaru: boolean;
};

// 一旦いろいろ代入
const studentsDocs = ref<Array<QueryDocumentSnapshot<StudentData>>>();
const studentsData = ref<StudentData[]>([]);

export function useStudentsData() {
  const { $db } = useNuxtApp();

  // データを取得する関数
  async function getIdListWith(studentData: StudentData): Promise<string[]> {
    const docs = studentsDocs.value?.filter(
      (doc) => doc.data() === studentData
    );
    return docs?.map((doc) => doc.id) ?? [];
  }

  // collectionRefを宣言
  const collectionRef = collection($db, "student").withConverter(
    converter<StudentData>()
  );

  // collectionがかわったら、やる
  onSnapshot(collectionRef, (newDocs) => {
    console.log("onSnapshotうごいた!!!");
    studentsDocs.value = newDocs.docs.map((doc) => doc.data());
  });

  return {
    studentsData,
    studentsDocs,
    getIdListWith,
  };
}
