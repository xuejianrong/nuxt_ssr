<template>
  <div class="rank-fans">
    <loading v-show="loading"/>
    <tab :status.sync="status"/>
    <div class="text">{{text}}</div>
    <div class="text2" v-for="n in 1" :key="n">{{n}}</div>
    <form action="">
      <input class="inp" type="text">
    </form>
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
      text: '',
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.getData();

    this.$nextTick(() => {
      const inp = document.querySelector('.inp');
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        inp.blur();

        // alert('点击前往');
      });
      inp.addEventListener('blur', (e) => {
        this.text = `do sent! ${inp.value}`;
      });
      inp.addEventListener('focus', (e) => {
        this.text += '|=';
        setTimeout(() => {
          this.text += document.body.scrollHeight;
          window.scrollTo(0, 1000);
          // document.body.scrollTop = document.body.scrollHeight;
        }, 2000);
      });
    });
  },
  methods: {
    async getData() {
      const res = await services.local.getRankFans();
      this.loading = false;
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
  @import "../../assets/css/base";
  .rank-fans {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }

  .inp {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .text {
    position: fixed;
    left: 0;
    top: 0;
    font-size: rem(30);
  }

  .text2 {
    font-size: rem(50);
  }
</style>
