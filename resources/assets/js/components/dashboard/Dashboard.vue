<template>
    <div id="dashboard">
        <router-link to="example" >Example</router-link>
        <div class="row">
            <indicadores></indicadores>
        </div>

        <div class="row">
            <section class="col-lg-7">
                <processos-aberto></processos-aberto>
            </section>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Indicadores from './Indicadores'
    import ProcessosAberto from './ProcessosAberto'

    export default {
        name: 'dashboard',
        components: { Indicadores, ProcessosAberto },

        data () {
            return {

            }
        }
    }
</script>