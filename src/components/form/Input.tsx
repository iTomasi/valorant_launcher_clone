import { useState, useRef } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'
import { BsExclamationDiamondFill } from 'react-icons/bs'

interface Props {
  type?: 'text' | 'password'
  placeholder: string
  name: string
  errorMessage?: string
}

const iconClassName = 'w-5 h-5'

export default function Input ({
  type = 'text',
  placeholder,
  name,
  errorMessage
}: Props) {
  const hasError = typeof errorMessage === 'string' && errorMessage !== ''
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
    <div>
      <label className={`block transition-all rounded relative flex ring-2  ${hasError ? 'ring-[#E6B7EB] bg-[rgba(190,41,204,0.1)]' : 'bg-[#EDEDED] hover:bg-gray-200 focus-within:bg-white focus-within:hover:bg-white ring-transparent focus-within:ring-black'}`}>
        <input
          ref={inputRef}
          className="peer pt-5 pb-2 px-2 bg-transparent focus:outline-none w-full font-semibold"
          type={showPassword ? 'text' : type}
          name={name}
          onFocus={handleToggleFocus}
          onBlur={handleToggleFocus}
          autoComplete="off"
        />

        <span className={`uppercase font-bold absolute transition-all ${hasError ? 'text-[#be29cc]' : 'text-[#979797]'} ${isFocus ? 'left-2 top-0 text-[9px]' : 'left-4 top-1/2 -translate-y-1/2 text-xs'}`}>{placeholder}</span>

        {
          (type === 'password' && isFocus) && (
            <button
              className="min-w-[3rem] max-w-[3rem] place-items-center hidden peer-focus:grid"
              type="button"
              onMouseDown={handleMouseDownTogglePassword}
            >
              {
                showPassword
                  ? <HiEye className={iconClassName} />
                  : <HiEyeSlash className={iconClassName} />
              }
            </button>
          )
        }
      </label>

      {
        hasError && (
          <div className="mt-2 text-[#be29cc] flex items-center gap-2">
            <BsExclamationDiamondFill
              className="w-4 h-4"
            />

            <span className="font-bold">{errorMessage}</span>
          </div>
        )
      }

    </div>
  )
}
