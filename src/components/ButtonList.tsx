import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name='All' />
      <Button name='Cricket'/>
      <Button name='Movies' />
      <Button name='Kapil Sharma'/>
      <Button name='Diljit' />
      <Button name='Zakir'/>
    </div>
  )
}

export default ButtonList;