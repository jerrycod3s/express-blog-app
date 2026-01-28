import { posts } from "./blogPosts.js";

//create a new blog post object with a formatted date and unique id 
const addNewPost = (title, content) => {
    const currentDate = new Date();
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    }

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

    const newPost = {
        id: Date.now(),
        title: title,
        content: content, 
        date: formattedDate,
        author: "You"
    }
    return newPost;
}

const findBlog = (id) => {
    const blogId = parseInt(id);
    const blog = posts.find((post) => post.id === blogId);
    
    return blog;
}

export const getAllPosts = (req, res) => {
    res.render("index.ejs", { blogPosts: posts });
}

export const createNewBlogPost = (req, res) => {
    res.render("createPost.ejs", { post: null });
}

export const findBlogPost = (req, res) => {
    const post = findBlog(req.params.id);

    if(!post) {
        return res.status(404).send("Blog post not found.");
    }

    res.render("blog.ejs", { post });
}

export const editPost = (req, res) => {
    const post = findBlog(req.params.id);

    if (!post) {
        return res.status(404).send("Blog post not found.");
    }

    res.render("createPost.ejs", { post });
}

//handles bothe creating and updating blog posts
export const createOrUpdatePost = (req, res) => {

    //creates a new blog post or will update the existing blog post 
    if (req.params.id === "new") {
        const createdPost = addNewPost(req.body.title, req.body.content);
        posts.push(createdPost)
    } else {
        const post = findBlog(req.params.id);

        if (!post) {
            return res.status(404).send("Blog post not found!");
        }

        post.title = req.body.title;
        post.content = req.body.content;
    }
    res.redirect("/");
}

export const deletePost = (req, res) => {
    const post = findBlog(req.params.id);
    console.log(post)
    if (!post) {
        return res.status(404).send("Blog post not found!");
    }

    const postToRemove = posts.findIndex((blogPost) => blogPost.id === post.id);

    console.log(postToRemove);

    if (postToRemove !== -1) {
        posts.splice(postToRemove, 1);
        res.redirect("/");
    }
}