const Head = () => {
  return (
    <div className="flex items-center justify-between shadow-lg p-1.5">
      <div className="flex gap-5 items-center my-1">
        {/* left section */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
          alt="sidebar menu"
          className= "w-7 ml-2"/>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
            alt="youtube-logo"
            className="w-24"/>
      </div>

      <div className="my-1.5 flex w-1/2 max-w-150">
        {/* middle section */}
        <input 
          type="text" 
          placeholder="Search"
          className="w-full border-2 border-gray-500 rounded-l-full p-1.5 border-r-0"/> 

        <button
          className="border-gray-500 border-2 rounded-r-full p-2 px-4 bg-gray-200">
          🔍
        </button>
      </div>

      <div className="flex gap-3">
        {/* right section */}
        <img
          src="https://static.thenounproject.com/png/notification-bell-icon-3680442-512.png"
          alt="notification-bell"
          className="w-8"/>

        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user-icon"
          className="w-14"/>
      </div>
    </div>
  )
}

export default Head;