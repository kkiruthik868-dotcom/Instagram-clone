import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Suggestions from "./Suggestions"

function App() {
  return (
    <div className="flex">

      {/* Left sidebar: stays fixed while you scroll */}
      <div className="sticky top-0 h-screen w-[20%] shrink-0 self-start">
        <Sidebar />
      </div>

      {/* Feed: the posts scroll with the page */}
      <div className="w-[50%] min-w-0">
        <Feed />
      </div>

      {/* Suggestions: stays fixed, doesn't shrink */}
      <div className="sticky top-0 h-screen w-[30%] shrink-0 self-start">
        <Suggestions />
      </div>

    </div>
  )
}

export default App