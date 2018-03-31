import ChartStatisticBox from '../../Shared/Statistics/ChartStatisticBox/SaleWeek';
import OrderDone from '../../Shared/Statistics/StatisticBox/OrderDone';
import OrderApproved from '../../Shared/Statistics/StatisticBox/OrderApproved';
import OrderPending from '../../Shared/Statistics/StatisticBox/OrderPending';
import OrderCanceled from '../../Shared/Statistics/StatisticBox/OrderCanceled';
import OrderRecent  from '../../Shared/BoxTypicalPanel/OrderRecent';

export default {
  name: 'home',
  components: {
    'statistic-box-chart-sale-week': ChartStatisticBox,
    'statistic-box-order-done': OrderDone,
    'statistic-box-order-approved': OrderApproved,
    'statistic-box-order-pending': OrderPending,
    'statistic-box-order-canceled': OrderCanceled,
    'box-typical-panel-order-recent': OrderRecent
  }, 
  props: [],
  data () {
    return {
      myClass: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clickAlert() {
      swal({
        title: "Essa é uma messagem de Alerta em jQuery! \\o/",
        text: "It's pretty, isn't it?"
      });
    }
  },
}
