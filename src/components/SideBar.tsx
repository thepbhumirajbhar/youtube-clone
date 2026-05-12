const SideBar = () => {
  return(
    <div className="shadow-2xl p-5 w-48 font-serif">
        <ul>
          <li>Home </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      
        <h2 className="font-bold pt-5">Subscriptions</h2>
        <ul className="text-sm">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        
        <h2 className="font-bold pt-5">Watch Later</h2>
        <ul className="text-sm">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
    </div>
  )
}

export default SideBar; 