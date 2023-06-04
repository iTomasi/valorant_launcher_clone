import ButtonPlay from './ButtonPlay'

export default function Header () {
  return (
    <header className="absolute right-0 bottom-[680px] h-20 left-0 bg-stone-800 px-20 flex items-center">
      <ButtonPlay size="sm" />

      <img
        className="w-44 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/valorant_text.png"
      />
    </header>
  )
}
