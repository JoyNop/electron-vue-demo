<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-04 14:41:01
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-05 14:46:39
 * @Description: file content
 * @FilePath: /electron-vue-demo/src/views/Home.vue
-->
<template>
  <div class="home">
    <!-- <div class="header">dddd</div> -->
    <div class="body">
      <Card title="应用中心" class="card">
        <a-card-grid class="card-grid">
          <img
            src="https://cdn.duobangbox.com/v3/static/app/app_icon_wealth.png"
            alt=""
            srcset=""
          />

          <div>Todo List</div>
        </a-card-grid>
        <a-card-grid class="card-grid">
          <img
            src="https://cdn.duobangbox.com/v3/static/app/app_icon_wealth.png"
            alt=""
            srcset=""
          />

          <div>title</div>
        </a-card-grid>
        <a-card-grid class="card-grid">
          <img
            src="https://cdn.duobangbox.com/v3/static/app/app_icon_wealth.png"
            alt=""
            srcset=""
          />

          <div>title</div>
        </a-card-grid>
        
   
      </Card>

      <!-- <Button>sdfgsdf</Button> -->
    </div>
    <div class="footer">By JoyNop</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Card } from 'ant-design-vue';

export default defineComponent({
  name: 'Home',
  components: {
    Card,
  },
});
</script>


<style lang="less" scoped>
.home {
  height: 100vh;
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
}
.body {
  padding: 10px;
}

.card {
  .card-grid {
    // width: 25%;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    width: 40px;
  }
}
</style>