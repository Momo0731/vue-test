<template>
  <div id="app">
    <HeadNav></HeadNav>
    <Home></Home>
    <StoreFoot></StoreFoot>
  </div>
</template>

<script>
  import HeadNav from './common/HeadNav.vue'
  import Home from './home/Home.vue'
  import StoreFoot from './common/StoreFoot.vue'

  export default {
    data () {
      return {
        // transitionName: 'slide-left'
        transitionName: 'fade'
      }
    },
    watch: {
      '$route' (to, from) {
        if (this.transitionName !== 'fade') {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
      }
    },
    components: {HeadNav, StoreFoot, Home}
  }
</script>

<style lang="scss">
/*@import "../scss/docs";*/
</style>
