import { useState, useRef } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

interface Props {
  type?: 'text' | 'password'
  placeholder: string
  name: string
}

const iconClassName = 'w-5 h-5'

export default function Input ({
  type = 'text',
  placeholder,
  name
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleToggleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value !== '') {
      setIsFocus(true)
      return
    }

    setIsFocus((prev) => !prev)
  }

  const handleMouseDownTogglePassword = () => {
    setShowPassword((prev) => !prev)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  return (
    <label className="block bg-[#EDEDED] hover:bg-gray-200 focus-within:hover:bg-white transition-all rounded relative flex focus-within:bg-white focus-within:ring-2 focus-within:ring-black">
      <input
        ref={inputRef}
        className="peer pt-5 pb-2 px-2 bg-transparent focus:outline-none w-full font-semibold"
        type={showPassword ? 'text' : type}
        name={name}
        onFocus={handleToggleFocus}
        onBlur={handleToggleFocus}
        autoComplete="off"
      />

      <span className={`uppercase text-[#979797] font-bold absolute transition-all ${isFocus ? 'left-2 top-1 text-[9px]' : 'left-4 top-1/2 -translate-y-1/2 text-xs'}`}>{placeholder}</span>

      {
        (type === 'password' && isFocus) && (
          <button
            className="min-w-[3rem] max-w-[3rem] place-items-center hidden peer-focus:grid"
            type="button"
            onMouseDown={handleMouseDownTogglePassword}
          >
            {
              showPassword
                ? <HiEyeSlash className={iconClassName} />
                : <HiEye className={iconClassName} />
            }
          </button>
        )
      }
    </label>
  )
}
