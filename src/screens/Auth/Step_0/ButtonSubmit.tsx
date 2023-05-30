import { HiArrowRight } from 'react-icons/hi'

export default function ButtonSubmit () {
  return (
    <button
      className="w-16 h-16 rounded-2xl border-2 border-stone-300 grid place-items-center"
      form="sign_in"
    >
      <HiArrowRight
        className="w-7 h-7 text-stone-300"
      />
    </button>
  )
}
