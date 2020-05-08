<template>
    <nav>
        <ul>
            <li><router-link to = '/'> Home </router-link></li>
            <li><router-link to = '/addblog' > Post Blog </router-link></li>
            <li><router-link to = '/bloglist' > Blog List</router-link></li>
        </ul>
    </nav>
</template>

<style>
ul{
    list-style-type: none;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif
}

li{
    display:inline-block;
    margin-right:10px;
}

nav{
    background: #444;
    padding:10px;
    margin-bottom: 40px;

}

a{
    text-decoration: none;
    border-radius: 10px;
    padding: 6px 8px;
    color: #fff;
}

.router-link-exact-active{
    color:#444;
    background:#eee;
}
</style>