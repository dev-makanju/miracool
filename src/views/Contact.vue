<template>
    <div class="main-wrapper flex">
         <div class="main-wrapper-items">
            <div class="form-wrapper flex">
               <h1>Get in touch</h1>
               <h4>Fill the form , it's easy...</h4>
               <div class="send-messages flex">
                  <div class="text-input">
                     <input type="text" placeholder="Email Address">
                 </div>
                 <div class="text-input">
                     <input type="text" placeholder="Email Address">
                </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                <div class="button-wrapper  ">
                    <input type="submit" value="Send It">
               </div>
            </div>
            </div>
         </div>
          <div class="main-wrapper-items flex">
             <div class="content-image">
                <img src="@/assets/icons/email-re.png" alt="">
             </div>
          </div>
</div>
     
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.main-wrapper{
    justify-content: center ;
    flex-direction: column-reverse ;
    align-items: center;    
    margin-bottom: 4em ;

    @media (min-width:800px){
        flex-direction: row;
    }

    .main-wrapper-items{
        flex: 1;
        justify-content: center;
        align-items: center;      
        
        .content-image{
            margin-top: 10%;
            animation: zoom-in-out 4s ease-in-out infinite alternate;

            img{
                @media (max-width:450px) {
                    width: 100px;
                }

                @media (max-width:800px) {
                    width: 200px;
                }
            }
        }

        @keyframes zoom-in-out {
            0%{
                transform: scale(.9 , .9) rotateZ(2deg);
            }
            50%{
                transform: scale(1.1 , 1.1) rotatez(0deg);
            }
            100%{
                transform: scale(1 , 1) rotatez(-3deg);
            }
        }


    }
}


.form-wrapper{
    width: 90%;
    max-width: 500px;
    background: #eee ;
    margin: 0px auto;
    border-radius: 5px;
    margin-top: 30px;
    flex-direction: column ;
    gap: 10px;
    padding: 40px 30px;
    box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , .3);


    @media (min-width: 800px) {
        width: 90%;
    }

    .send-messages{
        flex-direction: column ;
        gap: 10px;
    }

    .text-input{
        input{
            width: 100%;
            padding: 7px;
            border-radius: 5px;
            border: 1px solid #eee;
        }
    }

    textarea{
        width: 100%;
        padding: 7px;
        border: 1px solid #eee;
        font-family: 'Montserrat', sans-serif;
    }

    .button-wrapper input{
        padding: 7px;
        background:  #156373;
        border: none;
        color: #eee;
        border-radius: 5px;
        cursor: pointer;
    }
    
}


</style>