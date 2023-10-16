<script setup lang="ts">
import { useStudentData } from "~/hooks/useStudentData";

const { getStudentDataListwith } = useStudentData();

const studentIsWakaruCount = ref<{
  wakaru: number;
  wakaranai: number;
}>({
  wakaru: 0,
  wakaranai: 0,
});

onMounted(async () => {
  const studentDataListWithWakaru = await getStudentDataListwith({
    isWakaru: false,
  });
  console.log(`わかる生徒一覧:${JSON.stringify(studentDataListWithWakaru)}`);

  const studentDataListWithWakaranai = await getStudentDataListwith({
    isWakaru: true,
  });
  console.log(
    `分からない生徒一覧:${JSON.stringify(studentDataListWithWakaranai)}`,
  );

  console.log(`わかっている人は、${studentDataListWithWakaru.length}人`);
  console.log(`わからない人は、${studentDataListWithWakaranai.length}人`);

  studentIsWakaruCount.value.wakaru = studentDataListWithWakaru.length;
  studentIsWakaruCount.value.wakaranai = studentDataListWithWakaranai.length;
});
</script>

<template>
  <div class="logo-vote">
    <img src="../assets/img/logo.svg" @click="$router.push('/')" />
  </div>
  <div>
    わからないボタンを押している生徒の人数:{{
      studentIsWakaruCount.wakaranai
    }}人
    <br />
    わからないボタンを押している割合:{{
      (studentIsWakaruCount.wakaranai / studentIsWakaruCount.wakaranai +
        studentIsWakaruCount.wakaru) *
      100
    }}%
  </div>
</template>
