<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title font-weight-bold">
              管理画面
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav flat>
          <v-list-item-group
          :color="color"
          >
            <v-list-item v-for="navigation in navigations" :key="navigation.name">
              <router-link :to="navigation.to">
                <v-list-item-icon>
                  <v-icon>{{ navigation.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1 font-weight-bold">{{ navigation.name }}</v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        
      </v-container>
    </v-navigation-drawer>

    <v-app-bar :color="color" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="logo font-weight-bold">Trans Form</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <v-list-item>
          <v-list-item-content>
            <v-switch
              class="icon"
              v-model="theme"
              :prepend-icon="themeIcon"
            ></v-switch>
          </v-list-item-content>
        </v-list-item> -->
        <!-- <v-list-item>
          <v-select
            v-model="color"
            :items="lists"
            append-outer-icon="mdi-palette"
            menu-props="auto"
            hide-details
            label="カラー"
            single-line
          ></v-select>
        </v-list-item> -->
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{on}">
            <v-btn class="btn" v-on="on" text><v-icon class="px-2">mdi-account</v-icon></v-btn>
          </template>
          <!-- <v-list :color="color">
            <v-subheader>設定</v-subheader>
            <v-list-item v-for="support in supports" :key="support.name">
              <v-list-item-icon>
                <v-icon>{{ support.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ support.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list> -->
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle>アカウント</v-list-item-subtitle>
                  <v-list-item-title>masahide.tasaki@wc-a.co.jp</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <!-- <v-switch
                    v-model="message"
                    :color="color"
                  ></v-switch> -->
                  <v-switch
                    v-model="theme"
                    :prepend-icon="themeIcon"
                    :color="color"
                  ></v-switch>
                </v-list-item-action>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-select
                    v-model="color"
                    :items="lists"
                    prepend-icon="mdi-palette"
                    menu-props="auto"
                    hide-details
                    label="カラー"
                    single-line
                    :color="color"
                  ></v-select>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                outlined
                @click="menu = false"
              >
                キャンセル
              </v-btn>
              <v-btn
                class="save"
                :color="color"
                @click="menu = false"
              >
                保存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer :color="color" dark app>
      Trans Form
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      theme: true,
      lists: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'blue-grey',
        'grey',
      ],
      color: 'cyan',
      drawer: null,
      supports: [
        {name: 'Consulting and support', icon: 'mdi-vuetify'},
        {name: 'Discord community', icon: 'mdi-discord'},
        {name: 'Report a bug', icon: 'mdi-bug'},
        {name: 'Github issue board', icon: 'mdi-github'},
        {name: 'Stack overview', icon: 'mdi-stack-overflow'},
      ],
      navigations: [
        {name: 'メタデータ', icon: 'mdi-select-inverse', to: 'meta'},
        {name: 'テーマ', icon: 'mdi-palette', to: 'theme'},
        {name: 'レイアウト', icon: 'mdi-view-dashboard', to: 'layout'},
        {name: 'フォーム', icon: 'mdi-view-list', to: 'form'},
        {name: 'メール', icon: 'mdi-email', to: 'mail'},
        {name: 'オプション', icon: 'mdi-cogs', to: 'option'},
      ]
    }
  },
  computed: {
    themeIcon(){
      return this.theme ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
  },
  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme
    }
  }
}

</script>



<style scoped lang="scss">
.logo {
  font-size: 2rem;
}
.btn {
  text-transform: none;
}
.save {
  color: #fff !important;
  font-weight: bold;
}
.v-application a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
}
</style>
