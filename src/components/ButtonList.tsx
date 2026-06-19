import Button from "./Button";

const categories = ["All", "Cricket","Movies","News", "Podcasts","All", "Cricket","Movies","News", "Podcasts","All", "Cricket","Movies","News", "Podcasts","All", "Cricket","Movies","News", "Podcasts"]

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto max-w-full">
      {
        categories.map((category , index) => (
          <Button key={index} name={category}/>
        ))
      }
    </div>
  )
}

export default ButtonList;