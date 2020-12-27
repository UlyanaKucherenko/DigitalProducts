<template>
    <div class="our-team">
        <div class="our-team__container">
            <span class="our-team__icon">
                <x-icon icon=team />
            </span>
            <h2 class="our-team__title">MEET OUR TEAM</h2>
        </div>
    </div>
</template>

<script>
import XIcon from '../common/XIcon.vue'
export default {
    name:'OurTeam',
     components: { 
        XIcon
     },
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
            margin-bottom: 67px;
            font-family: ProximaNova;
            @include text(36px, 500,#665F60); 
            text-transform: uppercase;
        }
    }
</style>