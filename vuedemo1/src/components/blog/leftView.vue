<template>
  <div class="left-view-type">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText"
      class="blog-tree-input-style">
    </el-input>

    <el-tree
      class="filter-tree blog-tree-style"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree">
      <template slot-scope="{node, data}">
        <el-tooltip effect="dark" :content="data.label" placement="top">
          <div class="tree-data-line-style">{{data.label}}</div>
        </el-tooltip>
      </template>
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: 'leftView',
    watch: {
      filterText (val) {
        this.$refs.tree.filter(val)
      }
    },

    methods: {
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      }
    },

    data () {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: 'Java Script',
          children: [{
            id: 4,
            label: 'Array.fil()函数',
            children: [{
              id: 9,
              label: '如果使用脚手架搭建vue项目啊啊啊'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<style scoped>
  .left-view-type {
    /*width: 100%;*/
    /*height: 100%;*/
    margin: 10px 20px 0px 20px;
  }

  .blog-tree-input-style {
    margin: 10px 0px;
  }

  .blog-tree-style /deep/ .el-tree-node__content {
    height: 30px;
  }

  .blog-tree-style /deep/ .el-tree-node__label {
    font-size: 15px;
    font-family: Hiragino Sans GB;
  }

  .tree-data-line-style {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
