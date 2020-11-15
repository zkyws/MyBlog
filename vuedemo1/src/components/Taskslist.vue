<template>
  <div>
  <form action="/index1" method="get">
    <button type="submit">页面跳转</button>
  </form>
  <form action="http://localhost:8000/index/" method="get">
    <button type="submit">后端接口</button>
  </form>
  <a @click="FindCatalogue" href="#">click</a>
  <p>
    {{ temp }}
  </p>
  <router-view/>
  </div>
</template>

<script>
export default {
    name: "Taskslist",
    data() {
        return{
          temp: "here",
        }
    },
    methods: {
        FindCatalogue() {
          // 其实不明白为什么非要用两次then，第一次返回promise对象，第二次就能返回内容
          fetch("http://localhost:8000/index/").then(
              (response) => {
                  return response.json();
              }
          ).then(
              (response) => {
                  this.temp = response["data"]
              }
          )
        },
    },
}

</script>

<style scoped>

</style>
