const Head = () => {
  return (
    <div className="flex items-center justify-between shadow-lg">
      <div className="flex gap-5 items-center">
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

      <div className="justify-center items-center flex">
        {/* middle section */}
        <input 
          type="text" 
          placeholder="Search"
          className="m-4 px-20 border-2 border-black"/> 

        <button>
          Search
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