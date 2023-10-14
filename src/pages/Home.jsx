import { useState } from "react";
import {useEffect} from 'react'
import Product from '../components/Product'
const Home = () => {

  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([])
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setLoading(true);
    try {
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
      console.log(data)

    } catch (error) {
      console.log("error in fetch")
      
    }
    setLoading(false)
  }
  console.log(posts)

  useEffect(()=>{
    fetchProductData();
  },[])


  return (
    <div>
      {
      loading ? <p>Loading...</p>:
      posts.length > 0 ?
       (<div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {posts.map((post)=>(
          <Product key={post.id} post={post}/>
        ))}
        </div>):
        (<div className="flex justify-center items-center">no data found</div>)
       
      }
    </div>
  );
};

export default Home;
