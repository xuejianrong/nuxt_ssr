<template>
  <div class="rank-fans">
    <loading v-show="loading"/>
  </div>
</template>
<script>
import loading from '~/components/loading';
import services from '../../../helper/services';

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
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await services.local.getRankFans();
      console.log(res);
    },
  },
  components: {
    loading,
  },
};
</script>

<style scoped lang="scss">
</style>
