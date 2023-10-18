<script setup lang="ts">
import { useStudentsData } from "~/hooks/useStudentsData";

const { getIdListWith } = useStudentsData();

const idListCount = ref<{
  wakaru: number;
  wakaranai: number;
}>({
  wakaru: 0,
  wakaranai: 0,
});

onMounted(async () => {
  const idListWithWakaru = await getIdListWith({
    isWakaru: false,
  });
  console.log(`わかる生徒一覧:${JSON.stringify(idListWithWakaru)}`);

  const listWithWakaranai = await getIdListWith({
    isWakaru: true,
  });
  console.log(`分からない生徒一覧:${JSON.stringify(listWithWakaranai)}`);

  console.log(`わかっている人は、${idListWithWakaru.length}人`);
  console.log(`わからない人は、${listWithWakaranai.length}人`);

  idListCount.value.wakaru = idListWithWakaru.length;
  idListCount.value.wakaranai = listWithWakaranai.length;
});
</script>

<template>
  <div class="logo-vote">
    <!--画像を表示 -->
    <img src="../assets/img/logo.svg" @click="$router.push('/')" />
  </div>
  <div>
    <!--{{青文字は数字が入る変数。}}-->
    わからないボタンを押している生徒の人数:{{ idListCount.wakaranai }}人
    <br />
    わからないボタンを押している割合:{{
      (idListCount.wakaranai / (idListCount.wakaranai + idListCount.wakaru)) *
      100
    }}%
  </div>
</template>
<style></style>
~/hooks/useMyData ~/hooks/useStudentsData
