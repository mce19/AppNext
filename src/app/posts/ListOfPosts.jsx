const fetchPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
}

export default async function ListOfPosts(){
 const posts = await fetchPost()

    return posts.slice(0, 6).map(post =>(

                <article key={post.id}>
                    <h2 style={{color: '#09f'}} >{post.title}</h2>
                    <p>{post.body}</p>
                </article>
      ))
}