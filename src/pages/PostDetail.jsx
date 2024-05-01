import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/authoridhere/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/authoridhere/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea ex veritatis recusandae qui, culpa accusamus possimus numquam saepe ullam, animi ipsa dolorum est officiis odit deleniti iste eos reprehenderit mollitia vel unde quod repellat provident perspiciatis? Sit, veniam quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum animi eaque iusto veritatis asperiores corrupti commodi architecto eius id quis, blanditiis consequatur voluptatibus accusantium omnis repellat est eum. Ipsa consectetur repellendus cum debitis quidem et non assumenda, blanditiis necessitatibus enim. A iste facilis neque eaque excepturi, ducimus dignissimos tempora minima!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe commodi hic veritatis dolore iure quo veniam debitis! Corporis at provident eum tempora obcaecati vitae excepturi odit quo sunt? Minus exercitationem aliquid dolore delectus, quas ratione possimus temporibus deserunt dolor nemo repellendus atque unde porro suscipit saepe a blanditiis assumenda accusantium? Ut, amet quia magni cum eligendi ratione vel soluta quam, eos illum esse? Libero numquam, excepturi ipsam optio natus doloremque sit fugiat temporibus repudiandae iste deleniti laudantium molestias ex beatae. Veniam atque inventore quidem natus laboriosam, sunt neque, numquam nisi ad possimus quasi voluptate impedit! Consectetur ab impedit eos!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iure! Id rem necessitatibus, quo vero rerum, tempore sapiente at eius quasi quas reiciendis, ullam facilis veniam eos ab tenetur repellat deserunt neque quibusdam harum minima? Magnam atque veritatis inventore velit delectus eum accusantium cum. Voluptas nisi doloremque non! Corrupti, magni vitae. Aliquam pariatur repellat sint corporis voluptates quis explicabo exercitationem inventore, accusantium hic maxime eveniet commodi reprehenderit, quos quibusdam voluptatem quam consequuntur obcaecati sit. Debitis mollitia commodi voluptatibus voluptatum minus rem modi molestiae, sequi aspernatur quisquam facere maiores veniam dolor fugiat vitae tempore dolores. Fuga labore corporis veritatis hic assumenda quisquam, fugit totam soluta impedit, illum corrupti deserunt perspiciatis ducimus tempore consequuntur. Modi vel ea nesciunt earum minima est atque illum, officia optio at aut beatae, dignissimos possimus libero inventore qui blanditiis sed consectetur eaque, ut temporibus sapiente cumque! Deserunt quod esse voluptas dolores deleniti assumenda rerum ad inventore a dolorum cumque nobis sunt, iste velit odio totam eius aut obcaecati maiores, qui ipsa dolor ducimus asperiores enim. Distinctio, mollitia ullam? Voluptatibus quaerat nulla nihil, sunt omnis ad aspernatur repellat accusamus accusantium consequuntur! Deserunt, tenetur nesciunt quia illo consectetur, magni minus, ratione explicabo facilis amet incidunt fuga quas delectus enim?
        </p>
      </div>
    </section>
  )
}

export default PostDetail
