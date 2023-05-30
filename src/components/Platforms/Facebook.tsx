import Card from './Card'
import { MdFacebook } from 'react-icons/md'

export default function Facebook () {
  const handleClick = () => {
    alert('No available')
  }

  return (
    <Card
      icon={MdFacebook}
      onClick={handleClick}
      options={{
        backgroundColor: '#1977F2',
        borderColor: '#166BD9'
      }}
    />
  )
}
