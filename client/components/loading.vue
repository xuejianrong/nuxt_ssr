<template>
  <div class="loading">
    <img src="~/assets/image/loading/loading1.png">
    <img src="~/assets/image/loading/loading2.png">
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {};
  },
  watch: {},
  computed: {},
  mounted() {
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
  @import "../assets/css/base";
  .loading {
    position: fixed;
    left: 50%;
    top: rem(100);
    width: rem(70);
    margin-left: rem(-35);
    z-index: 99;
  }
  .loading img:nth-child(2) {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    animation: loading 1s linear infinite;
  }


  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
