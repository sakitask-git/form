<template>
  <div id="user">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  name: 'User',
}
</script>
