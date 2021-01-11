<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-05 14:49:48
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-06 14:30:49
 * @Description: file content
 * @FilePath: /electron-vue-demo/src/views/Todo.vue
-->
<template>
  <div>ddd</div>
</template>

<script lang="ts">
// import { Button, List } from 'ant-design-vue';
// import router from '@/router';
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue';
export default defineComponent({
  name: 'ToDoList',
  components: {
    // Button,
    // List,
  },

  setup() {
    //getCurrentInstance 方法获取当前组件的实例，然后通过 ctx 属性获得当前上下文，这样我们就能在setup中使用router和vuex了
    const CurrentInstance = getCurrentInstance();
    const addTodoName = ref(''); //input 绑定值
    //清单列表
    const undoneTodoList = reactive([
      {
        id: Date.now(),
        name: '吃饭',
      },
    ]);
    const completedTodoList = reactive([
      {
        id: Date.now(),
        name: '睡觉',
      },
    ]);
    // const addTodoAction = () => {
    //   if (addTodoName.value === '') {
    //     console.log(CurrentInstance);
    //     return (CurrentInstance?.refs?.todoInput as HTMLInputElement).focus();
    //   }
    //   const obj = {
    //     id: Date.now(),
    //     name: addTodoName.value,
    //   };
    //   undoneTodoList.push(obj);
    //   addTodoName.value = '';
    // };
    // const delTodoAction = (
    //   item: {
    //     id: number;
    //   },
    //   todo: boolean
    // ) => {
    //   if (todo) {
    //     undoneTodoList.splice(
    //       undoneTodoList.findIndex((i) => i.id === item.id),
    //       1
    //     );
    //   } else {
    //     completedTodoList.splice(
    //       completedTodoList.findIndex((i) => i.id === item.id),
    //       1
    //     );
    //   }
    // };
    // const doneTodo = (item: { id: number; name: string }) => {
    //   undoneTodoList.splice(
    //     undoneTodoList.findIndex((i) => i.id === item.id),
    //     1
    //   );
    //   completedTodoList.push(item);
    // };
    // const goAddress = () => {
    //   router.push('/address/list');
    // };
    // const goChat = () => {
    //   router.push('/chat/list');
    // };
    // // let bb = 0;
    // // const a = ref(0);
    // // const getIndex = () => {
    // //   const aa = Math.random();
    // //   a.value = aa;
    // //   console.log(a.value);
    // //   bb = aa;
    // // };
    return {
      addTodoName,
      undoneTodoList,
      completedTodoList,
      // addTodoAction,
      // delTodoAction,
      // doneTodo,

      // goAddress,
      // goChat,
      // a,bb,  getIndex,
    };
  },
});
</script>

 
 