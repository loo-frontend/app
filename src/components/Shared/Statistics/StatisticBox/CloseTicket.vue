<template lang="html">

  <statistic-box-helper color="purple" sizeColSM="6">
      <div>
        <div class="number">05</div>
        <div class="caption">
          <div>Pedidos cancelado nos últimos 30 dias</div>
        </div>
        <div class="percent">
          <div class="arrow up"></div>
          <p>11%</p>
        </div>
      </div>
    </statistic-box-helper>

</template>

<script lang="js">

  import StatisticBoxHelper from '../../../Helpers/StatisticBoxHelper';

  export default  {
    name: 'close-ticket',
    components: {
      'statistic-box-helper': StatisticBoxHelper
    }, 
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">

</style>
