<template>
  <div class="rank-fans">
    <loading v-show="loading"/>
    <tab :status.sync="status"/>
  </div>
</template>
<script>
import loading from '~/components/loading';
import services from '../../../helper/services';
import tab from './comp/tab';

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
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.getData();
    console.log(process);
  },
  methods: {
    async getData() {
      const res = await services.local.getRankFans();
      if (res.code === 0) {
        this.weekList = res;
      }
    },
  },
  components: {
    loading,
    tab,
  },
};
</script>

<style scoped lang="scss">
  .rank-fans {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
</style>
