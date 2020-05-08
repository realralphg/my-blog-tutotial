// Define your Routes/Paths here
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import blogList from './components/blogList.vue';

export default[
    {path: '/', component: showBlogs},
    {path: '/addblog', component: addBlog},
    {path: '/bloglist', component: blogList}
]