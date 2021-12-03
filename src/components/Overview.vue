        <template>

              <div class="project-overview flex">
                    <div class="content-wrapper product">
                         <img src="@/assets/portfolio-icons/building-gf93f8b712_1920.jpg" alt="">
                    </div>
                    <div class="content-wrapper product">
                        <div class="description">
                            <h1>
                                <span style="color:">#</span>Vanilla
                            </h1>
                            <p>vanilla is web app build for transaction base purposes,
                                and also used for product management</p>

                            <div class="view-product">
                                 <router-link to="#" class="links">Go to site</router-link>
                            </div>
                        </div>
                    </div>
               </div>
</template>

<script>
    export default {
        name:'overview',
        
        
    }
</script>

<style lang="scss" scoped>

.project-overview{
    background: #398291;
    width: 80%;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;

    @media (min-width: 600px){
        flex-direction: row ;
    }
}

.content-wrapper{

    &.product{
        width: 300px;
        height: 300px;

        @media (min-width: 600px) {
            flex-direction: row ;
            width: 500px;
            height: 400px;
        }

        img{
            width: 100%;
            height: 100% ;
            border-radius: 20px;
        }

        .description{
            padding: 30px 20px;
            position: relative;
            height: 100%;

            h1{
                color: #eee;
                font-family: 'Roboto Mono', monospace ;
                font-size: 24px;
            }

            p{
                padding: 30px 0px;
                color: #eee;
                font-family: 'Montserrat', sans-serif;
            }

            .view-product{
                position: absolute;
                bottom: 5em ;

                .links{
                    background:  #0e1a1f;
                    padding: 15px;
                    border-radius: 10px ;
                    color: #eee;
                    text-decoration: none;
                    cursor: pointer;
                    outline: none;
                }
            }
        }
    }
}

</style>