<template>
    <div class="button-overlay">
        <span></span>
    </div>
</template>

<script>
    export default {
        name:'userAuthLoading',
    }
</script>

<style lang="scss" scoped>

.button-overlay{
    top: 0;
    z-index: 22;
    width: 58px;
    background: rgba(0 , 0 , 0 , .5);
    position: absolute;
    display: flex;
    justify-content: center ;
    align-items: center;
    border-radius: 5px;

    @keyframes spin {
        to{
            transform: rotateZ(360deg);
        }
    }

    span{
        display: block;
        width: 35px;
        height: 31px;
        margin: 0 auto;
        border: 3px solid transparent ;
        border-top-color:  rgb(176, 180, 180);
        border-bottom-color:  rgb(34, 81, 87);
        border-radius: 50%;
        animation: spin ease 1000ms infinite;
    }

}
</style>