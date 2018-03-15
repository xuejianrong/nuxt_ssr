<template>
  <div class="rank-fans">rank_fans</div>
</template>
<script>
import services from '../../../helper/services';

export default {
  name: 'rank_fans',
  head() {
    return {
      title: '粉丝贡献榜',
    };
  },
  data() {
    return {};
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
  components: {},
};
</script>

<style scoped lang="scss">
</style>
