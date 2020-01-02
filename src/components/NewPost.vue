<template>
    <div class="new-post-container">
        <h2>Write a new Post!</h2>
        <form class="new-post-form">
            <div class="new-post-form-box">
                <label for="author">Author:</label>
                <input type="text" v-model="author">
            </div>
            <div class="new-post-form-box">
                <label for="title">Title:</label>
                <input type="text" v-model="title">
            </div>
            <div class="textarea-box">
                <label for="post">Post:</label>
                <textarea v-model="post"></textarea>
            </div>
            <p v-if="feedback" class="feedback">{{ this.feedback }}</p>
            <button class="post-page-btn" @click.prevent="addPost">Publish</button>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'NewPost',
    data() {
        return {
            author: null,
            title: null,
            post: null,
            slug: null,
            feedback: null,
            date: null

        }
    },
    methods: {
        addPost() {
            if(this.post && this.title) {
                this.feedback = null
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('posts').add({
                author: this.author,
                title: this.title,
                post: this.post,
                slug: this.slug,
                }).then(() => {
                    this.$router.push({ name: 'HomePage' })
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                this.feedback = 'Please enter a valid post!'
            }            
        }
    }
}
</script>
<style>
.new-post-container {
    width: 600px;
    margin: 0 auto;
    text-align: center;
    margin: 25px auto;
}
.new-post-container h2 {
    color: rgb(195, 76, 7);
    margin-bottom: 40px;
}
.new-post-form {
    display: flex;
    flex-direction: column;
}
.new-post-form-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

}
.new-post-form-box input {
    font-size: 16px;
    height: 30px;
    width: 535px;    
}

.new-post-form-box input[type=text] {
    border: none;
    border-bottom: 1px solid #ccc;
}
.new-post-form-box input[type=text]:focus {
    outline: none;
}
.textarea-box {
    display: flex;   
    margin-bottom: 20px;
}

.textarea-box textarea {
    margin-left: 32px;
    width: 100%;
    height: 250px;
    resize: none;
}
.textarea-box textarea:focus {
    outline: none;
}
.post-page-btn {
    width: 100px;
    height: 30px;
    border-radius: 2px;
    border: none;
    margin: 0 auto;
    background-color: rgba(195, 76, 7, 0.301);
}

.feedback {
    color: red;
    margin-bottom: 10px;
}
</style>
