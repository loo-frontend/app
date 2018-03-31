<template lang="html">

  <statistic-box-helper color="green" :sizeColSM="6">
    <div>
      <div class="number">--</div>
      <div class="caption">
        <div>Nenhum pedido aprovado nos últimos 30 dias </div>
      </div>  
    </div>
  </statistic-box-helper>

</template>

<script lang="js">

  import StatisticBoxHelper from '../../../Helpers/StatisticBoxHelper';

  export default  {
    name: 'order-approved',
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
