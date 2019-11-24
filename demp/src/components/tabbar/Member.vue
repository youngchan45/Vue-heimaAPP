<template>
  <div>
<input type="button" value="-" @click='reduce'>
<input type="button" value="+" @click="add">
<input type="text" name="" id="" v-model='$store.state.count'>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // count:0,
    }
  },
  methods: {
    add(){
      this.$store.commit ('add1')
    },
    reduce(){
      this.$store.commit('add2',3)
    }
  },
  
}
</script>
