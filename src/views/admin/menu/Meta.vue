<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          label="タイトル"
          hide-details="auto"
          v-model="title"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field label="ディスクリプション"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field label="ロゴデータ"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field label="コピーライト"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex justify-end"
        cols="12" md="8"
      >
        <v-btn
          class="save"
          large
          :color="color"
          @click="aaa"
        >保存</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: meta1,
    }
  },
  methods: {
    aaa() {
    console.log(meta1)
    }
  }
}
import firebase from 'firebase'
var db = firebase.firestore();
var docRef = db.collection("users").doc("date");
var meta1 = docRef.get().then((doc)=>{
  if (doc.exists) {
    return doc.data();
  }
  else {
    console.log("404");
  }
})
.catch( (error) => {
    console.log(`データを取得できませんでした (${error})`);
});
</script>