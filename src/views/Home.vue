<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-04 14:41:01
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-04 17:09:02
 * @Description: file content
 * @FilePath: /electron-vue-demo/src/views/Home.vue
-->
 <template>
  <div class="home">
    <div>By JoyNop</div>
    <Button>sdfgsdf</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';

export default defineComponent({
  name: 'Home',
  components: {
    Button,
  },
});
</script>
