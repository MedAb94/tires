<template>
  <v-card flat tile width="100%" class="text-center" color="black">
    <v-card-text class="text-white font-weight-bold">
      <v-row>
        <v-col cols="12" md="3" sm="12">
          <v-img
            :src="require('../assets/logo.png')"
            class="mx-auto mb-0"
            max-width="200px"
          />
          <br />
          <h3>
            <v-icon color="white">mdi-phone</v-icon>
            613-590-8429
          </h3>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <div class="my-12">
            {{ $t("footer.address") }} : 385 Tompkins Ave #7, Orléans, ON K1E
            3H2
          </div>
          <div class="mt-5">
            <v-row>
            <v-col cols="12" md="4" class="text-right">Hours:</v-col>
              <v-col md="4" sm="12">
                <v-row v-for="d in hours" :key="d.day">
                  <v-col cols="6">
                    {{ lang === "fr" ? d.dayFr : d.day }}
                  </v-col>
                  <v-col cols="6">
                    {{ d.hour }}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="mt-12">
          
            <div>
              {{ $t("footer.links") }}
              <div class="mt-2">
                <router-link :to="{ name: 'About' }" tag="a" class="mr-2">{{
                  $t("nav.about")
                }}</router-link>
                <router-link :to="{ name: 'Home' }" tag="a" class="mr-2"
                  >Menu</router-link
                >
                <router-link :to="{ name: 'Contact' }" tag="a">{{
                  $t("nav.contact")
                }}</router-link>
              </div>
            </div>
            <div>
              <v-icon color="white">mdi-facebook</v-icon>
              <v-icon color="white">mdi-instagram</v-icon>
            </div>
          
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider />

    <v-card-text class="white--text">
      @{{ new Date().getFullYear() }} —
      <strong>LAZARE'S CHICKEN BBQ HOUSE</strong>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "AppFooter",
  data() {
    return {
      hours: [
        {
          day: "Monday",
          dayFr: "Lundi",
          hour: "11am - 9am",
        },
        {
          day: "Tuesday",
          dayFr: "Mardi",
          hour: "11am - 9am",
        },
        {
          day: "Wednesday",
          dayFr: "Mercredi",
          hour: "11am - 9am",
        },
        {
          day: "Thursday",
          dayFr: "Jeudi",
          hour: "11am - 9am",
        },
        {
          day: "Friday",
          dayFr: "Vendredi",
          hour: "11am - 9am",
        },
        {
          day: "Saturday",
          dayFr: "Samedi",
          hour: "11am - 9am",
        },
        {
          day: "Sunday",
          dayFr: "Dimanche",
          hour: "11am - 9am",
        },
      ],
    };
  },
  computed: mapGetters(["lang"]),
};
</script>
<style lang="scss" scoped>
.v-list-item .v-icon.v-icon {
  /*all: initial;*/
  font-size: 0.8125rem !important;
  color: red !important;
}
</style>
