<template>
  <div class="policy-wrap">
    <h1>Privacy Policy</h1>
    <p class="py-12">Information about privacy that you should read in detail.</p>
    <v-btn class="primary" @click="confirm">OK</v-btn>
  </div>
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