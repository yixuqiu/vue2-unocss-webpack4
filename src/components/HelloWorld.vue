<template>
  <div class="flex flex-col items-center gap4 bg-#398">
    <h1 class="text-3xl font900 text-#777">Hello World</h1>
    <div class="text-red font700 !text-amber">Sample Text</div>
    <el-button type="primary" class="px4 py2"> ElementUI Button </el-button>

    <template>
      <el-button :plain="true" @click="open">11</el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    open() {
      this.$message({
        showClose: true,
        message: '您好',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
