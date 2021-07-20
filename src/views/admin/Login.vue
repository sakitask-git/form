<template>
  <v-app>
    <v-card width="400px" class="center">
      <v-card-title>
        <h1 class="text-center font-weight-bold">Form</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="メールアドレス"
            v-model="mail"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <v-card-actions>
            <v-btn class="info fill-width" @click="signIn">ログイン</v-btn>
            <v-btn class="info fill-width" @click="signOut">ログアウト</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'Login',
    data(){
      return {
        showPassword: false,
        mail: '',
        password: '',
      }
    },
    methods: {
      signIn: function(){
        firebase.auth().signInWithEmailAndPassword(this.mail, this.password)
        .then(function(userCredential) {
          var user = userCredential.user;
          console.log(user);
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
      },
      signOut: function(){
        firebase.auth().signOut()
      }
    },
    mounted(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          console.log('login');
          this.authenticatedUser = true;
        } else {
          console.log('logout');
          this.authenticatedUser = false;
        }
      })
    },
  }
</script>

<style scoped>
.center {
  position: fixed;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
}
</style>