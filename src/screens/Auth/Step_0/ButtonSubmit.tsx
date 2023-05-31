import { HiArrowRight } from 'react-icons/hi'

interface Props {
  isValid: boolean
}

export default function ButtonSubmit ({
  isValid
}: Props) {
  return (
    <button
      className={`w-16 h-16 rounded-2xl border-2 grid place-items-center ${isValid ? 'bg-[#bc252a] text-white border-transparent' : 'text-stone-300 border-stone-300 text-stone-300'}`}
      form="sign_in"
    >
      <HiArrowRight
        className="w-7 h-7"
      />
    </button>
  )
}
