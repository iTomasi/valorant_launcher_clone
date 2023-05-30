import { HiArrowRight } from 'react-icons/hi'

interface Props {
  className?: string
}

export default function ButtonSubmit ({
  className = ''
}: Props) {
  return (
    <button
      className={`w-16 h-16 rounded-2xl border-2 border-stone-300 grid place-items-center ${className}`}
      form="sign_in"
    >
      <HiArrowRight
        className="w-7 h-7 text-stone-300"
      />
    </button>
  )
}
