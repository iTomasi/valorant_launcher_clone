import type { IconType } from 'react-icons'

interface Props {
  icon: IconType
}

export default function Card ({
  icon: Icon
}: Props) {
  return (
    <button
      className="bg-blue-400"
      type="button"
    >
      <Icon
        className="w-5 h-5"
      />
    </button>
  )
}
