<template lang="html">

  <statistic-box-helper color="red" sizeColSM="6">
      <div>
        <div class="number">02</div>
        <div class="caption">
          <div>Tickets Abertos</div>
        </div>
        <div class="percent">
          <div class="arrow up"></div>
          <p>15%</p>
        </div>
      </div>
    </statistic-box-helper>

</template>

<script lang="js">

  import StatisticBoxHelper from '../../../Helpers/StatisticBoxHelper';

  export default  {
    name: 'open-ticket',
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
