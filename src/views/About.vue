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
                        <h2>Interests</h2>
                        <h4>i'm intrested in:</h4>
                        <ul v-for="(list , index) in hightlight  " :key="index">
                            <li>{{list.info}}</li>
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
                     "My name is Makanju Oluwafemi Emmanuel, a computer science undergraduate at Obafemi Awolowo University ile-ife Nigeria.  I’m an enthusiastic software developer and a technical writer, with a keen focus on making the web a better environment. I love to motivate myself to be consistent with learning and working smart   I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications, I’m proficient in converting high quality designs to a functional and responsive front end code. In a dynamic environment, I work well with using effective communication skills to interact with other co-workers. At my leisure, I enjoy traveling and watching  football. ",
                },
                hightlight:[
                    {
                        info:'Mountain hiking',
                    },
                    {
                        info:'music',
                    },
                    {
                        info:'entrepreneurship',
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
    height: 100vh;

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
                padding: 20px 20px;

                @media (max-width: 450px ) {
                    padding: 20px 5px;
                }

                p{
                    font-family: 'Montserrat', sans-serif ;
                    font-weight: 300;
                    line-height: 32px;
                    word-spacing: 2px ;
                    font-size: 17px;
                }

                ul li{
                    padding: 5px 3px ;
                    font-family: 'Montserrat', sans-serif ;
                    line-height: 32px;
                    word-spacing: 2px ;
                    font-size: 14px;
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