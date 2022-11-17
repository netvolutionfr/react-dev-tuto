import {useState} from "react";
import {Post} from "../types";

export default function Posts2() {
    const [posts, setPosts] = useState([]);

    function recupererPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }

    return(
        <div>
            <h1>Posts2</h1>
            <button onClick={recupererPosts}>Récupérer les posts</button>
            <div>
                {posts.map((post: Post) => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <p>{post.body}</p>
                    </div>))}
            </div>
        </div>
    )
}
