<template>
    <div id="indicadores">

        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-aqua">
                <div class="inner">
                    <h3>{{ indicadores.andamento }}</h3>

                    <p>Processos em andamento</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>

        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
                <div class="inner">
                    <h3>{{ indicadores.abertos }}</h3>

                    <p>Processos abertos</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->

        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-yellow">
                <div class="inner">
                    <h3>{{ indicadores.financeira }}</h3>

                    <p>Pendência financeiras</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->

        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-red">
                <div class="inner">
                    <h3>{{ indicadores.total }}</h3>

                    <p>Total de processos</p>
                </div>
                <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'indicadores',

        data () {
            return {
                indicadores: {
                    andamento: 0,
                    abertos: 0,
                    financeira: 0,
                    total: 0,
                }
            }
        },

        mounted: function() {
            this.indicadorShow();
        },

        methods: {
            indicadorShow: function () {

                var self = this;

                this.$http.get('/api/indicadores').then(response => {
                    var data = response.data,
                        ind = self.indicadores;

                    ind.total = data.total > 0 ? pad(data.total, 2) : 0;
                    ind.abertos = data.abertos > 0 ? pad(data.abertos, 2) : 0;
                    ind.andamento = data.andamento > 0 ? pad(data.andamento, 2) : 0;
                    ind.financeira = data.financeira > 0 ? pad(data.financeira, 2) : 0;

                }, response => {
                    // error callback
                    console.log('Error');
                });
            }
        }
    }
</script>