<template>
  <div class="tab">
    <div class="item" :class="{'active': status === 0}" @click="select(0)">周榜</div>
    <div class="item" :class="{'active': status === 1}" @click="select(1)">总榜</div>
  </div>
</template>
<script>
export default {
  name: 'tab',
  props: {
    status: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    select(s) {
      this.$emit('update:status', s);
    }
  },
};
</script>

<style scoped lang="scss">
  @import "../../../assets/css/base";
  .tab {
    @include flex;
    border-bottom: solid 1px rgba(229, 229, 229, .8);
    padding: rem(14) rem(140);
    .item {
      position: relative;
      width: 50%;
      font-size: rem(32);
      color: #484444;
      text-align: center;
      padding: rem(10) 0;
      &.active {
        color: rgb(255, 51, 102);
      }
      &.active::after {
        content: '';
        display: block;
        width: 16px;
        position: absolute;
        left: 50%;
        height: 2px;
        margin-left: -8px;
        bottom: 0;
        background: rgb( 255, 51, 102);
      }
    }
  }
</style>
