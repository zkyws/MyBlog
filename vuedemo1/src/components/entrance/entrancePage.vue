<template>
  <div class="entranc-page" :style="{'width': widthAvailable + 'px', 'height': heightAvailable + 'px'}">
    <div :style="{'height': topLineHeight + 'px', 'margin-top': topLineMargin + 'px'}" class="topline-type">
      <topline></topline>
    </div>
    <router-view  class="content"/>
  </div>
</template>

<script>
  import Topline from './Topline'

  export default {
    name: 'entrancePage',
    components: {
      Topline,
    },
    data () {
      return {
        topLineMargin: 0,
        topLineHeight: 50,
        contentWidth: 800,
        contentHeight: 800,
        widthAvailable: 800,
        heightAvailable: 800,
      }
    },
    methods: {
      RouteMethod (activeIndex) {
        console.log(activeIndex)
        this.$router.push('/content/' + activeIndex)
      }
    },
    created () {
      this.widthAvailable = (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth
      this.heightAvailable = (window.innerHeight) ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight
      this.contentWidth = this.widthAvailable
      this.contentHeight = this.heightAvailable - this.topLineHeight - this.topLineMargin
    }
  }
</script>

<style scoped>
  .entranc-page {
    display: flex;
    flex-direction: column;
    background-color: rgba(128, 128, 128, 0.2);
  }

  .content {
    /*margin-top: 10px;*/
    overflow-y: scroll;
    height: 100%;
    width: 100%;
  }

  .topline-type {
    box-shadow: 0px 5px 3px rgba(128,128,128,0.1) ;
    z-index: 15;
  }
</style>
