<template>
  <navbar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    navbar: defineAsyncComponent(() => import("@/modules/components/Navbar.vue")),
    EntryList: defineAsyncComponent(() => import("@/modules/components/EntryList.vue")),
},
};
    
</script>