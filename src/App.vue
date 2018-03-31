<template>
  <div id="home">
    <SiteHeader />
    <SideMenuDefault />
    <router-view></router-view>    
    <SideMenuPanelContainer />   
  </div>  
</template>

<script>

import SiteHeader from './components/Shared/Header/SiteHeader';
import SideMenuDefault from './components/Shared/Sidebar/SideMenuDefault';
import SideMenuPanelContainer from './components/Shared/Sidebar/SideMenuPanelContainer';

export default {
  name: 'home',
  data() {  
    return {



    }
  },
  components: {
    SiteHeader,
    SideMenuDefault,
    SideMenuPanelContainer
  },
  mounted() {
    console.log('Component mounted.')



  }

}
</script>

<style scope>

</style>
