<template>
  <div class="item" :class="itemClass">
    <!-- 普通item -->
    <template v-if="index > 2">
      <div class="ceil1">{{index + 1}}</div>
      <a :href="`loveshow://userinfo?tuid=${item.uid}`" class="ceil2"><img :src="item.head"></a>
      <div class="ceil3">
        <div class="top">
          <div class="name">{{item.nickname}}</div>
          <!--<div>等级</div>-->
        </div>
        <div class="bottom">{{item.exp}} 爱豆</div>
      </div>
    </template>
    <!-- 1st -->
    <template v-if="index === 0">
      <div class="ceil4">
        <img src="../imgs/cup1.png">
      </div>
      <div class="ceil5">
        <a class="up" :href="`loveshow://userinfo?tuid=${item.uid}`">
          <img class="head" :src="item.head">
          <img class="crown" src="../imgs/crown1.png">
        </a>
        <div class="mid">
          <div class="name">{{item.nickname}}</div>
        </div>
        <div class="down">{{item.exp}} 爱豆</div>
      </div>
    </template>
    <!-- 2nd -->
    <template v-if="index === 1">
      <div class="ceil6">
        <img src="../imgs/cup2.png">
      </div>
      <a :href="`loveshow://userinfo?tuid=${item.uid}`" class="ceil7">
        <img class="head" :src="item.head">
        <img class="crown" src="../imgs/crown2.png">
      </a>
      <div class="ceil3">
        <div class="top">
          <div class="name">{{item.nickname}}</div>
          <!--<div>等级</div>-->
        </div>
        <div class="bottom">{{item.exp}} 爱豆</div>
      </div>
    </template>
    <!-- 3rd -->
    <template v-if="index === 2">
      <div class="ceil6">
        <img src="../imgs/cup3.png">
      </div>
      <a :href="`loveshow://userinfo?tuid=${item.uid}`" class="ceil8">
        <img class="head" :src="item.head">
        <img class="crown" src="../imgs/crown3.png">
      </a>
      <div class="ceil3">
        <div class="top">
          <div class="name">{{item.nickname}}</div>
          <!--<div>等级</div>-->
        </div>
        <div class="bottom">{{item.exp}} 爱豆</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'item',
  props: {
    index: Number,
    item: Object,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    itemClass() {
      let cn = '';
      if (this.index === 0) {
        cn = 'top1';
      }
      return cn;
    },
  },
  mounted() {
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
  @import "../css/item";
</style>
