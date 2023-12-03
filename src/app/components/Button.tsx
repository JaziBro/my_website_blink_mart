import Image from "next/image"

type buttonIProps = {
  type: 'button' |'submit',
  title: string 
  icon?: string,
}

const Button = ({type, title, icon}: buttonIProps) => {
  return (
    <button 
    className={`flex items-center justify-center rounded-full border`}
    type = {type}>
     {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label className="bold-18"> {title} </label>
    </button>
  )
}

export default Button 