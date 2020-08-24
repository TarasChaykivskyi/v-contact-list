<template>
    <div class="contact-page">
        <button @click="goToBack" class="goToBack">&#9668; Go to back</button>
        <h2>Details contact</h2>
        <div class="contact" v-for="value of listContact" :key="value.id">
            <div v-if="value.id == id" class="contact-details">
                <div class="field">
                    <span>Person: </span>
                    <span>{{ value.firstName + " " + value.lastName }}</span>
                </div>
                <div class="field">
                    <span>Phone: </span>
                    <span>{{ value.phone }}</span>
                </div>
                <div class="field">
                    <span>Email: </span>
                    <span>{{ value.email }}</span>
                </div>
                <div class="field">
                    <span>City: </span>
                    <span>{{ value.city }}</span>
                </div>
            </div>
        </div>
        <add-data-contact :currentID="id" />
    </div>
</template>

<script>
    import addDataContact from "./addDataContact";

    export default {
        name: "contact",
        computed: {
            listContact() {
               return this.$store.getters.list
            },
            id() {
                return this.$route.params.id
            }
        },
        methods: {
            goToBack() {
                this.$router.go(-1)
            }
        },
        components: {
            addDataContact
        }
    }
</script>

<style scoped>
    .contact-page {
        position: relative;
        padding-top: 50px;
    }

    h2 {
        position: absolute;
        top: 0;
        right: 15px;
        margin: 0;
        font-size: 30px;
    }

    .goToBack {
        position: absolute;
        top: 0;
        left: 15px;
    }

    .contact-details {
        border: 2px solid #000;
        width: 500px;
        margin: 20px auto;
    }

    .field {
        display: flex;
        justify-content: space-between;
        border: 1px solid dimgrey;
        padding: 10px 20px;
    }

    .field span {
        display: inline-block;
        font-size: 18px;
    }

    .field span:first-child {
        font-weight: bold;
    }
</style>