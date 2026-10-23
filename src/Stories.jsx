import React, { useEffect, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

function Stories() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((posts) => {
        // one story per unique user
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

  return (
    <div className="mx-auto flex max-w-[470px] gap-4 overflow-x-auto px-1 py-4 hide-scrollbar">

      {/* Your story */}
      <div className="flex shrink-0 cursor-pointer flex-col items-center gap-1">
        <div className="relative">
          <div className="h-[66px] w-[66px] rounded-full bg-gray-200" />
          <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-blue-500">
            <PlusIcon className="h-3 w-3 text-white" />
          </span>
        </div>
        <span className="w-[66px] truncate text-center text-xs">Your story</span>
      </div>

      {/* Other users' stories */}
      {users.map((user) => (
        <div
          key={user.username}
          className="flex shrink-0 cursor-pointer flex-col items-center gap-1 transition hover:scale-105"
        >
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px]">
            <div className="rounded-full border-[3px] border-white bg-white">
              <img
                src={user.profile}
                alt={user.username}
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
            </div>
          </div>
          <span className="w-[66px] truncate text-center text-xs">
            {user.username}
          </span>
        </div>
      ))}

    </div>
  )
}

export default Stories