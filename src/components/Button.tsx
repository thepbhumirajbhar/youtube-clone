const Button = ({name}:{name:string}) => {
  return(
    <div> 
      <button className="m-2 px-2 bg-gray-300 rounded-md"> {name} </button>
    </div>
  )
}

export default Button;