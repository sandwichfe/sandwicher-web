<template>
  <div class="hello">
    <el-tabs v-model="activeName">
      <el-tab-pane label="tab1" name="first" :key="'first'">
        <div style="background: yellow; display: inline">
          tab1内容 tab1内容 tab1内容
        </div>
      </el-tab-pane>

      <el-tab-pane label="tab2" name="second" :key="'second'">
        <div style="background: green; display: inline">
          tab2内容 tab2内容 tab2内容
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 注释　　　　　　　label：选项卡显示的title　　　　　　　name：与选项卡绑定的activeName对应的标识符，表示选项卡的别名　　　　　-->
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
  },
  data() {
    return {
      //默认第一个选项卡
      activeName: "first",
    };
  },
};
</script>

<style scoped>
</style>
