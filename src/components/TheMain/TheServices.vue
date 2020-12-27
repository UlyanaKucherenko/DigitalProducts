<template>
    <div id="services" class="the-services">
        <div class="container the-services__container">

            <ul class="the-services__cards">
                <li class="the-services__card">
                    <span class="the-services__card-icon">
                       <x-icon icon=graphic />
                    </span>
                    <h3 class="the-services__card-title">GRAPHIC DESIGN</h3>
                    <p class="the-services__card-text">Cras mattis consectetur purus sit amet fermentum.</p>
                </li>
                <li class="the-services__card">
                     <span class="the-services__card-icon">
                         <x-icon icon=web />
                    </span>
                    <h3 class="the-services__card-title">WEB DEVELOPMENT</h3>
                    <p class="the-services__card-text">Cras mattis consectetur purus sit amet fermentum.</p>
                </li>
                <li class="the-services__card">
                     <span class="the-services__card-icon">
                         <x-icon icon=seo />
                    </span>
                    <h3 class="the-services__card-title">SEO & MARKETING</h3>
                    <p class="the-services__card-text">Cras mattis consectetur purus sit amet fermentum.</p>
                </li>
                <li class="the-services__card">
                     <span class="the-services__card-icon">
                         <x-icon icon=mobile />
                    </span>
                    <h3 class="the-services__card-title">MOBILE DEVELOPMENT</h3>
                    <p class="the-services__card-text">Cras mattis consectetur purus sit amet fermentum.</p>
                </li>
            </ul>

                <div class="the-services__wrapper-image">
                    <img class="the-services__image" src="../../assets/img/services-image.png" alt="">
                    <div class="the-services__image-text">
                            <span class="the-services__icon">
                            <x-icon icon=services />
                            </span>
                        <h3 class="the-services__title">OUR SERVICES</h3>
                        <p class="the-services__text">
                            “Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.” - Borat -
                        </p>
                            
                    </div>
                </div>  
            
        </div>

    </div>
</template>

<script>
import XIcon from '../common/XIcon.vue'
export default {
    name: 'TheServices',
    components: { 
        XIcon
     },
}
</script>

<style lang="scss" scoped>

    .the-services{
        &__container{
            @include flex(center, flex-start, row, nowrap);

            @include media(1139px) {
                 @include flex(center, center, column-reverse, nowrap);
            }
        }
        &__cards{
             @include flex(center, center, row, wrap);
             max-width:752px;
             width: 100%;
             margin-bottom: 0;
        }

        &__card {
            max-width:381px;
           // width: 50%;
             @include flex(center, center, column);
             padding: 100px 15px;
             text-align: center;
             &:nth-child(1),
             &:nth-child(4)
             {
                background-color: #DBDBDB;
             }
              
        }

        &__card-icon {
            margin-bottom: 30px;
        }

        &__card-title {
            margin-bottom: 21px;
            font-family: 'PT Sans', sans-serif;
            @include text(24px, 700, #665F60); 
        }

        &__card-text {
            font-family: 'PT Sans', sans-serif;
            @include text(18px, 700, #665F60); 
            font-style: italic;
            max-width: 346px;
            width: 100%;
        }

         &__wrapper-image {
            width: 411px;
            font-size: 0;
            display: flex;
            //flex: 1;
            height: 100%;

              @include padding-hack($padding: 76.6%, $size: cover, $dev: false); 

               @include media(1139px) {
                width: 748px;
                padding-bottom: 21.6%;
            }
        }

       

        &__image-text{
            position: absolute;
             background-color:rgba(#9F9ACF,0.5);
            width: 100%;
            height: 100%;
            font-family: 'PT Sans', sans-serif;
            @include flex($justify-content: flex-start, $align-items: center, $direction: column);
            padding: 117px 20px;
            text-align: center;
             @include media(1139px) {
                 padding: 20px;
            }
        }

        &__icon {
            margin-bottom: 32px;
            @include media(1139px) {
                  margin-bottom: 12px;
            }
        }

        &__title {
             font-family: ProximaNova;
            @include text(36px, 600, #FEFCFD); 
            margin-bottom: 118px;
            text-transform: uppercase;
             @include media(1139px) {
                  margin-bottom: 12px;
            }

        }

        &__text {
             font-family: 'PT Sans', sans-serif;
            @include text(18px, 700, #FEFCFD); 
        }

    }

</style>