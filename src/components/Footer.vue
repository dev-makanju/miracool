<template>
      <div class="footer flex">
            <div class="footer-wrapper">
                <h1>{{ this.name }}</h1>
                <p>Built with vue </p>
                <p>M  2021</p>
            </div>
            <div class="footer-wrapper flex">
                <div class="center__footer-wrapper">
                    <h3>Contact</h3>
                    <p>+2348106006773</p>
                    <p>Makurseme@gmail.com</p>
                </div>
                <div class="center__footer-wrapper">
                    <h3>Contact</h3>
                    <p><router-link class="links" :to="{name:'Home'}">Home</router-link></p>
                    <p><router-link class="links" to="#">Project</router-link></p>
                    <p><router-link class="links" :to="{name:'Contact'}">Contact me</router-link></p>
                </div>
            </div>
            <div class="footer-wrapper">
                <h2>Follow me</h2>
                <ul class="footer_icon flex">
                      <li>
                          <BreadcrumbItem>
                                <a class="tar_link" href="https://github.com/dev-makanju">
                                    <font-awesome-icon :icon="['fab' , 'github']"/>
                                </a>
                            </BreadcrumbItem>
                       </li>
                      <li>
                          <BreadcrumbItem>
                                <a class="tar_link" href="https://twitter.com/mira_code">
                                    <font-awesome-icon :icon="['fab' , 'twitter']"/>
                                </a>
                            </BreadcrumbItem>
                        </li>
                      <li>
                           <BreadcrumbItem>
                                <a class="tar_link" href="https://www.linkedin.com/in/makanju-oluwafemi-emmanuel-2060bb184/">
                                    <font-awesome-icon :icon="['fab' , 'linkedin-in']"/>
                                </a>
                            </BreadcrumbItem>
                      </li>
                </ul>
            </div>
      </div>
</template>

<script>
    export default {
        props:['name']
    }
</script>

<style lang="scss" scoped>
.footer{
    margin: 0px auto;
    flex-direction: column;
    padding: 50px 10px;
    color: #eee;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: .5px;


    @media (min-width:700px){
        width: 80%;
        flex-direction: row;
        padding: 50px 40px;
        gap: 7em;
    }

    .footer-wrapper{
        flex-direction: row;
        gap: 4em;

        h2{
            margin-bottom: 10px; 
        }

        .center__footer-wrapper{

            h3{
               margin-bottom: 10px;
            }

            p{
                padding: 5px 0px;
            }

            .links{
                text-decoration: none;
                color: #eee;
                padding: 5px;

                &:hover{
                    color:  #156373 ;
                }
            }

        }
    }

    &_icon li{
        list-style-type: none;
        padding: 7px 7px;
        transition: .5s ease;

        &:hover{
            color: #156373 ;
            transform: scale(1.5) ;
        }
    }
}

</style>