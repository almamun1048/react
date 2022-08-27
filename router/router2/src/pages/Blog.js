import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'

const Blog = () => {
  const {title} = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>{title} page</h1>
      <p>{location.state.body.slice(0,300)}</p>
      <p>{location.state.body.slice(301,600)}</p>
      <p>{location.state.body.slice(601,900)}</p>
      <p>{location.state.body.slice(900,2000)}</p>
    </div>
  )
}

export default Blog;
