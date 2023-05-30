import Card from './Card'
import { IoLogoApple } from 'react-icons/io'

export default function Apple () {
  const handleClick = () => {
    alert('No available')
  }

  return (
    <Card
      icon={IoLogoApple}
      onClick={handleClick}
      options={{
        borderColor: '#000000',
        backgroundColor: '#000000'
      }}
    />
  )
}
