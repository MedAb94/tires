<template>
  <div>
  <v-img
                        :src="require('../assets/4.jpg')"
                        contain class="mb-5"
                        style="max-height: 70vh"
                    />    <v-container>
      <v-row>
        <v-col class="mx-auto" cols="12" md="8" sm="12" xs="12">
          <v-card class="gray pa-5 rounded-lg" elevation="8">
            <v-form v-model="valid">
              <v-container>
                <h2 class="text-center">{{ $t("contact.title") }}</h2>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      :label="$t('contact.name')"
                      :placeholder="$t('contact.enter_name')"
                      required
                      outlined
                      append-icon="mdi-account"
                      color="white"
                    />
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      :label="$t('contact.mail')"
                      :placeholder="$t('contact.enter_email')"
                      required
                      outlined
                      append-icon="mdi-email-outline"
                      color="white"
                    />
                  </v-col>
                </v-row>
                <v-text-field
                  v-model="address"
                  label="Address"
                  placeholder="Enter your address here"
                  required
                  outlined
                  append-icon="mdi-map-marker"
                  color="white"
                />
                <v-text-field
                  v-model="phone"
                  :label="$t('contact.phone')"
                  :placeholder="$t('contact.enter_phone')"
                  required
                  outlined
                  append-icon="mdi-phone"
                  color="white"
                />
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Message"
                  :placeholder="$t('contact.enter_message')"
                  append-icon="mdi-android-messages"
                  color="white"
                />
                <v-row align="center">
                  <v-btn color="primary" large class="mx-auto w-50">
                    {{ $t("contact.send") }}
                  </v-btn>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <mailbox></mailbox>
  </div>
</template>

<script>
import Mailbox from "../components/Mailbox";
import Slider from "../components/Slider";

export default {
  name: "Contact",
  components: { Mailbox, Slider },
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      address: "",
      phone: "",
      message: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: black;
}
</style>
