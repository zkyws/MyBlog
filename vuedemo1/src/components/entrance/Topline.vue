<template>
  <div class="user-name">
    <div style="margin-left: 150px; display: flex; justify-content: flex-start; align-items: center">
      <div style="margin-right: 20px">
        <span>QCZH</span>
      </div>
      <div style="height: 50px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="2">
            <template slot="title">Show</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="1">Study notes</el-menu-item>
          <el-menu-item index="3" disabled>developing</el-menu-item>
          <el-menu-item index="4" disabled>developing</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div style="margin-right: 150px">
      <i class="el-icon-user-solid"></i>
      <span>Zhangs.space</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Topline',
    props: {},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
