<template>
    <div class="navbar">
        <ul>
            <li><router-link  class="navbar-link" :to="{ name: 'HomePage'}">Home</router-link></li>
            <li><router-link class="navbar-link" :to="{ name: 'NewPost'}">New Post</router-link></li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'NavBar',
    data() {
        return {

        }
    }
}
    
</script>
<style>
.navbar {
    background-color: rgb(195, 76, 7);
    height: 50px;
}
navbar-link:active {
    outline-color: none;
    text-decoration-line: none;
}
.navbar ul {
    display: flex;
    justify-content: center;
    align-content: center;
}
.navbar ul li {
    font-size: 16px;
    color: #fff;
    line-height: 50px;
    list-style-type: none;
    margin: 0 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
}
.navbar ul li a {
    text-decoration: none;
    color: #fff;
    padding: 16px 0;
}
.navbar ul li a:hover{
    background-color: #fff;
    color: rgb(195, 76, 7);
    text-decoration: none;
}
</style>