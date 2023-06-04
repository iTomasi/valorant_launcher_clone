import { HiPlay } from 'react-icons/hi2'

interface Props {
  size?: keyof typeof sizes
}

const sizes = {
  sm: {
    divIcon: 'w-9 h-9',
    divIcon2: 'w-8 h-8 group-hover:w-9 group-hover:h-9',
    icon: 'w-5 h-5',
    text: 'text-xl'
  },
  normal: {
    divIcon: 'w-11 h-11',
    divIcon2: 'w-10 h-10 group-hover:w-11 group-hover:w-11',
    icon: 'w-5 h-5',
    text: 'text-2xl'
  }
}

export default function ButtonPlay ({
  size = 'normal'
}: Props) {
  const theSize = sizes[size] ?? sizes.normal

  return (
    <button
      className="flex items-center gap-2 bg-green-800 py-2 pl-2 pr-7 rounded-2xl transition-all group shadow-[0px_10px_15px_-5px_rgba(254,83,94,0.7)] hover:shadow-[0px_0px_17px_5px_rgba(254,83,94,0.7)]"
      type="button"
      style={{
        background: 'linear-gradient(141deg, rgba(254,83,94,1) 0%, rgba(255,119,99,1) 100%)'
      }}
    >
      <div className={`${theSize.divIcon} grid place-items-center`}>
        <div className={`${theSize.divIcon2} transition-all bg-black grid place-items-center rounded-full`}>
          <HiPlay
            className={theSize.icon}
          />
        </div>
      </div>

      <span className={`font-bold ${theSize.text}`}>Play</span>

    </button>
  )
}
