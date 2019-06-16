<template>
  <div id="authenticator">
    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
    <div v-else>
      <amplify-authenticator v-bind:auth-config="authConfig"></amplify-authenticator>
    </div>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  data: function(){
    return {
      authConfig: {
        signUpConfig: {
          hiddenDefaults: ['phone_number']
        }
      }
    }
  },
  computed: {
    signedIn: function() {
      return auth.loggedIn();
    }
  }
}
</script>