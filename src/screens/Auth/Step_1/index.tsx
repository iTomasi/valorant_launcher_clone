import Banner from './Banner'
import ButtonPlay from './ButtonPlay'

export default function Step1 () {
  return (
    <div className="bg-stone-900 min-h-full text-white">
      <div className="h-[760px] mb-8">
        <Banner />

        <div className="h-[15%] bg-stone-800 flex items-center px-20">
          <ButtonPlay />
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores molestiae, dignissimos sunt neque ducimus nesciunt eveniet nulla ex voluptas.
      </div>
    </div>
  )
}
