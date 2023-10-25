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
  <head>
    <meta name="viewport" content="width=device-width"/>
  </head>
  <p class="title">わからない生徒</p>
  
  <p class="seitosu">
    {{ idListCount.wakaranai }}
    <div class="hito">
    人
  </div>
  </p>	
  <h2>　</h2>

  <div class="pasento">
   {{(idListCount.wakaranai / (idListCount.wakaranai + idListCount.wakaru)) *
      100}}%
  </div>
  
</template>

<style>

/*共通スタイル*/
.title {
  margin-top: 5%;
  text-align: center;
  color: #5F5F5F;
  font-family: vdl-logojrblack, sans-serif;
  font-style: normal;
  font-size: 350%;  
}

.seitosu {
  text-align: center;
  color: #5F5F5F;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',sans-serif;
  font-style: normal;
  font-size:1300%;  
}

.hito {
  text-align: center;
  color: #5F5F5F;
  font-family:vdl-logojrblack, sans-serif;
  font-style: normal;
  font-size:30%; 
  margin-top: -22%;
  margin-left: 30%;
}

h2 {
    position: relative;
    padding: 0.8rem 0;
    margin-top: 8%;
    margin-bottom: 0.2rem;
    border-bottom: 5px solid;
    color: #A1B9C7;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
}

h2:before,
h2:after {
    position: absolute;
    top: 100%;
    left: 50%;
    content: "";
    height: 0;
    width: 0;
}

h2:before {
    border: 16px solid;
    border-color: transparent;
    border-top-color: #A1B9C7;
    margin-left: -16px;
}

h2:after {
    border: 10px solid;
    border-color: transparent;
    border-top-color: #E9E0DB;
    margin-left: -10px;
}

.example p {
  position: absolute;
  bottom: -8%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  font-size: 25vw;
  color: #5F5F5F;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',sans-serif;
}

.pasento {
    top: 10%;
    margin-left: 43%;
    font-size: 10vw;
    color:#5F5F5F;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

/*
.pasento {
    margin-top: 20%;
    text-align: center;
    font-size: 10vw;
    color:#5F5F5F;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
}
*/
  </style>
