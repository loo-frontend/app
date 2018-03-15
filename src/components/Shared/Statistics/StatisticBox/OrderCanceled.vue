<template lang="html">

  <statistic-box-helper color="red" :sizeColSM="6">
      <div>
        <div class="number">01</div>
        <div class="caption">
          <div>Pedidos cancelados nos últimos 30 dias </div>
        </div>
      </div>
    </statistic-box-helper>

</template>

<script lang="js">

  import StatisticBoxHelper from '../../../Helpers/StatisticBoxHelper';

  export default  {
    name: 'order-canceled',
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
