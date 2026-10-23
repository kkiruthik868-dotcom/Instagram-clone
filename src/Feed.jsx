import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div>
      <div className="border-b border-gray-100">
        <Stories />
      </div>
      <Posts />
    </div>
  )
}

export default Feed