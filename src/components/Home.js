import React, { useEffect, useState } from 'react'
import bg from '../assets/img/home-bg.jpg'
import PostListItem from './PostListItem'



export default function Home() {
    const [articles,setArticles] = useState([])

    useEffect(function(){
        fetch('https://dummyjson.com/posts').then(response=>response.json()).then((data)=>{
            console.log(data.posts)
            setArticles(data.posts)
        })
    },[])

    return (
        <div>
            {/* Page Header*/}
            <header className="masthead" style={{ backgroundImage: "url('"+bg+"')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <span className="subheading">A Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Main Content*/}
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {(articles.length>0)?articles.map(function(item){
                            return <PostListItem key={item.id} title={item.title} body={(item.body.length>50)?item.body.substring(0,50):item.body.length} views={item.views} id={item.id} />
                        }):''}
                        
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
            {/* Footer*/}
        </div>
    )
}
