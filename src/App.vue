<template>
  <v-app>
  <navbar/>
    <v-main>
      <router-view/> 
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import AppFooter from './components/Footer';

export default {
  name: 'App',

  components: {
    Navbar,AppFooter
  },

  data: () => ({
    //
  }),
};
</script>
