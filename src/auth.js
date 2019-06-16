import awsconfig from './aws-exports'
// import { AmplifyEventBus } from 'aws-amplify-vue'


const COGNITO_PROVIDER_PREFIX = 'CognitoIdentityServiceProvider';

// AmplifyEventBus.$on('authState', info => {
//   console.log("AmplifyEventBus", info)

//   switch(info) {
//     case 'signedIn':
//       this.$router.push('/');
//       break;
//     case 'signedOut':
//       this.$router.push('/');
//       break;
//     default:
//       // do nothing
//   }
// })

export default {
  loggedIn: () => {
    const appId = awsconfig['aws_user_pools_web_client_id'];
    const lastAuthUser = localStorage[`${COGNITO_PROVIDER_PREFIX}.${appId}.LastAuthUser`];
    const userJson = localStorage[`${COGNITO_PROVIDER_PREFIX}.${appId}.${lastAuthUser}.userData`];

    return userJson;
  },
  switch: (state, router) => {
    switch(state) {
      case 'signedIn':
      case 'signedOut':
        router.push('/')
        break;
      default:
        // do nothing
    }
  }
}