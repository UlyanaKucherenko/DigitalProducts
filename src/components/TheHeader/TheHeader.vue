<template>
    <div id="home" class="the-header">

        <div class="the-header__bg">
            <div class="the-header__nav" :class="{ scrolling: scrollPosition > 0 }">
                <div class="the-header__nav-container container">
                    <a class="the-header__logo" href="/">
                        <icon-logo />
                    </a>

                    <div class="the-header__wrapp-menu " >
                        <ul class="the-header__list" :class="{show:isShow}">
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
                        <div class="the-header__icon-close" @click="openMenu" :class="{show:isShow}">
                            <a-icon type="close" style="font-size:54px" />
                        </div>
                        <div class="the-header__icon-menu" @click="openMenu">
                            <a-icon type="menu" style="font-size:54px" />
                        </div>
                        
                    </div>

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
    data() {
         return {
             isShow: false,
             scrollPosition: 0,
         }
       
    },
    mounted() {
    window.addEventListener("scroll", this.handleTopBar);
  },
    methods: {
        handleClick() {
            console.log('BTN clicked');
            
        },
         handleTopBar() {
            this.scrollPosition = window.scrollY;
            },
        openMenu() {
            this.isShow = !this.isShow;

        }
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
        .scrolling {
            background: rgba(94, 85, 175, 0.5);
            z-index: 2;
            padding: 20px 0;
            transition: 0.3s ease-in;
            top: 0;
            
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
            padding-top: 10px; 

              @include media(800px) {
                @include flex(space-between, flex-start, row, wrap);
                 
            }
        }

        &__logo {
            display: inline-block;
            cursor: pointer;
            width: 54px;
        }

        &__icon-menu {
            display: none;
             @include media(800px) {
                display: block;
            }
        }

        &__icon-close {
            display: none;
        }


        &__wrapp-menu {
            //width: 700px;
            @include flex(center, flex-start, row, wrap);

            @include media(800px) {
               /* max-width: 200px;
                width: 100%;*/
                //display: none;
                 
            }
        }

        .show {
                display: none;
                 @include media(800px) {
                 display: block;
                }
            }

        &__list {
            @include flex(center, center, row, wrap);

             @include media(800px) {
                //@include flex(center, center, column, wrap);
                display: none;
            }
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
            @include text($title-size, 700, white); 
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