<script setup lang="ts">
import axios from "axios";

// FIXME: この型定義はどこかに移動する
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

onMounted(() => getCoffees());
</script>

<template>
  <body>
    <div class="card-container">
      <div v-for="coffee in coffees" :key="coffee.id">
        <v-card height="100%">
          <v-img :src="coffee.image" height="200px" cover></v-img>
          <v-card-title> {{ coffee.title }} </v-card-title>
          <v-card-subtitle>
            {{ coffee.ingredients.join(", ") }}
          </v-card-subtitle>
          <v-card-text>
            {{ coffee.description }}
          </v-card-text>
        </v-card>
      </div>
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
