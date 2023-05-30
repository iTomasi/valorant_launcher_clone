import Facebook from './Facebook'
import Google from './Google'
import Apple from './Apple'
import Xbox from './Xbox'

export default function Platforms () {
  return (
    <div className="flex gap-2">
      <Facebook />
      <Google />
      <Apple />
      <Xbox />
    </div>
  )
}
