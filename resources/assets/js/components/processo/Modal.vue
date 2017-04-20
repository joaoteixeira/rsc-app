<template>
    <transition name="processo-modal">
        <div id="processo_modal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">Processo</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <div class="box-body">
                                <div class="row">

                                    <div class="form-group col-md-8">
                                        <label for="processo">Número do processo</label>
                                        <input type="text" class="form-control" id="processo" placeholder="Ex.: 0001/2017" v-model="processo.processo">
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="banca">Número da banca</label>
                                        <input type="text" class="form-control" id="banca" placeholder="Ex.: 150" v-model="processo.banca">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="link">Link</label>
                                    <input type="text" class="form-control" id="link" placeholder="Ex.: http://ifro.edu.br" v-model="processo.link">
                                </div>

                                <div class="row">

                                    <div class="form-group col-md-4">
                                        <label>Tipo</label>
                                        <select class="form-control select2" style="width: 100%;" aria-hidden="true" v-model="processo.tipo">
                                            <option selected="selected">Selecione um tipo</option>
                                            <option>RSC-I</option>
                                            <option>RSC-II</option>
                                            <option>RSC-III</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-8">
                                        <label>Responsável</label>
                                        <select class="form-control select2" style="width: 100%;" aria-hidden="true" v-model="processo.user_id">
                                            <option selected="selected">Selecione um tipo</option>
                                            <option>Lorena Tavares</option>
                                            <option>João Teixeira</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            {{ processo }}
                            <!-- /.box-body -->
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" @click="save()">Salvar</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'processo-modal',

        data () {
            return {
                processo: {
                    processo: '',
                    banca: '',
                    link: '',
                    tipo: '',
                    user_id: 0
                }
            }
        },

        methods: {
            save () {
                this.$http
                    .post('/api/processo', this.processo)
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((response) => {
                        console.log('Error')
                    })
            }
        }
    }
</script>