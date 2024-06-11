import React, { useEffect, useState } from "react"

function Posts(){
    const [posts, setPosts] = useState([]);

    // API call to retrive posts
    useEffect( () => {
        async function fetchPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setPosts(data)
        }

        fetchPosts()
    }, [])

    // Display the posts
    return (
        <div id="posts">
        <h2>Posts</h2>
        <p>This is a React component that makes an API call to retrive and then display posts. </p>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      </div>
    )

  }
  export default Posts;