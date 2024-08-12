import React, { useEffect, useState } from 'react'
import bg from '../assets/img/post-bg.jpg'
import { useParams } from 'react-router-dom'
export default function PostDetails() {
    let [post,setPost] = useState({})
    const {id} = useParams()

    useEffect(function(){
        fetch('https://dummyjson.com/posts/'+id).then(response=>response.json()).then((data)=>{
            console.log(data)
            setPost(data)
            
        })
    },[])
  return (

    <div>
      <header className="masthead" style={{ backgroundImage: "url('"+bg+"')" }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading">
                            <h1>{post.title}</h1>
                            <h2 className="subheading">{post.views} Views</h2>
                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
       
        <article className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {post.body}
                    </div>
                </div>
            </div>
        </article>
    </div>
  )
}
