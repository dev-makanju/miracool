<template>
    <div class="modal">
        <div class="modal-content">
            <p>{{ this.modalMessage }}</p>
            <button class="btn-click" @click="closeModal">X</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"modal",
        props:["modalMessage"],
        methods:{
            closeModal(){
                this.$emit("close-modal");
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1111;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    background: rgba(0 , 0 , 0 , .7);

    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        width: 300px;
        padding: 40px 30px;
        background: #eee;
        position: relative;

        p{
            text-align: center;
        }

        .btn-click{
            align-self: center;
            border: none;
            color: #fff;
            background:  rgb(8, 8, 102);
            padding: 7px;
            border-radius: 5px;
            position: absolute;
            right: 0;
            top: 0;
        }
    }
}

</style>