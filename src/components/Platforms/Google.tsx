import Card from './Card'
import { FcGoogle } from 'react-icons/fc'

export default function Google () {
  const handleClick = () => {
    alert('No available')
  }

  return (
    <Card
      icon={FcGoogle}
      onClick={handleClick}
      options={{
        borderColor: '#EDEDED',
        backgroundColor: '#FFFFFF'
      }}
    />
  )
}
