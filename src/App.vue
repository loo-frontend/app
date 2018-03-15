<template>
  <div id="home">
    <site-header />
    <side-menu />
    <router-view></router-view>    
    <side-menu-panel-container />   
  </div>  
</template>

<script>

import SiteHeader from './components/Shared/Header/SiteHeader';
import SideMenuDefault from './components/Shared/Sidebar/SideMenuDefault';
import SideMenuPanelContainer from './components/Shared/Sidebar/SideMenuPanelContainer';

export default {
  name: 'home',
  components: {
    'site-header': SiteHeader,
    'side-menu': SideMenuDefault,
    'side-menu-panel-container': SideMenuPanelContainer
  }
}
</script>

<style scope>

</style>
