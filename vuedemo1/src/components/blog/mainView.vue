<template>
  <div style="display: flex;">
    <div class="left-type">
      <left-view></left-view>
    </div>
    <div class="right-type">

    </div>
  </div>
</template>

<script>
  import leftView from './leftView'
  export default {
    name: 'mainView',
    components: {leftView}
  }
</script>

<style scoped>
  .left-type {
    width: 300px;
    background-color: white;
    height: 100%;
    box-shadow: 5px 0px 3px rgba(128,128,128,0.1);
    z-index: 10;
  }

  .right-type {
    width: calc(100% - 300px);
    background-color: white;
    height: 100%;
    z-index: 5;
  }
</style>
