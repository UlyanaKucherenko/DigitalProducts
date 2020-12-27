<template>
    <component :is="getIcon"></component>
</template>

<script>
const getName = (name) => `icon-${name}`;
export default {
    name: 'Icon',
    props: {
        icon:{
            type:   String,
            default: 'aboutus',
        },
    }, 
    components: {
        [getName('aboutus')]: () => import('../icons/IconAboutus.vue'),
        [getName('logo')]: () => import('../icons/IconLogo.vue'),
        [getName('graphic')]: () => import('../icons/IconGraphic.vue'),
        [getName('mobile')]: () => import('../icons/IconMobile.vue'),
        [getName('services')]: () => import('../icons/IconServices'),
        [getName('web')]: () => import('../icons/IconWeb.vue'),
        [getName('seo')]: () => import('../icons/IconSeo.vue'),
        [getName('works')]: () => import('../icons/IconWorks.vue'),
        [getName('team')]: () => import('../icons/IconTeam'),
        [getName('layer')]: () => import('../icons/IconLayer.vue'),
        [getName('pin')]: () => import('../icons/IconPin.vue'),

    },
    computed: {
        getIcon() {
            return getName(this.icon);
        },
    },
};
</script>
