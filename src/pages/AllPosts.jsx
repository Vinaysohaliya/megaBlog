import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/conf";
import PostCard from '../components/PostCard'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                console.log(posts);
            }
        })
    }, [])
   
  return (
    <div className='w-full py-8'>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard $id={post.$id}  title={post.title} featuredImage={post.img} />
                    </div>
                ))}
            </div>
    </div>
  )
}

export default AllPosts