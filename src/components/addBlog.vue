<template>
  <div id="add-blog">
      <form v-show="!submitted">
        <h2>Post a New Blog</h2>  
        <label>Blog Title:</label>        
        <input type="text" v-model.lazy="blog.title" required/>
        <label>Blog Content:</label>  
        <textarea v-model.lazy="blog.content"></textarea>

        <h3>Interests:</h3>
        <div id="checkboxes">
            <label>Startup</label>
            <input type="checkbox" value="startup" v-model="blog.interests"/>
            <label>Politics</label>
            <input type="checkbox" value="politics" v-model="blog.interests"/>
            <label>Technology</label>
            <input type="checkbox" value="technology" v-model="blog.interests"/>
            <label>Leadership</label>
            <input type="checkbox" value="leadership" v-model="blog.interests"/>
        </div>

        <h3>Categories</h3>
        <select v-model="blog.userType"> -->
            <option v-for="category in categories" :key="category.id">{{category}}</option>
        </select>
         <!-- Remember the .prevent modifier in future -->
        <button @click.prevent="send">Post Blog</button>
      </form>

     

      <h2 v-show="submitted" style="color:chocolate">Thanks for Posting!</h2>


      <div id="preview">
        <h2>Preview Blog</h2> 
        <label>Blog Title:</label> 
        <p>{{blog.title}}</p>
        <label>Blog Content:</label>
        <p>{{blog.content}}</p>
        <label>Blog Interests</Label>
        <ul>
            <li v-for="interest in blog.interests" :key="interest.id" > 
                {{interest}} 
            </li>
        </ul>
        
        <p>Blog Categories: {{blog.userType}}</p>
        
      </div>
        

  </div>
</template>

<script>
export default {
    // Receiving props with validation          
    

    data() {
        return {
            blog: {
                title:'',
                content:'',
                interests:[],
                userType: ''
            },
            submitted: false,
            categories: ['mentor', 'mentee', 'organization']
        }    
    },

    methods:{
        send:function(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content

            }).then(function(data){
                console.log(data);
                this.submitted = true;
            })
        }
    }

}
</script>

<style scoped>
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
        font-family: Arial, Helvetica, sans-serif;

    }

    label{
        display: block;
        margin: 20px 0 10px;
    }

    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 10px;
    }

    h3{
        margin-top: 20px;
        margin-bottom: 0;
    }

     #checkboxes label{
         margin-top: 10px;
        display: inline-block;
        
    }

    #checkboxes input{
        margin-top: 10px;
        display: inline-block;
        margin-right: 10px;
    }

    button{
        width: 100%;
        margin: 10px 0 auto;
        background-color: chocolate;
        color: white;
        padding: 10px;
    }

   
</style>
