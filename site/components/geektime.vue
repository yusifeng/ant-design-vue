<template>
  <div
    v-show="visible"
    id="geektime"
  >
    <a
      href="https://time.geekbang.org/course/intro/163?code=KHKYcoBU6vZa8nMglg7AWfDxxi3BWrz9INAzAY3umPk%3D"
      target="_blank"
    >
      <img
        width="170"
        alt="Vue 实战教程"
        src="http://pvrd7go2h.bkt.clouddn.com/geektime-vue.jpeg"
      >
    </a>
    <div
      v-if="isMobile"
      class="close"
      @click="visible=false"
    >
      <a-icon type="close" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['isMobile'],
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="less" scoped>
  #geektime {
    position: fixed;
    bottom: 15px;
    right: 15px;
    .close {
      position: absolute;
      text-align: center;
      top: -8px;
      right: -8px;
      font-size: 16px;
      padding: 15px;
      color: #6e3041;
    }
  }
</style>

