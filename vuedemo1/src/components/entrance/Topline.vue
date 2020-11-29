<template>
  <div class="user-name">
      <div style="margin-right: 150px; margin-left: 20px; display: flex; align-items: center">
        <my-picture width="50" height="40"></my-picture>
        <span style="margin-left: 5px;">Zhangs.space</span>
      </div>
      <div style="height: 50px; margin-right: 20px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="show">
            <template slot="title">Show</template>
            <el-menu-item index="normal">normal</el-menu-item>
            <el-menu-item index="animation">animation</el-menu-item>
            <el-menu-item index="" disabled>developing</el-menu-item>
          </el-submenu>
          <el-menu-item index="blogs">Blogs</el-menu-item>
          <el-menu-item index="" disabled>developing</el-menu-item>
          <el-menu-item index="" disabled>developing</el-menu-item>
        </el-menu>
      </div>
    </div>

</template>

<script>
  import myPicture from './myPicture'

  export default {
    name: 'Topline',
    props: {},
    components: {myPicture},
    data() {
      return {
        activeIndex: 'normal',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // this.$emit('success', key)
        console.log('/content/' + key)
        this.$router.push('/content/' + key)
      }
    }
  }
</script>

<style scoped>
  .user-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: white;
  }

  /deep/ .el-menu--horizontal>.is-active {
    height: 50px;
  }

  /deep/ .el-menu--horizontal>.el-menu-item {
    line-height: 50px!important;
    height: 50px;
  }

  /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }

  /deep/ .el-menu {
    height: 50px;
  }
</style>
