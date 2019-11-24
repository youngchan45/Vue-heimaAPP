<template>
    <div>
        <comment-box :id='id'></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponent/Comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style scoped>
*{
    padding: .2rem;
}
</style>