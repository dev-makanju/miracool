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
                          <li><span></span>
                          <p>

                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                          </li>
                          <li><span></span>
                          <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                          </li>
                      </ul>
                  </div>

                  <div class="interest_tabs">
                      <h2>Skills</h2>
                      <ul>
                          <li><span>Tools</span>
                               <p>Vue js</p>
                               <p>Node js</p>
                               <p>Express</p>
                          </li>
                          <li><span>Storage</span>
                               <p>Vue js</p>
                               <p>Node js</p>
                               <p>Express</p>
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
                    About:'Integer bibendum, massa nec venenatis pretium, arcu libero malesuada felis, eget sagittis lorem leo ut metus. Duis finibus sodales massa vel aliquet. Ut ante arcu, euismod sit amet volutpat eleifend, semper ultrices velit. Ut et rhoncus lacus. Mauris gravida tortor sit amet elit fringilla, nec condimentum elit venenatis. Aliquam eleifend bibendum elit et fringilla. Maecenas dolor tortor, commodo sit amet commodo a, ornare vel ex.Donec sit amet placerat libero. Duis nec erat ultricies, aliquam odio bibendum, luctus velit. Vestibulum tincidunt libero nunc, non elementum lorem tempor non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non pellentesque erat. Quisque in urna sed ipsum rutrum venenatis et at velit. Donec at augue lectus.Ut fringilla gravida pharetra. Mauris ultrices nisi vel commodo condimentum. Integer dignissim congue leo, eget porttitor mi sagittis sed. Maecenas tincidunt tortor tincidunt lacus rhoncus sagittis. Morbi sagittis efficitur quam vel cursus. Duis suscipit non nulla quis malesuada. Proin dapibus mattis est sit amet efficitur. Vivamus consequat nec nisl nec pellentesque. Fusce aliquet est diam, at sodales neque vulputate eget. Sed facilisis urna non maximus efficitur. Donec congue est non sem malesuada sagittis. Nulla malesuada libero lectus, id elementum magna condimentum in. Fusce imperdie',   
                },
                hightlight:[
                    {
                        info:'non aliquam nisl metus vel justo.Aenean sapien dolor, tempor ut efficitur ac, porta sit amet urna. Mauris tincidunt ligula sit amet enim scelerisque, eget ullamcorper nulla cursus. Aliq',
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