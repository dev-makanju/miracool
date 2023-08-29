<template>
    <div class="about" id="about">
        <div class="contain">
           <div class="avater-main">
               <div class="rectangle"/>
               <div class="avater-wrapper">
                   <img v-lazy="require(`@/assets/portfolio-icons/test-image.png`)">
               </div>
           </div>
        </div>
        <div class="about-desc">
            <h1>About Me</h1>
            <div v-scrollanimation class="underline"/>
            <p v-scrollanimation class="about-animate" v-html="About">
                
            </p>
            
            <BreadcrumbItem>
                <a class="link" href="/files/makanju.pdf" download="Makanju-Oluwafemi">
                    <div class="first_c flex">
                        <button v-scrollanimation class="btn-button">Download CV</button>
                    </div> 
                </a>
            </BreadcrumbItem>
        </div>     
    </div>
</template>

<script>
    export default {
        name:'Projects',
        data(){
            return{
               goal:"Let's talk about your project </>",
               text:'Amazing Landing Page',
               About:
                     "My name is Makanju Oluwafemi Emmanuel, I’m an enthusiastic software developer and a technical writer, with a keen focus on making the web a better environment. </br></br>I love to motivate myself to be consistent with learning and working smart I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications, I’m proficient in converting high quality designs to a functional and responsive front end code. </br></br> In a dynamic environment, I work well with using effective communication skills to interact with other co-workers. At my leisure, I enjoy traveling and watching  football.",
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 30% 0px;
        
        @media (min-width: 910px) {
           align-items: center;   
        }

        .contain {
            @media (min-width: 450px) {   
                display: flex;
                justify-content: center;   
            }
        }

        @media (min-width: 910px) {
            flex-direction: row;
            margin: 10% 0px;
        }
    }

    .link { 
        text-decoration: none;
    }

    .about-desc {
        h1{
            font-size: 40px;
            color: #225157;
        }

        p {
            margin-top: 10px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.8em;
            color: #225157;
        }
    }

    .avater-main {
        position: relative;
        height: 400px;
        width: 400px;

        @media (max-width: 910px) {
            height: 400px;
            width: 100vw;
        }

        .rectangle {
            height: 400px;
            width: 300px;
            border: 8px solid #225157;

            @media (max-width: 910px) {
                height: 400px;
                width: 85%;
            }
        }

        .avater-wrapper {
           position: absolute;
           top: -30px;
           right: 50px;
           background: #225157;

            @media (max-width: 450px) {
                right: 80px;
            }

            @media (max-width: 910px) {
                height: 400px;
                width: 85%;
                display: flex;
                justify-content: center;
            }

            img {
                height: 400px;
                width: 300px;
                object-fit: cover;
            }
        }
    }

    .btn-button {
        padding: 10px;
        background: #FFF;
        border:2px solid  #225157;
        cursor: pointer;
        margin-top: 2rem;
        transition: .4s ease;

        &:hover {
            background: #225157;
            color: #FFFFFF;
        }


        &.before-enter{
            opacity: 0;
            transform: translateY( 70px);
            transition: 1s ease-in-out all; 
        }

        &.enter{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .about-animate {
        &.before-enter{
            opacity: 0;
            transform: translateY( 70px);
            transition: 1s ease-in-out all; 
        }

        &.enter{
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>   