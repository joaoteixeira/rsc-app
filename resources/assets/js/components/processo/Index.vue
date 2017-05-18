<template>

    <div id="processo-index" class="row">

        <div class="col-md-12">
            <div class="box box-primary itens-processos">
                <div class="box-header with-border">
                    <h3 class="box-title">Pesquisar Processos</h3>
                </div>

                <form action="">
                    <div class="box-body">
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" placeholder="Digite o nome do servidor, Nº do processo, Siape, Banca" v-model="searchTerm">
                            <div class="input-group-btn">
                                <button type="button" class="btn btn-primary">
                                    <span class="fa fa-search"></span> Buscar</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>

        <div class="col-md-4" v-if="!loading" v-for="item in filteredSearchTerm">
            <!-- Widget: user widget style 1 -->
            <div class="box box-widget widget-user-2">
                <!-- Add the bg color to the header using any of the bg-* classes -->
                <div class="widget-user-header bg-orange">
                    <!-- /.widget-user-image -->
                    <h3 class="widget-user-username" style="margin-left: 0"><b>{{ item.servidor.nome }}</b></h3>
                    <h5 class="widget-user-desc" style="margin-left: 0">
                        <b>
                            Siape: {{ item.servidor.siape }} Tipo: {{ item.tipo ? item.tipo : '?' }}<br>
                            Banca: {{ item.banca ? item.banca : '?' }} <br>
                            Processo: {{ item.processo ? item.processo : '?' }}
                        </b>
                    </h5>
                </div>
                <div class="box-footer no-padding">
                    <!-- --
                    <div class="row">
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">0</h5>
                                <span class="description-text">Interno</span>
                            </div>
                        </div>
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">0</h5>
                                <span class="description-text">Externo</span>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="description-block">
                                <h5 class="description-header">60</h5>
                                <span class="description-text">Tempo <small>dias</small></span>
                            </div>
                        </div>
                    </div>
                    <!-- -->

                    <div class="box-body">
                        <h4>Avaliadores</h4>

                        <table class="table table-condensed">
                            <tbody>

                                <tr v-for="avaliador in item.avaliadores">
                                    <td width="1"><small class="label label-default" v-bind:class="[avaliador.tipo == 'externo' ? 'label-info' : '' ]">
                                        {{ avaliador.tipo | uppercase }}</small></td>
                                    <td>{{ avaliador.nome | uppercase }}
                                        <small class="label" v-bind:class="[avaliador.status_pagamento == 'pago' ? 'label-primary' : 'label-danger' ]">
                                            <i class="fa " v-bind:class="[avaliador.status_pagamento == 'pago' ? 'fa-check' : 'fa-exclamation' ]"></i>
                                            {{ avaliador.status_pagamento}} </small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="box-body">

                        <a class="btn btn-app btn-block" style="margin: 0 0 5px">
                            <i class="fa fa-cloud-download"></i> Gerar Declaração de Avaliação
                        </a>

                        <a class="btn btn-app btn-block" style="margin: 0 0 5px">
                            <i class="fa fa-send"></i> Enviar link de Execução de Atividade
                        </a>

                        <a class="btn btn-app btn-block" style="margin: 0 0 5px">
                            <i class="fa fa-check-square-o"></i> Adicionar a Lista de Pagamento
                        </a>

                        <a class="btn btn-app btn-block" style="margin: 0 0 5px">
                            <i class="fa fa-check"></i> Finalizar Processo
                        </a>
                    </div>
                </div>
            </div>
            <!-- /.widget-user -->
        </div>

    </div>


</template>

<script type="text/javascript">
    import VueFilter from 'vue-filter'

    export default {
        name: 'processo-index',

        data () {
            return {
                loading: true,
                searchTerm: '',
                processos: [{}]
            }
        },

        created: function() {
            this.getProcessos();
        },

        computed: {
          filteredSearchTerm () {
              var term = this.searchTerm.toUpperCase(),
                  reg = new RegExp(term);

              if(!this.loading) {
                  return this.processos
                      .filter(
                          item => item.servidor.nome.indexOf(term) > -1 ||
                          reg.test(item.servidor.siape) ||
                          reg.test(item.processo) ||
                          reg.test(item.banca)
                      )
              }
          }
        },

        updated: function () {
            //jQuery('.itens-processos').pinbox();
            //swal("Good job!", "You clicked the button!", "success");
        },

        methods: {
            getProcessos () {
                var self = this;

                this.$http
                    .get('/api/processos').then(response => {
                        self.processos = response.data.data;
                        self.loading = false;
                }, response => {
                    // error callback
                    console.log('Error');
                });
            }

        }
    }


</script>