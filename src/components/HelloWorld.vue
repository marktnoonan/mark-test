<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="py-16">
        <privacy-policy v-if="!privacyPolicyAcknowledged" @confirm="handleConfirm" />
        <div v-else> Thank you for acknowledging the privacy policy!</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PrivacyPolicy from './PrivacyPolicy.vue'
  export default {
  components: { PrivacyPolicy },
    name: 'HelloWorld',
    componens: {
      PrivacyPolicy
    },
    data: () => ({
      privacyPolicyAcknowledged: false
    }),
    methods: {
      handleConfirm() {
        this.privacyPolicyAcknowledged = true;
      }
    }
  }
</script>
