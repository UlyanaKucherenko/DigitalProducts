<template>
    <div id="home" class="the-header">

        <div class="the-header__bg">
            <div class="the-header__nav">
                <div class="the-header__nav-container container">
                    <a class="the-header__logo" href="/">
                        <icon-logo />
                    </a>
                    
                        <ul class="the-header__list">
                            <li class="the-header__list-item">
                                <a href="#home" class="the-header__item-link">Home</a>
                            </li>
                            <li class="the-header__list-item">
                                <a href="#about" class="the-header__item-link">About</a>
                            </li>
                            <li class="the-header__list-item">
                                <a href="#services" class="the-header__item-link">Services</a>
                            </li>
                            <li class="the-header__list-item">
                                <a href="#works" class="the-header__item-link">Works</a>
                            </li>
                            <li class="the-header__list-item">
                                <a href="#contact" class="the-header__item-link">Contact</a>
                            </li>
                        </ul>
                    
                </div>
            </div>
           
            <div class="the-header__container container">
                 <h1 class="the-header__title">CreativE DIGITAL Project</h1>
                 <p class="the-header__text">
                     Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                 </p>
                 <a href="#about">
                    <a-icon type="down" :style="{ fontSize: '32px', color: 'white' }"/>
                 </a>

                
            </div>
           
        </div>	
    </div>
</template>

<script>
import IconLogo from '../icons/IconLogo';
export default {
    name: "TheHeader",
    components: {
        IconLogo,
    },


}
</script>

<style lang="scss">

    .the-header {
        min-height: 100vh;
        position: relative;
        
        &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        background: #9F9ACF url("../../assets/img/header-bg.png") no-repeat center;
        background-size: cover;
        }

        &__nav {
            min-height: 100px;
            position: fixed;
            top:0;
            z-index: 10;
            width: 100%;
        }


        &__nav-container {
            @include flex(space-between, center, row, wrap);
            min-height: 100px;
        }

        &__logo {
            display: inline-block;
            cursor: pointer;
        }

        &__list {
            @include flex(center, center, row, wrap);
        }

        &__list-item {
            margin-right: 35px;
            &:last-child {
                margin-right: 0;
            }
        }

        &__item-link {
            font-family: ProximaNova;
            @include text(24px, 600, white); 
            text-transform: uppercase;

            &:hover{
            @include text(24px, 600, grey); 
            transition: all 0.5s ease-out;
            }
        
        }

        &__bg {
            background-color:rgba(#9F9ACF,0.5);
            position: relative;
        }

        &__container {
            @include flex(center, center, column);
            min-height: 100vh;
            position: relative;
            text-align: center;
        }

        &__title {
            font-family: ProximaNova;
            @include text(72px, 700, white); 
            text-transform: uppercase;
        }

        &__text {
        font-family: 'PT Sans', sans-serif;
        @include text(30px, 400, white); 
        margin-bottom: 39px;
        max-width: 656px;
        width: 100%;
        letter-spacing: 2px;
        }

    }

</style>