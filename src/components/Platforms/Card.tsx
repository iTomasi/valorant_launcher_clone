import React from 'react'
import type { IconType } from 'react-icons'

interface IOptions {
  borderColor: string
  backgroundColor: string
}

interface Props {
  icon: IconType
  options: IOptions
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Card ({
  icon: Icon,
  options: { backgroundColor, borderColor },
  onClick
}: Props) {
  return (
    <button
      className="w-full h-8 rounded-md items-center relative group"
      type="button"
      onClick={onClick}
      style={{
        background: backgroundColor,
        border: `2px solid ${borderColor}`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 cursor-pointer">

      </div>
      <Icon
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white"
      />
    </button>
  )
}
