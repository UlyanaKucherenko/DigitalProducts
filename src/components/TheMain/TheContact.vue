<template>
    <div id="contact" class="the-contact">

        <iframe class="the-contact__map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3951.6410240808787!2d112.63631199422902!3d-7.932508852482044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1609062102349!5m2!1sru!2sua" width="100%" height="900" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>    
           
        <div class="the-contact__bg">
                <x-icon icon=pin />
        </div>
        <div class="the-contact__wrapp-content">
            <div class="the-contact__container container">
                <span class="the-contact__icon">
                    <x-icon icon=layer />
                </span>
                <h3 class="the-contact__title">GET IN TOUCH</h3>

                <form action="" method="post" class="the-contact__form">
                    <input class="the-contact__input" type="text" name="name" placeholder="Your Name *" />
                    <input class="the-contact__input" type="email" name="email" placeholder="Your Email *" />
                    <textarea class="the-contact__textarea" placeholder="Your Message *"></textarea>
                    <button class="the-contact__form-btn" type="submit">SEND MESSAGE</button>
                </form>
            </div>
           
        </div>
    </div>
</template>

<script>
import XIcon from '../common/XIcon.vue'
export default {
    name: 'TheContact',
    components: { 
        XIcon
     },
    
}
</script>
<style  lang="scss" scoped>
    .the-contact {
        height: 900px;
         position: relative;

        &__map {
            position: relative;
            z-index: -1;

            
        }
        &__bg {
           
            position: absolute;
            color:#9F9ACF;
            z-index: 0;
            display: inline-block;
            top: 231px;
            left: 56%;
        }

        &__wrapp-content {
            background-color: rgba(#9F9ACF,0.7);
            z-index: 1;
            position: absolute;
            top:0;
            width: 100%;
            height:100%;
            padding: 50px 0;
        }

        &__container {
             @include flex(center, center, column);
             text-align: center;
        }

        &__icon {
            margin-bottom: 25px;
        }

        &__title {
            margin-bottom: 270px;
            font-family:  ProximaNova;
            @include text(36px, 400, #FFFFFF); 
            text-transform: uppercase;

            @include media(879px) {
               margin-bottom: 100px;

            }
        }

        &__form {
            max-width:860px;
            width: 100%;
            @include flex(center, center, row, wrap);
            font-family: 'PT Sans', sans-serif;

            @include media(879px) {
                margin-right: 20px;
                @include flex(center, center, column, wrap);
                 max-width:420px;
                width: 100%;
            }
        }
        &__input {
            max-width:415px;
            width: 50%;
            margin-right: auto;
            margin-bottom: 30px;
            padding: 0 15px;
            height: 60px;
            @include flex(flex-start, center, row);
            border:none;
            overflow: hidden;
            background-color: rgba(#EBEBEB,0.5);
            @include text(18px,400, #5c5959);
            &::-webkit-input-placeholder { /* WebKit browsers */
            @include text(18px,400, white);
        }
            
            font-style: italic;
  
            @include media(960px) {
               margin-right: 20px;
            }
            @include media(879px) {
               margin-right: 0px;
               width: 100%;

            }
            
        }
        &__input[type=email] {
            margin-right: 0;
        }
        &__textarea {
            width: 100%;
            height: 200px;
            background-color: rgba(#EBEBEB,0.5);
            border:none;
            padding: 10px 15px 0 15px;
            overflow: hidden;
            margin-bottom: 50px;
            @include text(18px,400,  #5c5959);
            font-style: italic;
            &::-webkit-input-placeholder { /* WebKit browsers */
            @include text(18px,400, white);
            }
        }

        &__form-btn {
            max-width: 293px;
            width: 100%;
            height: 70px;
            padding:  0 15;
            border-radius: 4px;
            background-color: #9f9acf;
            border: none;
            border-bottom: 4px solid rgba($color: #000000, $alpha: 0.3); 
            outline:none;
            @include flex(center, center, row);
            cursor: pointer;

            @include text(20px, 700, #FFFFFF); 
            text-transform: uppercase;
            font-family: ProximaNova;
            letter-spacing: 0.4px;
            text-align: center;
            
            &:hover {
                background-color: rgba(#646161,0.8);
                transition: all .3s ease-in;
                border-bottom: none;
            }

            &:active {
                background-color: rgba(#ffbe33,1);
                transition: all .1s ease-in;
                outline:none;
            }
        }
    }

</style>