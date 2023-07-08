<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
    <h1>hola mundo</h1>
    <button @:click="goToLayout"  class="btn btn-primary">primario</button >
    <button @:click="goToLayout" class="btn btn-secondary">secundario</button >
    <button @:click="goToLayout" class="btn btn-success">success</button>
</template>

<script>
export default {
  methods:{
    goToLayout(){
      return this.$router.push({name: 'no-entry'})
    }
  }
}
</script>


