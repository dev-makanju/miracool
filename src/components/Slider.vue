<template>
    <a :href="[project.link]" target="__blank" class="links">
        <div class="project-overview" id="project">
            <div class="content-wrapper top">
                <img v-lazy="require(`@/assets/portfolio-icons/${project.photoName}.png`)" alt="">
            </div>
            <div class="content-wrapper product">
                <div class="description">
                    <h4 class="text">
                        {{ truncate(project.projectName) }}
                    </h4>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name:'overview',
        props:['project'],
        methods: {
            truncate(desc){
               const len = 50;
               const truncs = desc.substring(0, len)
               return truncs + '...';
            }
        },
    }
</script>

<style lang="scss" scoped>
    .tect-used {
        color: #225157aa;
        font-size: 14px;
        font-size: 300;
        margin-top: 10px;
    }


    .top {
        position: relative;
        overflow: hidden;
    }


    .stack-color {
       color: #225157aa;
    }

    .project-overview {
       min-width: 200px;
       height: 350px;
       box-shadow: 0px 4px 7px rgba(0, 0, 0, .1);
       border-radius: 7px;
       overflow: hidden;

       .content-wrapper img{
          width: 100%;
          height: 240px;
       }

       .product {
          padding:  5px;
       }
    }
   
    .text{
        color: #225157;
        font-size: 18px;
        text-align: left;
    }

    .links {
        text-decoration: none;
    }
</style>