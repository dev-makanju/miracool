<template>
    <div v-scrollanimation class="project-overview" id="project">
        <div class="content-wrapper top">
            <img v-scrollanimation  v-lazy="require(`@/assets/portfolio-icons/${project.photoName}.png`)" alt="">
            <div class="overlay">
                <div class="view-product">
                    <a  :href="[project.link]" target="__blank" class="links">Go to site</a>
                </div>
            </div>
        </div>
        <div class="content-wrapper product">
            <div class="description">
                <h1>
                    <span style="color: rgb(39, 75, 10)"> 
                    <a class="link__hub" :href="[project.github]" target="__blank">
                    <font-awesome-icon :icon="['fab' , 'github']"/>
                    </a>&nbsp;&nbsp;
                    </span><span class="text">{{ project.projectName }}</span>
                </h1>
                <p>{{ project.ProjectDesc }}</p>
                <h6 class="tect-used">Technology used</h6><br>
                <span class="stack-color">
                    {{ project.stalk }}
                </span>
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
    .tect-used {
        color: #225157aa;
        font-size: 14px;
        font-size: 300;
        margin-top: 10px;
    }

    .view-product a{
        font-size: 50px;
        text-decoration: none;
        color: #7d848581;
    }

    .top {
        position: relative;
        overflow: hidden;
    }

    .overlay {
        position: absolute;
        bottom: -70%;
        width: 100%;
        height: 70%;
        transition: .5s ease;
        background: rgba(0, 0, 0, 0.753); 
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            bottom: 0;
        }
    }

    .stack-color {
       color: #225157aa;
    }

    .project-overview {
       min-width: 200px;
       //width: 300px;
       box-shadow: 0px 4px 7px rgba(0, 0, 0, .1);
       border-radius: 7px;
       overflow: hidden;
       border: 1px solid #22515723;
       transition: .2s ease;
       transform: translateY(-40px);

        &.before-enter{
            opacity: 0;
            transform: translateY( 70px);
            transition: 1s ease-in-out all; 
        }

        &.enter{
            opacity: 1;
            transform: translateY(0px);
        }

       &:hover {
          transform: scale(1.01); 
          box-shadow: 0px 4px 7px rgba(0, 0, 0, .1);
       }

       .content-wrapper img{
          width: 100%;
          transition: .6s ease;

          &:hover{
            ~ .overlay {
               bottom: 0;
            }

            transform: scale(1.3);
          }
       }

       .product {
          padding:  10px;

          & .description {

            p { 
                line-height: 1.8em;         
                font-size: 14px;
                color: #225157;
                font-weight: 300;
            }
          }
       }
    }
    .link__hub {
       color: #225157;
       font-size: 24px;
       transition: .5s ease;
       
       &:hover {
         color: #13b1c6e8;
       }
    }
    .text{
        color: #225157;
        font-size: 22px;
        margin-left: -6px;
    }
</style>