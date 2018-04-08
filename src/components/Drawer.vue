<template>
  <Page>
    <ActionBar title="Drawer Sample">
      <ActionItem text="Menu" @tap="$refs.drawer.nativeView.showDrawer()" />
    </ActionBar>
    <RadSideDrawer ref="drawer" showOverNavigation="false">
      <StackLayout ~drawerContent backgroundColor="#eee">
        <Label text="Drawer" />
      </StackLayout>
      <StackLayout ~mainContent >
        <Label text="Main" />
        <Button text="Open Drawer" @tap="$refs.drawer.nativeView.showDrawer()"/>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
  import * as Vue from 'nativescript-vue'
  import {RadSideDrawer} from 'nativescript-ui-sidedrawer'

  Vue.registerElement(
    'RadSideDrawer',
    () => RadSideDrawer
  )
</script>
