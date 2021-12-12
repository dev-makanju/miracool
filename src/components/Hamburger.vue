<template>
     <div @click="isToggleNavbar" :isClickedNavbar="returnNavbarState" :class="[ 'menu-wrapper', isClickedNavIcon ? ' open' : '']" id="navbar">
        <div class="menu-burger"></div>
        <div class="menu-burger"></div>
        <div class="menu-burger"></div>
     </div>
</template>

<script>
    export default {
        name:'Hamburger',
        props:['isClickedNavbar'],
        data(){
            return{
                isClickedNavIcon:null,
            }
        },
        methods:{
            isToggleNavbar(){
                this.isClickedNavIcon = !this.isClickedNavIcon
                this.$emit('close-nav');
            },
            returnNavbarState(){
                this.isClickedNavIcon = !this.isClickedNavIcon
            }
        },
    }
</script>

<style lang="scss" scoped>
.menu-wrapper{
    position: relative;
    cursor: pointer ;
    width: 50px;
    height: 50px;
    display: flex ;
    justify-content: center ;
    flex-direction: column ;
    align-items: flex-end;
    gap: 4px;
    z-index: 111;


    @media (min-width: 800px){
        max-width: 50px;
    }

    .menu-burger{
        width: 35px;
        height: 4px;
        border: 3px solid #eeee;
        border-radius: 3px;
        transition: all .3s ease;
        box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);

        @media (min-width: 800px){
             min-width: 35px;
        }

        &:nth-child(1){
            width: 45px;

            @media (min-width: 800px) {
                min-width: 45px;
            }
        }

        &:last-child{
            width: 25px;

            @media (min-width: 800px) {
                 min-width: 25px;
            }
        }
    }

    /*****this is at the bottom to override the style*****/
    /****when user click the navbar button****/

    &.open :nth-child(even){
        opacity: 0;
        margin-right: -10px;    
    }

    &.open :first-child{
        width: 45px;
        transform: rotateZ(-405deg) translate(-13px);
    }

    &.open :last-child{
        width: 45px;
        transform: rotateZ(405deg)  translate(-13px);
    }
}

</style>