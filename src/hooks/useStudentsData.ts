import {
  collection,
  onSnapshot,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { converter } from "~/helpers/converter";
import { type StudentData } from "~/types/student";

export function useStudentsData() {
  const { $db } = useNuxtApp();

  // 一旦いろいろ代入
  const studentsDocs = ref<Array<QueryDocumentSnapshot<StudentData>>>();
  const studentsData = computed<StudentData[]>(
    () => studentsDocs.value?.map((doc) => doc.data()) ?? []
  );

  // データを取得する関数
  function getIdListWithIsWakaru(isWakaru: boolean): string[] {
    // NOTE: onSnapshot で studentsData にデータが流れてくる前に呼び出されることがある
    if (studentsDocs.value == null) return [];

    const docs = studentsDocs.value.filter(
      (doc) => doc.data().isWakaru === isWakaru
    );
    return docs.map((doc) => doc.id);
  }

  // collectionRefを宣言
  const collectionRef = collection($db, "student").withConverter(
    converter<StudentData>()
  );

  // collectionがかわったら x、studentDocsに

  const unsubscribe = onSnapshot(collectionRef, (newDocs) => {
    console.log("onSnapshotうごいた!!!");
    studentsDocs.value = newDocs.docs;
  });

  return {
    studentsData,
    studentsDocs,
    unsubscribe,
    getIdListWithIsWakaru,
  };
}
