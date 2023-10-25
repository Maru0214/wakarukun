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
  function getIdListWith(studentData: StudentData): string[] {
    const docs = studentsDocs.value?.filter((doc) => {
      const docData = doc.data();
      return docData.isWakaru && docData === studentData;
    });
    return docs?.map((doc) => doc.id) ?? [];
  }

  // collectionRefを宣言
  const collectionRef = collection($db, "student").withConverter(
    converter<StudentData>()
  );


  

  // collectionがかわったら x、studentDocsに

  onSnapshot(collectionRef, (newDocs) => {
    console.log("onSnapshotうごいた!!!");
    studentsDocs.value = newDocs.docs;
    // isWakaruがtrueのデータのみを抽出
    studentsData.value = newDocs.docs.map((doc) => doc.data());

  });
  return {
    studentsData,
    studentsDocs,
    getIdListWith,
  };
}
