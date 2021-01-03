<template>
    <section class="dark white--text mb-0 py-3">
        <div class="container newsLetter">
            <h1 class="text-center">
                {{$t('mailBox.stay')}}
            </h1>
            <p class="text-center">{{$t('mailBox.subscribe')}}</p>
            <form @submit.prevent="subscribe">
                <div class="row">
                    <div class="col-12">
                        <v-text-field outlined label="Email" color="white">
                            <v-btn
                                slot="append"
                                x-large
                                class="bg-primary white--text"

                            >

                                {{$t('mailBox.subscribeBtn')}}
                            </v-btn>
                        </v-text-field>
                    </div>
                </div>
            </form>

        </div>

    </section>
</template>

<script>
    export default {
        name: "Mailbox"
    }
</script>

<style scoped>
    .newsLetter .v-btn {
        margin-top: -14px;
        margin-right: -11px;
    }
        .v-text-field--outlined >>> fieldset {
        border-color: white;
    }
</style>
