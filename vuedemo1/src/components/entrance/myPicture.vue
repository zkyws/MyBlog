<template>
  <div style="display: flex; align-items: center" :style="{'width': width + 'px', 'height': height + 'px'}">
    <div class="picture-style" :style="{'width': width-10 + 'px', 'height': height-10 + 'px'}">
      <el-image :src='path' :style="{'width': width + 'px', 'height': height + 'px'}" :preview-src-list="pathList" ></el-image>
    </div>
  </div>
</template>

<script>
  import mypicture from '../../assets/img/mypicture.jpeg'
  export default {
    name: 'myPicture',
    components: {},
    props: {
      width: {
        type: String,
        required: true
      },
      height: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        path: mypicture,
        pathList: [mypicture]
      }
    }
  }
</script>

<style scoped>
  .picture-style {
    border-radius: 100% 100% 100% 100%/100% 100% 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
