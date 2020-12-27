<template>

<div id="works" class="the-works">
    <div class="the-works__bg">
        <div class=" the-works__container">
            <span class="the-works__icon">
                <x-icon icon=works />
            </span>
            <h2 class="the-works__title">RECENT WORKS</h2>

            <a-carousel arrows class="the-works__slider">
                <div
                slot="prevArrow"
                class="the-works__slider-arrow custom-slick-arrow"
                style="left: 0px;zIndex: 1"
                >
               <a-icon type="left" />
                </div>
                <div slot="nextArrow"  class="custom-slick-arrow" style="right: 0px">
                    <a-icon type="right" />
                </div>
                <div class="the-works__slider-item">
                    <div class="the-works__wrapp-image">
                        <img class="the-works__image" src="../../assets/img/works-slider.png" alt="">
                    </div>
                    </div>
                <div class="the-works__slider-item">  
                    <div class="the-works__wrapp-image">
                        <img class="the-works__image" src="../../assets/img/works-slider.png" alt="">
                    </div>
                </div>

            </a-carousel>
            <a href="#" target="_blank" class="the-works__link link">Learn More</a>

        </div>
    </div>
  </div>
</template>
<script>
import XIcon from '../common/XIcon.vue'
export default {
    name:'TheWorks',
    components: { 
        XIcon
     },
     
};
</script>

<style lang="scss" scoped>
    .the-works {
        position: relative;

     &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        background: #9F9ACF url("../../assets/img/works-bg.png") no-repeat center;
        background-size: cover;
        }

        &__bg {
            position: relative;
            background-color:rgba(#9F9ACF, 0.8);
        }

        &__container {
            @include flex(center, center, column);
            min-height: 100vh;
            position: relative;
            text-align: center;
            padding: 35px 0;
        }

        &__icon {
            margin-bottom: 36px;
        }

        &__title {
             font-family: ProximaNova;
            @include text(36px, 600, #FEFCFD); 
            margin-bottom: 66px;
        }

        &__slider{
        text-align: center;
        height: 600px;
        background: transparent;
        overflow: hidden;
        max-width: 1140px;
        width:100%;
        padding: 0px 0 20px 0;
        }

        &__slider-item{
            height: 550px;
        }

        &__wrapp-image {
            width: 730px;
            height: 100%;
            margin: 0 auto;
        }

        .custom-slick-arrow {
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #fff;
        opacity: 0.8;

        &:before {
            display: none;
            }
        &:hover {
            opacity: 1;
            }
        }

        &__link {
            @include text(20px, 600, #ffffff); 
            border: 1px solid #ffffff;
        }

}

</style>
