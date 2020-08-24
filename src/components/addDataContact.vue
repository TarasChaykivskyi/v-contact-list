<template>
    <div class="add-new-data-contact">
        <button @click="showAddInputField" v-if="!showAddFields">Add new field</button>
        <div class="container-add-data-fields" v-else>
            <div class="add-data-fields">
                <label :for="'field' + counter">Name field: </label>
                <input type="text" :id="'field' + counter" v-model="fields.field">
            </div>
            <div class="add-data-fields">
                <label :for="'data-field' + counter">Input data field:</label>
                <input type="text" :id="'data-field' + counter" v-model="fields.dataField">
            </div>
            <button @click="addNewField">Add fields</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "addDataContact",
        props: ['currentID'],
        data() {
            return {
                showAddFields: false,
                contact: {},
                counter: 1,
                fields: {
                    field: '',
                    dataField: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                list: 'list'
            })
        },
        methods: {
            showAddInputField() {
                this.showAddFields = true
            },
            addNewField() {
                this.contact['field' + this.counter]= this.fields
                this.reset(this.list)
                this.counter++
                this.field = this.dataField = ''
                this.showAddFields = false
            },
            setCurrentContact() {
                for (let key of this.list) {
                    if(+key.id === +this.currentID) {
                        this.contact = key;
                    }
                }
            },
            ...mapActions({
                reset: 'reset'
            })
        },
        created() {
            this.setCurrentContact()
        }
    }
</script>

<style scoped>
    .add-new-data-contact {
        text-align: center;
        margin: 0 auto;
        padding: 20px;
    }

    .container-add-data-fields {
        margin: 40px auto;
        width: 500px;
        text-align: left;
    }

    .add-data-fields {
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label {
        width: 150px;
        font-size: 18px;
    }

    input {
        padding: 5px 10px;
        font-size: 18px;
    }

    button {
        margin: 20px auto;
        display: block;
        width: 50%;
    }
</style>