import React from 'react'
import { useState } from 'react'
import PostItem from '../components/PostItem'
import { DUMMY_POSTS } from '../data.js'


const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
    { posts.length > 0 ? <div className="posts__container">
        {posts.map((post) => (
        <PostItem
            key={post.id}
            postID={post.id}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            desc={post.desc}
            authorID={post.authorID}
        />
       ))}
    </div> : <h2 className='center'>No Posts Founded</h2>}
  </section>
  )
}

export default CategoryPosts
