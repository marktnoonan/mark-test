<template>
  <main class="policy-wrap" aria-labelledby="priv-pol-heading">
    <h1 id="priv-pol-heading">Privacy Policy</h1>
    <p class="py-12">Information about privacy that you should read in detail.</p>
    <v-btn class="primary" @click="confirm">OK, I read it, sheesh</v-btn>
  </main>
</template>

<script>
  export default {
    name: "PrivacyPolicy",
    methods: {
      confirm() {
        this.$emit('confirm')
      }
    }
  }
</script>

<style lang="scss" scoped>
.policy-wrap {
  border: 1px solid rgba(0,0,0,0.4);
  padding: 4rem;
}
</style>