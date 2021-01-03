<template>
    <div>
          <v-img
                        :src="require('../assets/3.jpg')"
                        cover
                        style="max-height: 70vh"
                    />
        <v-container>
            <h2 class="text-center "> {{$t('about.title')}}</h2>
            <v-row align="center">
                <v-col cols="12" md="6" sm="12" order="2" order-md="1">
                    <p>
                        {{$t('about.1')}}
                        {{$t('about.1')}}
                    </p>
                    <p>
                        {{$t('about.1')}}
                        {{$t('about.1')}}
                    </p>

                </v-col>
                <v-col cols="12" md="6" sm="12" order="1" order-md="2">
                    <v-img
                        :src="require('../assets/1.jpg')"
                        class="my-3"
                        cover
                    />
                </v-col>
        
            </v-row>
          
        </v-container>
        <section class="gray">
        <v-container>
             <v-row align="center">
             <v-col cols="12" order="3" order-md="4" md="6" sm="12" >
                    <v-img
                        :src="require('../assets/2.jpg')"
                        class="my-3"
                        cover
                    />
                </v-col>
                <v-col cols="12" order="12" order-md="6" md="6" sm="12" >
                    <p>
                        {{$t('about.2')}}
                        {{$t('about.2')}}
                    </p>
                    <p>
                        {{$t('about.2')}}
                        {{$t('about.2')}}
                    </p>

                </v-col>
            
            </v-row>
        
        </v-container>
     
        </section>
        <mailbox/>
    </div>
</template>

<script>
    import Mailbox from "../components/Mailbox";
    import Slider from "../components/Slider";

    export default {
        name: "About",
        components: {Mailbox, Slider},

        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
