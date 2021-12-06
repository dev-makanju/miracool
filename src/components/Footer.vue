<template>
      <div class="footer flex">
            <div class="footer-wrapper">
                <h1>{{ this.name }}</h1>
                <p>Built with vue </p>
            </div>
            <div class="footer-wrapper flex">
                <div class="center__footer-wrapper">
                    <h3>Contact</h3>
                    <p>+2348106006773</p>
                    <p>Makurseme@gmail.com</p>
                </div>
                <div class="center__footer-wrapper">
                    <h3>Contact</h3>
                    <p><router-link to="#">Home</router-link></p>
                    <p><router-link to="#">About</router-link></p>
                    <p><router-link to="#">Project</router-link></p>
                    <p><router-link to="#">Contact me</router-link></p>
                </div>
            </div>
            <div class="footer-wrapper">
                <h2>Follow me</h2>
                <ul>
                      <li><i class=""></i></li>
                      <li><i class=""></i></li>
                      <li><i class=""></i></li>
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
    background:  #071013;
    flex-direction: column;
    padding: 10px 5px;
    color: #eee;

    @media (min-width:700px){
        flex-direction: row;
    }

    
}
</style>