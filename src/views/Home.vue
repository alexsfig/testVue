<template src="./Home.vue.html"></template>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {
  apiHost,
} from '@/config/config.js'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public users: string[] = [];

  // Lifecycle hook
  public mounted() {
    this.$http.get(`${apiHost}api/v1/users`).then(
      (response) => {

        this.users = response.body;
      }, (error) => {
        console.log(error.body);

        // error callback
      },
    );
  }
}
</script>
