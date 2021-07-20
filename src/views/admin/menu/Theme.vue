<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>テーマカラー</v-card-title>
          <v-radio-group
            row
          >
            <v-radio label="白" value="white"></v-radio>
            <v-radio label="黒" value="black"></v-radio>
          </v-radio-group>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field label="ディスクリプション"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex justify-end"
        cols="12" md="12"
      >
        <v-btn
          class="save"
          :color="color"
        >保存</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>