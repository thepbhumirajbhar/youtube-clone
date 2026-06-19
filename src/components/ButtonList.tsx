import Button from "./Button";

const categories = ["All", "Cricket","Movies","News", "Podcasts"]

const ButtonList = () => {
  return (
    <div className="flex">
      {
        categories.map((category , index) => (
          <Button key={index} name={category}/>
        ))
      }
    </div>
  )
}

export default ButtonList;