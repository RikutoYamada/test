<template>
  <div class="home">
    <h1>ログイン</h1>
    <label>メール</label>
    <input type="text" />
    <label>パスワード</label>
    <input type="password" />

    <button @click="handleClick">ログイン</button>
  </div>
</template>

<script>
  export default {
  methods: {
    handleClick() {
      this.$router.push('/home');
    }
  }
}
</script>