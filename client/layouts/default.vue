<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  import utils from '../../helper/utils'

  export default {
    mounted() {
      // rem的初始化，可接受type(number)参数来适配不一样的窗口
      utils.remInit();
    }
  }
</script>

<style lang="scss">
@import "../assets/css/init.scss";
@import "../assets/css/base.scss";
</style>
