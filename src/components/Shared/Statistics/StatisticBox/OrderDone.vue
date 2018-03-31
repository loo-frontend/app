<template lang="html">

  <statistic-box-helper color="yellow" :sizeColSM="6">
      <div>
        <div class="number">05</div>
        <div class="caption">
          <div>Pedidos feitos nos últimos 30 dias </div>
        </div>
      </div>
    </statistic-box-helper>

</template>

<script lang="js">

  import StatisticBoxHelper from '../../../Helpers/StatisticBoxHelper';

  export default  {
    name: 'order-done',
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
