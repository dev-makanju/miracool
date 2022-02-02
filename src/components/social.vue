<template>
    <div class="big-socials-button">
        <ul>
            <li>
                <BreadcrumbItem>
                    <a class="tar_link" href="https://github.com/dev-makanju" target="__blank">
                        <font-awesome-icon :icon="['fab' , 'github']"/>
                    </a>
                </BreadcrumbItem>
            </li>
            <li>
                <BreadcrumbItem>
                    <a class="tar_link" href="https://twitter.com/mira_code" target="__blank">
                        <font-awesome-icon :icon="['fab' , 'twitter']"/>
                    </a>
                </BreadcrumbItem>
            </li>
            <li>
                <BreadcrumbItem>
                    <a class="tar_link" href="https://www.linkedin.com/in/makanju-oluwafemi-emmanuel-2060bb184/" target="__blank">
                        <font-awesome-icon :icon="['fab' , 'linkedin-in']"/>
                    </a>
                </BreadcrumbItem>
            </li>
        </ul>        
   </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.big-socials-button{
    opacity: .7;
    background: #062e36 ;
    position: fixed ;
    overflow: hidden ;
    z-index: 2;
    top: 150px;
    width: 50px;
    display: flex;
    flex-direction: column ;
    border-radius: 0px 10px 0px 10px ;
    box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
    ul > li{
        padding: 12px;
        border-bottom: 1px solid #02171b;
        background: rgb(18, 104, 18);
        transition: .5s ease;
        list-style-type: none;
        margin: 2px ;

        &:hover{
            color: green ;
            transform: scale(1.1) ;
        }
    
    }

}

</style>