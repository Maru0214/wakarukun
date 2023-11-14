import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { converter } from "~/helpers/converter";
import { type StudentData } from "~/types/student";
import { useAuth } from "./useAuth";

export function useStudentData() {
  const { $db } = useNuxtApp();
  const { currentUser } = useAuth();

  // えらーだす
  if (currentUser.value == null) {
    throw new Error("currentUser is null");
  }

  // とりあえずtrueを代入している
  const student = ref<StudentData>({
    isWakaru: false,
  });

  // ここ（currentUserのドキュメント）を使います。って行っているだけ。データの取得や更新は行っていないよ

  const docRef = doc($db, "student", currentUser.value.uid).withConverter(
    converter<StudentData>()
  );

  // studentが変わったら.感知マン起動→先程宣言したもの(docRef)にnewStudentDataを入れる。
  watch(
    student,
    async (newStudentData, oldStudent) => {
      console.log(
        `student の変更を感知マン: ${JSON.stringify(newStudentData)}`
      );
      await setDoc(docRef, newStudentData);
    },
    {
      deep: true,
    }
  );
  
  // unsubscribeでonSnapshotが囲われている。
  // onSnapshotはdocRefが変わったらnewStudentDataにnewDocを入れる。
  // nullだったら、怒る

  const unsubscribe = onSnapshot(docRef, (newDoc) => {
    const newStudentData = newDoc.data();
    if (newStudentData == null) {
      throw new Error("studentDataがnullがです!!!");
    }
    student.value = newStudentData;
  });

  return {
    student,
    unsubscribe,
  };
}
