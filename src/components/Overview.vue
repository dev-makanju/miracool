<template>
        <div v-scrollanimation class="project-overview" id="sec-project">
            <div class="content-wrapper product">
                <img v-scrollanimation  v-lazy="require(`@/assets/portfolio-icons/${project.photoName}.png`)" alt="">
            </div>
            <div class="content-wrapper product">
                <div class="description">
                    <h1>
                        <span style="color: rgb(39, 75, 10)"> 
                            <a class="link__hub" :href="[project.github]" target="__blank">
                            <font-awesome-icon :icon="['fab' , 'github']"/>
                            </a>&nbsp;&nbsp;
                            </span><span style="color:#eee">{{ project.projectName }}</span>
                    </h1>
                    <p>{{ project.ProjectDesc }}</p>
                    <span style="font-weight; 600;">Technology used</span><br>
                    <span>
                        {{ project.stalk }}
                    </span>
                    <div class="view-product">
                        <a  :href="[project.link]" target="__blank" class="links">Go to site</a>
                    </div>
                 </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:'overview',
        props:['project']
    }
</script>

<style lang="scss" scoped>

.link__hub{
    color: #0E1A1F;
}

.project-overview{
    display: flex ;
    background: #398291 ;
    width: 90% ;
    max-width: 800px ;
    flex-direction: column ;
    align-items: center ;
    border-radius: 20px ;
    transition: 2s ease ;
    box-shadow: 0px 2px 5px 5px rgba(0 , 0 , 0 , .3);
    margin: 20px ;

    &.before-enter{
        opacity: 0 ;
    }

    &.enter{
        transform: scale(1) ;
        opacity: 1 ;
    }
    
    &:hover{
        transform: scale(1.001) rotateZ(1.01deg);
    }

    @media (min-width: 600px){
        flex-direction: row ;
        &:nth-child(even){
            flex-direction: row-reverse;
        }
    }
}

.content-wrapper{
    width: 100%;
    height: 300px;
    overflow: hidden;

    @media( min-width: 600px){
        flex: 1 ;
    }

    &.product{
        img{
            width: 100%;
            height: 300px;
            border-radius: 20px ;
            transition: .3s ease-in-out all; 
            object-fit: cover;

            &.before-enter{
                transform: scale(1.3) scale(1.2) rotateZ(3deg);
            }

            &.enter{
                transform: scale(1);
            }
        }
    
        @media (min-width: 600px){
            flex-direction: row;
            max-width: 500px;
            height: 400px;
        }

        @media (min-width:600px){
            img{
               width: 100%;
               height: 100%;
               border-radius: 20px ;
            }
        }

        .description{
            padding: 10px 13px;
            position: relative;
            height: 100%;

            @media (min-width:768px) {
                padding: 30px 20px;
            }

            h1{
                color: #eee;
                font-family: 'Roboto Mono', monospace ;
                font-size: 24px;
            }

            p{
                color: #eee;
                font-family: 'Montserrat', sans-serif;
            }

            .view-product{
                padding: 10px 0px;
                position: absolute;
                bottom: 2em;


                @media (min-width: 600px){
                    bottom: 4em ;
                }

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