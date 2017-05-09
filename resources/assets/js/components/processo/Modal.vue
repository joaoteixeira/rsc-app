<template>
    <transition name="processo-modal">
        <div id="processo_modal" class="modal fade">
            <div class="modal-dialog modal-lg">
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
                                    <div class="form-group col-md-6">
                                        <label for="processo">Número do processo</label>
                                        <input type="text" class="form-control" id="processo" placeholder="Ex.: 0001/2017" v-model="processo.processo" v-on:focus="nullErrors()">
                                        <span class="text-danger small" v-if="error.processo" v-text="error.processo"></span>
                                    </div>

                                    <div class="form-group col-md-2">
                                        <label for="banca">Número da banca</label>
                                        <input type="text" class="form-control" id="banca" placeholder="Ex.: 150" v-model="processo.banca" v-on:focus="nullErrors()">
                                        <span class="text-danger small" v-if="error.banca" v-text="error.banca"></span>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label>Tipo</label>
                                        <select class="form-control select2" style="width: 100%;" aria-hidden="true" v-model="processo.tipo" v-on:focus="nullErrors()">
                                            <option selected="selected">Selecione um tipo</option>
                                            <option value="RSC-I">RSC-I</option>
                                            <option value="RSC-II">RSC-II</option>
                                            <option value="RSC-III">RSC-III</option>
                                        </select>
                                        <span class="text-danger small" v-if="error.tipo" v-text="error.tipo"></span>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="form-group col-md-6">
                                        <label for="link">Link</label>
                                        <input type="text" class="form-control" id="link" placeholder="Ex.: http://ifro.edu.br" v-model="processo.link" v-on:focus="nullErrors()">
                                        <span class="text-danger small" v-if="error.link" v-text="error.link"></span>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label>Responsável</label>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" v-model="processo.atribuir"> Atribuir a mim
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <hr>

                                    <div class="form-group col-md-6">
                                        <label for="nome">Nome do servidor (Avaliado)</label>
                                        <input type="text" class="form-control" id="nome" placeholder="Nome" v-model="processo.nome" v-on:focus="nullErrors()">
                                        <span class="text-danger small" v-if="error.nome" v-text="error.nome"></span>
                                    </div>

                                    <div class="form-group col-md-2">
                                        <label for="siape">Siape</label>
                                        <input type="text" class="form-control" id="siape" placeholder="Siape" v-model="processo.siape" v-on:focus="nullErrors()">
                                        <span class="text-danger small" v-if="error.siape" v-text="error.siape"></span>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="email">E-mail</label>
                                        <input type="email" class="form-control" id="email" placeholder="E-mail" v-model="processo.email" v-on:focus="nullErrors()">
                                        <span class="text-danger small" v-if="error.email" v-text="error.email"></span>
                                    </div>

                                </div>

                            </div>
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
                    nome: '',
                    siape: '',
                    email: '',
                    atribuir: false
                },

                error: {
                    processo: '',
                    banca: '',
                    link: '',
                    tipo: '',
                    nome: '',
                    siape: '',
                    email: ''
                }
            }
        },

        methods: {
            nullErrors () {
                this.error = {
                    processo: '',
                    banca: '',
                    link: '',
                    tipo: '',
                    nome: '',
                    siape: '',
                    email: ''
                }
            },

            save () {
                var self = this;

                this.$http
                    .post('/api/processos', this.processo)
                    .then((response) => {
                        var data = response.data;
                        console.log(data)
                        if(!data.success) {
                            var error = self.error,
                                errors = data.errors;

                            error.processo = errors.processo[0];
                            error.banca = errors.banca[0];
                            error.link = errors.link[0];
                            error.tipo = errors.tipo[0];
                            error.nome = errors.nome[0];
                            error.siape = errors.siape[0];
                            error.email = errors.email[0];
                        } else {
                            swal("Processo adicionado", "", "success");
                        }
                    })
                    .catch((response) => {
                        console.log('Error')
                    })
            }
        }
    }
</script>