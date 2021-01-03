<template>
  <div>
    <div class="gray">
      <div class="container">
        <div>
          <v-text-field
            :label="$t('home.search')"
            class="w-50 mx-auto"
            outlined
            color="white"
            filled
            background-color="white"
          />
        </div>
      </div>
    </div>
    <slider></slider>
    <section class="my-8">
      <div class="container-fluid">
        <div class="row pb-3">
          <div class="col-md-2  filter">
            <h3 class="font-weight-bold">Tires</h3>
            <div class="border-bottom border-dark">
              <p class="filter-title">
                <strong>14 inches</strong>
              </p>
              <div class="form-group">
                <select
                  multiple
                  class="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option v-for="c in 4" :value="c" v-bind:key="c"
                    >175/65 R14 (1)
                  </option>
                </select>
              </div>
            </div>

            <div class="border-bottom border-dark">
              <p class="filter-title">
                <strong>17 inches</strong>
              </p>
              <div class="form-group">
                <select
                  multiple
                  class="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option v-for="c in 4" :value="c" v-bind:key="c"
                    >175/65 R14 (1)
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-10 courses">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" v-for="item in 6">
                  <v-card class="pa-5">
                    <v-row>
                      <v-col class="8">
                      <p>
                       Width: 00.00 <br />
                        Height: 00.00 <br />
                        Diameter: 00.00 <br />
                      </p>
                       Number of tires : 00
                      </v-col>
                      <v-col cols="4">
                      <v-img src="../assets/logo.png"></v-img>
                       </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Mailbox from "../components/Mailbox";
import Slider from "../components/Slider";

export default {
  name: "Home",
  components: { Mailbox, Slider },
};
</script>

<style scoped lang="scss">
.jumbotron {
  height: 30vh;
}

.gray {
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.2);
}
.filter {
  border-radius: 0 5% 10% 0;
  background: #eee;
  border-right: 5px solid blue;
  font-weight: 800 !important;
}
</style>
