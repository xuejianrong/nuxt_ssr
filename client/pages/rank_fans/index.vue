<template>
  <div class="rank-fans">
    <loading v-show="loading" />
    <tab :status.sync="status" />
    <nodata v-if="show.nodata" />
    <div class="list">
      <item v-for="(item, i) in weekList" :key="i" :index="i" :item="item"></item>
    </div>
  </div>
</template>
<script>
import loading from '~/components/loading';
import services from '../../../helper/services';
import tab from './comp/tab';
import nodata from './comp/nodata';
import item from './comp/item';

export default {
  name: 'rank_fans',
  head() {
    return {
      title: '粉丝贡献榜',
    };
  },
  data() {
    return {
      loading: true,
      status: 0, // 0 周榜，1 总榜
      weekList: [],

      /*
      * 显示
      * */
      show: {
        nodata: false,
      },
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      // const res = await services.local.getRankFans();
      const res = await services.local.getRankFansTest({
        week: 0,
      });
      this.loading = false;
      console.log(res);
      if (res.errno === 0) {
        this.weekList = res.data.fans;
      }
    },
  },
  components: {
    loading,
    tab,
    nodata,
    item,
  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/css/base";
  .rank-fans {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
</style>
