import { useState, useEffect } from 'react'
import ButtonPlay from './ButtonPlay'

interface Props {
  show: boolean
  bottom: number
}

export default function Header ({
  show,
  bottom
}: Props) {
  const [hidden, setHidden] = useState<boolean>(show)

  useEffect(() => {
    if (show) {
      setHidden(false)
      return
    }

    const timeout = setTimeout(() => {
      setHidden(true)
    }, 150)

    return () => {
      clearTimeout(timeout)
    }
  }, [show])
  return (
    <header
      className={`absolute right-0 h-20 left-0 bg-stone-800 px-20 flex items-center transition-all ease-linear ${show ? 'translate-y-0' : '-translate-y-[250px]'} ${hidden ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
      style={{
        bottom: `${bottom}px`
      }}
    >
      <ButtonPlay size="sm" />

      <img
        className="w-44 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/valorant_text.png"
      />
    </header>
  )
}
