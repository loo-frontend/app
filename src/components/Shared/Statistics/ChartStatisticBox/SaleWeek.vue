<template lang="html">

  <div class="chart-statistic-box">
    <div class="chart-txt">
      <div class="chart-txt-top">
        <p><span class="unit">$</span><span class="number">1540</span></p>
        <p class="caption">Vendas da Semana</p>            
      </div>
      <table class="tbl-data">
        <tr>
          <td class="price color-purple">120$</td>
          <td>Orders</td>
        </tr>
        <tr>
          <td class="price color-yellow">15$</td>
          <td>Investments</td>
        </tr>
        <tr>
          <td class="price color-lime">55$</td>
          <td>Others</td>
        </tr>
      </table>
    </div>
    <div class="chart-container">
      <div class="chart-container-in">
        <div id="chart_div"></div>
        <header class="chart-container-title">Income</header>
        <div class="chart-container-x">
          <div class="item"></div>
          <div class="item">tue</div>
          <div class="item">wed</div>
          <div class="item">thu</div>
          <div class="item">fri</div>
          <div class="item">sat</div>
          <div class="item">sun</div>
          <div class="item">mon</div>
          <div class="item"></div>
        </div>
        <div class="chart-container-y">
          <div class="item">300</div>
          <div class="item"></div>
          <div class="item">250</div>
          <div class="item"></div>
          <div class="item">200</div>
          <div class="item"></div>
          <div class="item">150</div>
          <div class="item"></div>
          <div class="item">100</div>
          <div class="item"></div>
          <div class="item">50</div>
          <div class="item"></div>
        </div>
      </div>
    </div>
  </div>
  <!--.chart-statistic-box-->

</template>

<script lang="js">
  export default  {
    name: 'sale-week',
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
  .sale-week {

  }
</style>
