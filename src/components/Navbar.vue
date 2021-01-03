<template>
  <div class="gray">
    <div class="text-right pr-5 font-weight-bold ">
      <v-btn
        elevation="0"
        class=" white--text lang"
        v-if="lang === 'en'"
        @click="switchLang('fr')"
      >
        FR
      </v-btn>
      <v-btn
        elevation="0"
        class="primary white--text lang"
        v-if="lang === 'fr'"
        @click="switchLang('en')"
      >
        EN
      </v-btn>
    </div>
    <nav class="navbar navbar-expand-md navbar-dark gray py-0">
      <div class="container p-0">
        <a class="navbar-brand" href="/">
          <v-img
            :src="require('../assets/logo.png')"
            class="mx-auto mb-0"
            max-width="100px"
          />
        </a>
        <button
          class="navbar-toggler m-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav m-auto d-flex align-items-center">
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" tag="a" class="nav-link">{{
                $t("nav.about")
              }}</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link spacer d-none d-md-flex">|</a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link">
                <v-select
                  :items="categories"
                  :label="$t('nav.menu')"
                  outlined
                  filled
                  class="mt-5"
                  color="white"
                  background-color="white"
                />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link spacer d-none d-md-flex">|</a>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Contact' }" tag="a" class="nav-link"
                >{{ $t("nav.contact") }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import i18n from "../i18n";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["fetchCategories"]),
    switchLang(lang) {
      i18n.locale = lang;
    },
  },
  computed: {
    ...mapGetters(["allCategories", "lang"]),
    categories() {
      let array = [];
      for (const o in this.allCategories) {
        array.push(this.allCategories[o]["name"]);
      }
      return array;
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>
<style scoped>
.nav-link {
  font-size: large;
  font-weight: bold;
  color: black !important;
  border-radius: 10px;
}
.v-input__control .v-text-field__details{
    display: none !important;
}
.spacer {
  cursor: text;
}

.router-link-exact-active {
  color: white !important;
  background: blue;
}
.lang:hover {
  background: #3019d2 !important;
}
</style>
