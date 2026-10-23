import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [users, setUsers] = useState([])
  const [following, setFollowing] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((posts) => {
        // one suggestion per unique user
        const seen = new Set()
        const unique = posts.filter((p) => {
          if (seen.has(p.username)) return false
          
          seen.add(p.username)
          return true
        })
        setUsers(unique)
      })
      .catch((error) => console.log(error))
  }, [])

  const toggleFollow = (username) => {
    setFollowing((prev) =>
      prev.includes(username)
        ? prev.filter((u) => u !== username)
        : [...prev, username]
    )
  }

  return (
    <div className="w-full max-w-[320px] px-6 py-8">

      {/* Your profile */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-14 w-14 shrink-0 rounded-full bg-gray-300" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">your_username</p>
          <p className="truncate text-sm text-gray-500">Your Name</p>
        </div>
        <button className="shrink-0 text-xs font-semibold text-blue-500 hover:text-blue-700">
          Switch
        </button>
      </div>

      {/* Heading */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-500">Suggested for you</p>
        <button className="text-xs font-semibold hover:text-gray-500">
          See all
        </button>
      </div>

      {/* Suggestion list */}
      <div className="flex flex-col gap-4">
        {users.map((user) => {
          const isFollowing = following.includes(user.username)
          return (
            <div key={user.username} className="flex shrink-0 items-center gap-3">
              <img
                src={user.profile}
                alt={user.username}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{user.username}</p>
                <p className="truncate text-xs text-gray-500">Suggested for you</p>
              </div>
              <button
                onClick={() => toggleFollow(user.username)}
                className={`shrink-0 text-xs font-semibold ${
                  isFollowing
                    ? 'text-gray-500'
                    : 'text-blue-500 hover:text-blue-700'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          )
        })}
      </div>

     

    </div>
  )
}

export default Suggestions