//Makes sense to create this as separate file and use it differently
//since several components have search on them
//you can then import and register this on the different components

export default{
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          });
      }
  }
}