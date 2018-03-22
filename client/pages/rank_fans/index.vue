<template>
  <div class="rank-fans">
    <loading v-show="loading" />
    <tab :status.sync="status" />
    <nodata v-if="show.nodata" />
  </div>
</template>
<script>
import loading from '~/components/loading';
import services from '../../../helper/services';
import tab from './comp/tab';
import nodata from './comp/nodata';

export default {
  name: 'rank_fans',
  head() {
    return {
      title: '粉丝贡献榜',
      weekList: [],
    };
  },
  data() {
    return {
      loading: true,
      status: 0, // 0 周榜，1 总榜

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
      const res = await services.local.getRankFansTest();
      this.loading = false;
      if (res.code === 0) {
        this.weekList = res;
      }
    },
  },
  components: {
    loading,
    tab,
    nodata,
  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/css/base";
  .rank-fans {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
</style>
