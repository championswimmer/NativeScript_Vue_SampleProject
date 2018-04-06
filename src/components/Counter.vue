<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="message" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
    </StackLayout>

  </Page>
</template>

<script lang="ts">
  import { mapActions } from 'vuex';
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import {State} from 'vuex-class'

  @Component({
    methods: mapActions([
      'decrement',
      'increment',
    ])
  })
  export default class Counter extends Vue {

    @State(state => state.counter.count) count: number

    get message () {
      return this.count.toString()
    }
    get surprise () {
      return this.count >= 5
    }

  };
</script>
