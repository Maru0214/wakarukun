<script setup lang="ts">
import axios from "axios";

type CoffeeType = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

const coffees = ref<CoffeeType[]>([]);

const getCoffees = async () => {
  const response = await axios.get("https://api.sampleapis.com/coffee/hot");
  coffees.value = response.data;
};

await getCoffees();
</script>

<template>
  <body>
    <div>
      <p>先生用の投票ページだよ</p>
      <a href="./">最初の画面に移動するよ</a>
    </div>
  </body>
</template>

<style scoped lang="scss">
body {
  padding: 20px 0;
}

.card-container {
  display: grid;

  gap: 20px;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  img {
    margin: 0 auto;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
