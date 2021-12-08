<template>
        <div class="project-overview flex">
            <div class="content-wrapper product">
                    <img :src="require(`@/assets/portfolio-icons/${project.photoName}.jpg`)" alt="">
            </div>
            <div class="content-wrapper product">
                <div class="description">
                    <h1>
                        <span style="color:">#</span>{{ project.projectName }}
                    </h1>
                    <p>{{ project.ProjectDesc }}</p>
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
        props:['project']
    }
</script>

<style lang="scss" scoped>

.project-overview{
    background: #398291;
    width: 80%;
    max-width: 800px;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    transition: .5s ease;
    box-shadow: 0px 2px 5px 5px rgba(0 , 0 , 0 , .3);

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
    flex: 1;

    &.product{
    
        @media (min-width: 600px) {
            flex-direction: row ;
            max-width: 500px ;
            height: 400px ;
        }

        img{
            width: 100%;
            height: 100%;
            border-radius: 20px ;
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
                padding: 10px 0px ;

                @media (min-width: 600px){
                    position: absolute;
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