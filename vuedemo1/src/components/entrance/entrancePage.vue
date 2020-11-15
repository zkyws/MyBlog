<template>
  <div class="entranc-page" :style="{'width': widthAvailable + 'px', 'height': heightAvailable + 'px'}">
    <div :style="{'height': topLineHeight + 'px', 'margin-top': topLineMargin + 'px'}">
      <topline></topline>
    </div>
    <div class="content" :style="{'height': contentHeight + 'px'}">
    </div>
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
        topLineMargin: 5,
        topLineHeight: 50,
        contentWidth: 800,
        contentHeight: 800,
        widthAvailable: 800,
        heightAvailable: 800,
      }
    },
    methods: {},
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
    background-color: rgba(128,128,128,0.2);
  }

  .top-line {
    height: 50px;
  }

  .content {
    background-color: antiquewhite;
    margin-top: 10px;
    overflow-y: scroll;
  }
</style>
