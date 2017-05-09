<template>
    <div id="processos_aberto">

        <div class="box box-primary">
            <div class="box-header ui-sortable-handle" style="cursor: move;">
                <i class="ion ion-clipboard"></i>

                <h3 class="box-title">Últimos processos abertos</h3>

                <div class="pull-right box-tools" style="margin-top:5px">
                    <!--<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="">-->
                    <!--<i class="fa fa-plus"></i> Novo Processo</button>-->
                    <a href="#" class="btn btn-default btn-sm" data-toggle="modal" data-target="#processo_modal">
                        <i class="fa fa-plus"></i> Novo Processo
                    </a>
                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <ul class="todo-list ui-sortable" v-if="!loading">
                    <li class="" v-for="processo in processos">
                        <!-- drag handle -->
                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                        <span class="text">{{ processo.processo }} - {{ processo.tipo }} - {{ processo.servidor.nome }}</span>
                        <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                        <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                        </div>
                    </li>
                    <!--
                    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                        <span class="text">Make the theme responsive</span>
                        <small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                        <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                        <span class="text">Let theme shine like a star</span>
                        <small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                        <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                        <span class="text">Let theme shine like a star</span>
                        <small class="label label-success"><i class="fa fa-clock-o"></i> 3 days</small>
                        <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                        <span class="text">Check your messages and notifications</span>
                        <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 week</small>
                        <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                        <span class="text">Let theme shine like a star</span>
                        <small class="label label-default"><i class="fa fa-clock-o"></i> 1 month</small>
                        <div class="tools">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-trash-o"></i>
                        </div>
                    </li>
                    <!-- -->
                </ul>
            </div>
            <!-- /.box-body -->

        </div>
        <processo-modal></processo-modal>
    </div>
</template>

<script>
    import Vue from 'vue'
    import ProcessoModal from '../processo/Modal'

    export default {
        name: 'processos-aberto',
        components: { ProcessoModal },

        data() {
            return {
                loading: true,
                processoModalVisible: false,
                processos: [{}]
            }
        },

        mounted: function() {
            this.getProcessosNovos();
        },

        methods: {
            getProcessosNovos () {
                this.$http.get('/api/processos-novos').then(response => {
                    this.processos = response.data;
                    this.loading = false;

                }, response => {
                    // error callback
                    console.log('Error');
                });
            }
        }
    }
</script>