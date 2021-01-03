import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
        theme: {
            dark: false,
            themes: {
                light: {
                    success: "#9addb6",
                    green: "#18af42",
                    secondary: "#ffe5ee",
                    info: "#C7F2FF",
                    danger: "#f85d5d",
                    warning: "#fdbe74",
                    light: "#F3F6FF",
                    gray: "#ececec",
                    dark:"#2a2a2a"

                },
                dark: {
                    accent: "#424242",
                    secondary: "#ff8f00",
                    info: "#26a69a",
                    warning: "#ffc107",
                    error: "#dd2c00",
                    success: "#00e676",
                    gray: "#ececec"

                },
            },
        },
    });
