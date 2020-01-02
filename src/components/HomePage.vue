<template>
  <div class="container">
    <img class="logo" src="@/assets/post-img.png">
    <div class="post-box" v-for="(post, index) in posts" :key="index">
      <button @click="deletePost()" class="close-btn">X</button>
      <h2>Title: {{ post.title }}</h2>
      <span>Author: {{ post.author }}</span>
      <p><strong>Post:</strong> {{ post.post }}</p>
    </div>
    <div class="post-box" v-for="dbpost in dbPosts" :key="dbpost.id">
      <button @click="deletePost(dbpost.id)" class="close-btn">X</button>
      <h2>Title: {{ dbpost.title }}</h2>
      <span>Author: {{ dbpost.author }}</span>
      <p><strong>Post:</strong> {{ dbpost.post }}</p>
    </div>
    <div class="new-post-box">
      <img class="new-post-img" src="@/assets/new-post.png">
      <button class="new-btn"><router-link :to="{ name: 'NewPost'}">Write a new post</router-link></button>    
    </div>    
  </div>
</template>

<script>
import axios from 'axios'
import NewPost from './NewPost'
import db from '@/firebase/init'

export default {
  name: 'HomePage',
  components: {
    NewPost
  },
  data () {
    return {
      posts: {},
      dbPosts: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:2000/posts').then((response) => {
      this.posts = response.data
     console.log(this.posts);
    }).catch((err) => {
      console.log('The error is' + err);
    })
  },
  created() {
    //fetch data from db
    db.collection('posts').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let dataBasepost = doc.data();
        dataBasepost.id = doc.id
        this.dbPosts.push(dataBasepost);
      })
    })

  },
  methods: {
    deletePost(id) {
      db.collection('posts').doc(id).delete()
      .then(() => {
        this.dbPosts = this.dbPosts.filter(dbpost => {
          return dbpost.id !== id;
        })
      })
    }
  }
}
</script>


<style>
.container {
  margin: 0 50px;
}
.logo {
  display: flex;
  margin: 0 auto 50px;
}

.post-box {
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 241, 241);
  margin-bottom: 25px;
  position: relative;
}
.close-btn {
  width: 20px;
  height:20px;
  font-size: 10px;
  border: none;
  background-color: rgba(223, 223, 223, 0.534);
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 50%;
}
.post-box h2 {
  margin: 10px 10px;
  margin-bottom: 10px;
  color: rgb(195, 76, 7);
}

.post-box span {
  font-size: 14px;
  margin: 0 10px 10px;
  color: rgb(195, 76, 7);
}

.post-box p {
  font-size: 14px;
  margin: 0 10px 15px;
  color: rgb(53, 53, 53);
}
.new-post-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.new-post-box a {
  text-decoration: none;
  padding: 10px;
  color: rgb(53, 53, 53);
}
.new-post-img {
  width: 40px;
  height: 40px;
  color: rgb(195, 76, 7);
}
.new-btn {
  height: 30px;
  border: none;
  font-size: 14px;
  background-color: rgba(195, 76, 7, 0.301);
  border-radius: 3px;
}

</style>
