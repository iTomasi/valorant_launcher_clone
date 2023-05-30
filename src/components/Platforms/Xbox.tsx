import Card from './Card'
import { IoLogoXbox } from 'react-icons/io'

export default function Xbox () {
  const handleClick = () => {
    alert('No available')
  }

  return (
    <Card
      icon={IoLogoXbox}
      onClick={handleClick}
      options={{
        backgroundColor: '#0E7C10',
        borderColor: '#0E7C10'
      }}
    />
  )
}
