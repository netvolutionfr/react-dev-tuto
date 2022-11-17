import {useEffect, useState} from "react";
import {Post} from "../types";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);

    return (
        <>
        <h1>Posts</h1>
        <div>
            {posts.map((post: Post) => (
                <div key={post.id}>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </div>))}
        </div>
        </>
    )
}
