<template>
    <span>
        <homeHero />
        <homeDetails />
        <homePlans />
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero'
import HomeDetails from '@/components/HomeDetails'
import HomePlans from '@/components/HomePlans'

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans
    }
}
</script>
