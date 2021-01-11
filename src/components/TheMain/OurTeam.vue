<template>
    <div class="our-team">
        <div class="our-team__container">
            <span class="our-team__icon">
                <x-icon icon=team />
            </span>
            <h2 class="our-team__title">MEET OUR TEAM</h2>

            <div class="our-team__curousel-wrapp">
               <carousel 
               :dots="false"
               :items="3"
               :margin="30"
               :loop="false"
               :nav="false" class="our-team__curousel">
                   <template slot="prev"><span class="prev our-team__prev"><a-icon type="left" /></span></template>
                   
                    <div class="our-team__card" v-for="{picture,name,position } of ourTeam" :key="name">

                        <div class="our-team__image-wrap">
                            <div class="our-team__card-image">
                                <img :src="require(`@/assets/img/${picture}.png`)" alt="123">
                                
                            </div>
                        </div>
                        <div class="our-team__card-info">
                            <h3 class="our-team__card-name">{{name}}</h3>
                            <p class="our-team__card-position">{{position}}</p>
                            <div class="our-team__social-links">
                                <ul class="our-team__list">
                                    <li class="our-team__list-item">
                                        <a href="#" target="_blank" class="our-team__link">
                                            <x-icon icon=linkedin />
                                        </a>
                                    </li>
                                    <li class="our-team__list-item social-links__item">
                                        <a href="#" target="_blank" class="our-team__link ">
                                            <x-icon icon=google />
                                        </a>
                                    </li>
                                    <li class="our-team__list-item ">
                                        <a href="#" target="_blank" class="our-team__link">
                                            <x-icon icon=facebook />
                                        </a>
                                    </li>
                                    <li class="our-team__list-item ">
                                        <a href="#" target="_blank" class="our-team__link ">
                                            <x-icon icon=twitter />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        
                    </div>

                    <template slot="next" style="display:block"><span class="next our-team__next" ><a-icon type="right" /></span></template>

                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import XIcon from '../common/XIcon.vue'
import carousel from 'vue-owl-carousel'
export default {
    name:'OurTeam',
    data(){
        return{
            ourTeam :[
                {
                    picture:"team-1",
                    
                    name: 'Miguel Obrien',
                    position: 'CEO & Founder',
                },
                {
                    picture:"team-2",
                    name: 'Jackie Carroll',
                    position: 'Art Director',
                },
                {
                    picture:"team-3",
                    name: 'Ida Morrison',
                    position: 'Designer',
                },
                {
                    picture:"team-2",
                    name: 'Lasya Morrison',
                    position: 'Designer',
                },
                 {
                    picture:"team-2",
                    name: 'Masya Morrison',
                    position: 'Designer',
                },
                 {
                    picture:"team-2",
                    name: 'Sya Morrison',
                    position: 'Designer',
                },
                
            ],
        }
    },
     components: { 
        XIcon,
        carousel
        
     },
     methods: {
          
     }
    
}
</script>

<style lang="scss" scoped>
    .our-team {
        padding: 55px 0 80px;
        background-color: #EBEBEB;

        &__container {
            @include flex(center, center, column);
            text-align: center;
        }

         &__icon {
            margin-bottom: 30px;
        }

        &__title {
            margin-bottom: 50px;
            font-family: ProximaNova;
            @include text(36px, 500,#665F60); 
            text-transform: uppercase;
        }

        &__curousel-wrapp {
            width: 1050px;
            //height: 600px;
            position: relative;
            @include flex(center, center, row);
        }

        &__curousel {
            width: 900px;
        }

        &__prev {
            left: 0;
            position: absolute;
            top:33%;
            z-index: 1;
            display: inline-block;
             font-size: 40px;
        }

        &__next {
            right: 0;
            position: absolute;
            top:33%;
            z-index: 1;
            display: inline-block;
            font-size: 40px;
        }

        & .owl-item {
            width: 350px;
            height: 200px;
            background-color: green ;
            
        }
        
        &__card {
           background-color: #ebebeb;
           min-height: 280px;
           position: relative;
            //height:280px;
        }

        &__image-wrap {
            position: relative;
            min-height:100px;
        }

        &__card-image {
            width: 230px;
            border: solid 10px #ebebeb;
            background-color: #ebebeb;
            border-radius: 50%;
            position: absolute;
            top:0px;
            left: 50%;
            transform: translateX(-50%);
            img{
                border-radius: 50%;
            }
        }

        &__card-info {
            background-color: #ffffff;
            padding-top: 150px;
            text-align: center;
        }
        &__card-name {
            margin-bottom: 34px;
            @include text(24px, 700,#9f9acf); 
            font-family: ProximaNova;
            text-transform: uppercase;
        }
        &__card-position {
            margin-bottom: 50px;
            @include text(24px, 400, #665f60); 
            font-family: PTSans;
            font-style: italic;
  
        }

        &__social-links {
            width: 100%;
            height: 70px;
            padding: 19px 94px 19px 90px;
            background-color: #9f9acf;
        
        }

        &__list {
            width: 100%;
            @include flex(center, center, row);
        }
        &__list-item {
            margin-right: 13px;
            &:last-child{
                margin-right: 0;
            }
        }
        &__link {
            display:inline-block;
        }
    }
</style>