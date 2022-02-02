<template>
    <div class="about_container flex">
            <div class="about_container__tabs flex">
                <div class="about_container__tabs_wrapper">
                    <h2>About Me</h2>
                </div>
                <div class="about_container__tabs_wrapper flex">
                    <div class="about_container__tabs_wrapper__content">
                          <p>{{ about.About}}</p>
                    </div>
                    <div class="about_container__tabs_wrapper__content">
                        <h2>Highlights</h2>
                        <ul v-for="(list , index) in hightlight  " :key="index">
                            <li>{{list.info}}</li>
                        </ul>
                    </div>
                </div>
            </div>
                  <h2>INTEREST</h2>
            <div class="about_container__tabs flex">
                  <div class="inter">
                      <div class="interest_tabs">
                      <h4>my personal interests include:</h4>
                      <ul>
                        <li>
                           <p>
                               {{   }}
                           </p>
                           </li>
                           <li><span></span>
                           <p>
                               mountain hiking
                           </p>
                        </li>
                      </ul>
                  </div>
                  </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:"About",
        data(){
            return{
                about:{
                    sureName:'Makanju',
                    firstName:'oluwafemi',
                    About:
                     'Hi there , my name is Makanju Oluwafemi Emmanuel ', 
                },
                hightlight:[
                    {
                        info:' the ',
                    },
                    {
                        info:'non aliquam nisl metus vel justo.Aenean sapien dolor, tempor ut efficitur ac, porta sit amet urna. Mauris tincidunt ligula sit amet enim scelerisque, eget ullamcorper nulla cursus. Aliq',
                    },
                    {
                        info:'non aliquam nisl metus vel justo.Aenean sapien dolor, tempor ut efficitur ac, porta sit amet urna. Mauris tincidunt ligula sit amet enim scelerisque, eget ullamcorper nulla cursus. Aliq',
                    }
                ]

            }
        }
    }
</script>

<style lang="scss" scoped>
.about_container{
    width: 90%;
    margin: auto;
    flex-direction: column;

    @media (min-width:600px){
        width: 80%;
        margin: auto;
        flex-direction: column;
    }


    &__tabs{
        flex-direction: column;
        flex-wrap: nowrap;

        @media (min-width:600px){
            //
        }

        .interest_tabs{
            flex: 1;
            padding: 20px 20px;
        }

        &_wrapper{
            padding: 5px 3px;
            flex-direction: column ;
            flex-wrap: nowrap;

            @media (min-width:600px){
                padding: 10px 5px;
                flex-direction: row;
            }

            &__content{
                flex: 1;
                padding: 20px 20px;

                ul li{
                     padding: 7px 3px ;
                }
            }

            h2{
                text-align: center;
                text-decoration: underline;
            }

        }
    }
}

.inter{
    display: flex ;
    flex-direction: column;

    @media (min-width:600px) {
        flex-direction: row;
    }
}

</style>