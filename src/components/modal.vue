<template>
    <div class="overlay">
        <div class="modal">
            <span>Are you sure?</span>
            <button class="button-modal button-modal-confirm" @click="modalConfirm(list)">Yes</button>
            <button class="button-modal" @click="hideModalConfirm">No</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "modal",
        computed: {
          ...mapGetters({
              list: "list"
            })
        },
        methods: {
            ...mapActions({
                hideModalConfirm: "hide",
                modalConfirm: "modalConfirm",
            })
        }
    }
</script>

<style scoped>

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.75);
    }

    .modal {
        position: relative;
        padding: 40px 60px;
        color: #fff;
        font-size: 20px;
        background: darkolivegreen;
        text-align: center;
        font-weight: bold;
    }

    span {
        display: block;
        margin-bottom: 20px;
    }

    button {
        border: none;
        font-size: 16px;
        margin: 0 10px;
        padding: 5px;
        font-weight: bold;
        cursor: pointer;
        outline: none;
    }

</style>