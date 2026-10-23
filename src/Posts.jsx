import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

import React, { useEffect, useState } from 'react'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}className="mx-auto w-[300px]">
            <div className="w-[100px]   ">
                <img src={post.profile} alt={post.username}
                 className="size-10 rounded-full object-cover" />
            </div>
          <h3>{post.username}</h3>  
          <img src={post.image} alt={post.caption} className="h-[300px] w-[300px] object-cover" />

          <div className="mt-3 flex items-center gap-5">
            <button>
                <HeartIcon className="h-6 w-6 cursor-pointer" />
            </button>

            <button>
                <ChatBubbleOvalLeftIcon className="h-6 w-6 cursor-pointer" />
            </button>

            <button>
                <PaperAirplaneIcon className="h-6 w-6 cursor-pointer" />
            </button>
            </div>

            {/* Like count */}
            <p className="mt-2 font-semibold">
            {post.likes} likes
            </p>

          <p>{post.caption}</p>
        </div> 
      ))}
    </div>
  )
}

export default Posts