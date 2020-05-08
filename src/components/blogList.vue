<template>
  <div id="blog-list">
      <h1 style="color:chocolate"> List of Blogs</h1>
      <input type="text" placeholder="search" v-model="search"/>
      <div id="single-post" v-theme v-rainbow  v-for="blog in filteredBlogs" :key="blog.id">
          <h3>{{blog.title |to-uppercase}}</h3>
          
      </div>       
  </div>
</template>

<script>
//import and Register searchMixim here
//Import Mixin
import searchMixin from '../searchMixin'

export default{
//Register Mixin
    mixins : [searchMixin],

    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        })
    },

    data() {
        return{
            blogs: [],
            search:''
        }
    
  },

  //Let's Register a Filter Locally
  filters:{
      'to-uppercase':function(value){
          return value.toUpperCase();
      }
  }, 
  //Done Creating Filter - Go Apply it! Create Snippets too if you like
  //You can create Directives too locally --- bind(el, binding, vnode)

  directives:{
      'theme':{
          bind(el){
              el.style.backgroundColor = "#" + Math.random().toString().slice(2,8);
          }
      }
  }
  //Done creating Diretives - Go Apply it!
}
</script>

<style>
#blog-list{
    max-width: 800px;
    margin: 0 auto;
}

#single-post{
    padding:20px;
    margin: 20px, 0, 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
}

input[type='text']{
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
}

</style>
