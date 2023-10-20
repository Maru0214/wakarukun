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
  <div class="example">
   <img src="../assets/img/haikei.svg">
   <p>
    {{ idListCount.wakaranai }}
  </p>	
  </div>

  <div class="pasento">
    <!--{{青文字は数字が入る変数。}}-->
    <br />
   {{(idListCount.wakaranai / (idListCount.wakaranai + idListCount.wakaru)) *
      100}}%
  </div>
</template>

<style>
.example {/*親div*/
  position: relative;
  text-align: center
  }

  .example p {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  font-size: 18vh;
  color: #5F5F5F;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  /*文字の装飾は省略*/
  }

.example img {
  width: 50%;
  height:50%;
  }

  .pasento{
    position: relative;
    left: 44%;
    margin-top: -10%;
    font-size: 10vh;
  color: #5F5F5F;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  </style>