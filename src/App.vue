<template>
  <div>
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/navigation';
export default {
components:{
  'navigation':navigation
},
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>
