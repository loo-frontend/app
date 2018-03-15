<template lang="html">
  <box-typical-dashboard title="Pedidos Recentes">
    <table class="tbl-typical">
      <tr>
        <th>
          <div>Status</div>
        </th>
        <th>
          <div>Clients</div>
        </th>
        <th align="center">
          <div>Orders#</div>
        </th>
        <th align="center">
          <div>Date</div>
        </th>
      </tr>
      <tr>
        <td>
          <span class="label label-primary">Paid</span>
          <span class="label label-success">Active</span>
        </td>
        <td>John Doe</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center"><span class="semibold">Today</span> 8:30</td>
      </tr>
      <tr>
        <td>
          <span class="label label-primary">Paid</span>
          <span class="label label-success">Active</span>
        </td>
        <td>Thomas Bayer</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center"><span class="semibold">Today</span> 16:30</td>
      </tr>
      <tr>
        <td>
          <span class="label label-primary">Paid</span>
          <span class="label label-default">Inactive</span>
        </td>
        <td>Nicolas Karabat</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center"><span class="semibold">Yesterday</span></td>
      </tr>
      <tr>
        <td>
          <span class="label label-default">Unpaid</span>
          <span class="label label-default">Inactive</span>
        </td>
        <td>Alexandre Pome</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center">23th May</td>
      </tr>
      <tr>
        <td>
          <span class="label label-primary">Paid</span>
          <span class="label label-success">Active</span>
        </td>
        <td>John Doe</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center"><span class="semibold">Today</span> 8:30</td>
      </tr>
      <tr>
        <td>
          <span class="label label-primary">Paid</span>
          <span class="label label-success">Active</span>
        </td>
        <td>Thomas Bayer</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center"><span class="semibold">Today</span> 16:30</td>
      </tr>
      <tr>
        <td>
          <span class="label label-primary">Paid</span>
          <span class="label label-default">Inactive</span>
        </td>
        <td>Nicolas Karabat</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center"><span class="semibold">Yesterday</span></td>
      </tr>
      <tr>
        <td>
          <span class="label label-default">Unpaid</span>
          <span class="label label-default">Inactive</span>
        </td>
        <td>Alexandre Pome</td>
        <td align="center">3435362</td>
        <td class="color-blue-grey" nowrap align="center">23th May</td>
      </tr>
    </table>
  </box-typical-dashboard>
</template>

<script lang="js">
  import BoxTypicalPanelHelper from '../../Helpers/BoxTypicalPanelHelper';

  export default  {
    name: 'order-recent',
    components: {
      'box-typical-dashboard' : BoxTypicalPanelHelper
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
