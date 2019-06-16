<template>
  <div class="signin">
    <h2>Sign In</h2>

    <Authenticator></Authenticator>
  </div>
</template>

<script>
import Authenticator from '@/components/Authenticator'

export default {
  name: 'signin',
  components: {
    Authenticator
  },
  data: function(){
    return {
    }
  }
}
</script>
