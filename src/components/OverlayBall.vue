<template>
    <div class="parent-div">
         <div id="item" class="box-1"></div>
         <div id="item" class="box-2"></div>
         <div id="item" class="box-3"></div>
         <div  id="item"  class="box-4"></div>
    </div>
</template>

<script>
export default {
    name:"BallOverlay",
}
</script>

<style lang="scss" scoped>

       .parent-div{
           @media (min-width:768px){
              width: 100%;
              height: 600px ;
              position: absolute;
              top: 0px;
              overflow: hidden ;
           }
           width: 100%;
           height: 600px;
           position: absolute ;
           top: 0px;
           overflow: hidden ;
           
           .box-1{
                width: 100px ;
                height: 100px ;
                border-radius: 50% ;
                background: #000 ;
                animation:slide-in 30s ease-in infinite;
                opacity: .1 ;
                float: right;
                @keyframes slide-in { 
                    from { transform: translateY(-700px); } 
                    to { transform: translateY(0px); } 
                }

            }

            .box-2{
                @media (min-width:768px){
                    width: 300px;
                    height: 300px ;
                    border-radius: 50%;
                    background: #000;
                    animation:slide-in 25s ease-in-out infinite;
                    opacity: .1;
                    right: 1000px;
                }

                width: 40px;
                height: 40px ;

                @keyframes slide-in { 
                    from { transform: translateY(-700px); } 
                    to { transform: translateY(700px); } 
                }
            }

            .box-3{
                width: 100px;
                height: 100px ;
                border-radius: 50%;
                background: #000;
                opacity: .1;
                animation:slide-in 15s ease-in-out infinite;
                transform: translateX(800px);
                @keyframes slide-in { 
                    from { transform: translateY(-700px); } 
                    to { transform: translateY(700px); } 
                }
            }

            .box-4{
                width: 20px;
                height: 20px ;
                border-radius: 50%;
                background: #000;
                opacity: .1 ;
                animation:slide-in 20s ease-in-out infinite;
                transform: translateX(700px);
                @keyframes slide-in { 
                    from { transform: translateY(-700px); } 
                    to { transform: translateY(700px);} 
                }
            }

       }
</style>
