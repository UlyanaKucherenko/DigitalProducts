<template>
    <div id="about" class="the-about">
        <div class="the-about__container container">
            
            <div class="the-about__wrapper-image">
                <img class="the-about__image" src="../../assets/img/about-image.png" alt="">
                <div class="the-about__image-text">
                     <span class="the-about__image-icon">
                        <x-icon icon=aboutus />
                    </span>
                    About Us 
                </div>
            </div>
            <div class="the-about__wrapper-content">
                <p class="the-about__text">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p class="the-about__text">
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                </p>
                <a href="#" target="_blank" class="the-about__link link">Learn More</a>
            </div>
        </div>
    </div>
</template>

<script>
import XIcon from '../common/XIcon.vue'
export default {
    name: 'TheAbout',
    components: { 
        XIcon
     },
}
</script>

<style lang="scss">
    .the-about {
        padding: 100px 0;

        &__container {
            @include flex(space-between, strech, row, wrap);
        }

        &__wrapper-image {
            width: 380px;
            margin-right: 60px;
            font-size: 0;
            display: flex;
            flex: 1;

              @include padding-hack($padding: 52%, $size: cover, $dev: false){
                  object-position: 0px 0px;
              }; 
        }

       

        &__image-text{
            position: absolute;
             background-color:rgba(#9F9ACF,0.5);
            width: 100%;
            height: 100%;
            font-family: 'PT Sans', sans-serif;
            @include text(46px, 600, #FEFBFC); 
            @include flex($justify-content: flex-start, $align-items: center, $direction: column);
            padding: 56px 0px 0 0px;
            text-transform: uppercase;

        }

        &__wrapper-content {
            max-width: 630px;
            width: 100%;
            padding: 79px 34px 100px 60px;
            @include flex($justify-content: center, $align-items: center, $direction: column) ;
             @include media($screen-desktop) {
                padding: 20px 34px 100px 60px;
            }
        }

        &__image-icon {
            margin-bottom: 44px;
        }

        &__text {
            font-family: 'PT Sans', sans-serif;
            @include text(20px, 400, #665F60); 
            width: 633px;

            &:nth-child(2) {
                margin-bottom: 90px;
            }
        }

        &__link {
            /*font-family: 'PT Sans', sans-serif;
            @include text(20px, 600, #7D7A7C); 
            display:block;
            border: 1px solid #7D7A7C;
            max-width: 196px;
            width:100%;
            height:51px;
            padding: 0 15px;
            @include flex($justify-content: center, $align-items: center, $direction: row) ;*/
            
        }
    }
</style>