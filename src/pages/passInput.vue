<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    login() {
      if (this.password === "meiden2023") {
        // パスワードが正しい場合の処理
        // 例: ページの遷移など
        this.$router.push("/teacher"); // Vue Routerを使用して遷移
      } else {
        alert("パスワードが正しくありません");
      }
    },
  },
};
</script>
<template>
  <VBtn
    class="homeBtn"
    height="40"
    width="100"
    @click="$router.push('/')"
    :class="homeBtn"
  >
    HOME
  </VBtn>

  <div class="passInputBody">
    <div class="center">
      <label for="password">パスワードを入力:</label>
      <input type="password" id="password" v-model="password" />
      <v-btn @click="login"> 決定</v-btn>
    </div>
  </div>
</template>
<style>
.passInputBody {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 画面の高さいっぱいに表示 */
}
.center {
  text-align: center;
}

.homeBtn {
  margin: 3%;
}
</style>
