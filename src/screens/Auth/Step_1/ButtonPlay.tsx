import { HiPlay } from 'react-icons/hi2'

export default function ButtonPlay () {
  return (
    <button
      className="flex items-center gap-2 bg-green-800 py-2 pl-2 pr-7 rounded-2xl transition-all group shadow-[0px_10px_15px_-5px_rgba(254,83,94,0.7)] hover:shadow-[0px_0px_17px_5px_rgba(254,83,94,0.7)]"
      type="button"
      style={{
        background: 'linear-gradient(141deg, rgba(254,83,94,1) 0%, rgba(255,119,99,1) 100%)'
      }}
    >
      <div className="w-11 h-11 grid place-items-center">
        <div className="w-10 h-10 group-hover:w-11 group-hover:h-11 transition-all bg-black grid place-items-center rounded-full">
          <HiPlay
            className="w-5 h-5"
          />
        </div>
      </div>

      <span className="text-2xl font-bold">Play</span>

    </button>
  )
}
