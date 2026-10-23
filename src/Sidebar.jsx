
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  PlayCircleIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  PlusCircleIcon,
  UserCircleIcon,
  Bars3Icon,
  AtSymbolIcon
} from '@heroicons/react/24/outline'

function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 p-4">

      <div>
        <img
          className="w-[100px] mb-8"
          src="/src/assets/text.png"
          alt="Instagram"
        />
      </div>

      
      <div className="flex flex-col gap-6">

        <div className="flex items-center gap-3">
          <HomeIcon className="h-6 w-6" />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-3">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <span>Search</span>
        </div>

        <div className="flex items-center gap-3">
          <Squares2X2Icon className="h-6 w-6" />
          <span>Explore</span>
        </div>

        <div className="flex items-center gap-3">
          <PlayCircleIcon className="h-6 w-6" />
          <span>Reels</span>
        </div>

        <div className="flex items-center gap-3">
          <ChatBubbleLeftIcon className="h-6 w-6" />
          <span>Messages</span>
        </div>

        <div className="flex items-center gap-3">
          <HeartIcon className="h-6 w-6" />
          <span>Notifications</span>
        </div>

        <div className="flex items-center gap-3">
          <PlusCircleIcon className="h-6 w-6" />
          <span>Create</span>
        </div>

        <div className="flex items-center gap-3">
          <UserCircleIcon className="h-6 w-6" />
          <span>Profile</span>
        </div>

      </div>

      {/* Footer: Threads and More */}
      <div className="mt-auto flex flex-col gap-5">

        <div className="flex items-center gap-3">
          <AtSymbolIcon className="h-6 w-6" />
          <span>Threads</span>
        </div>

        <div className="flex items-center gap-3">
          <Bars3Icon className="h-6 w-6" />
          <span>More</span>
        </div>

      </div>

    </div>
  )
}

export default Sidebar
