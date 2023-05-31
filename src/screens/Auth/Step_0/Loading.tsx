const borderStyle = '4px solid'
const borderColor = '#bc252a'

export default function Loading () {
  return (
    <div className="absolute right-0 left-0 top-0 h-[calc(100%-7rem)] grid place-items-center bg-white">
      <div className="w-20 h-20 rounded-full outline outline-stone-800">
        <div
          className="w-full h-full rounded-full animate-spin"
          style={{
            borderRight: `${borderStyle} transparent`,
            borderBottom: `${borderStyle} transparent`,
            borderLeft: `${borderStyle} transparent`,
            borderTop: `${borderStyle} ${borderColor}`
          }}
        >

        </div>

      </div>
    </div>
  )
}
