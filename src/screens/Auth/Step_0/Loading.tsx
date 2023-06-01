const borderStyle = '5px solid'
const borderPrimaryColor = '#bc252a'
const borderSecondaryColor = '#222222'

export default function Loading () {
  return (
    <div className="absolute right-0 left-0 top-0 h-[calc(100%-7rem)] grid place-items-center bg-white">
      <div
        className="w-20 h-20 rounded-full animate-spin"
        style={{
          borderRight: `${borderStyle} ${borderSecondaryColor}`,
          borderBottom: `${borderStyle} ${borderSecondaryColor}`,
          borderLeft: `${borderStyle} ${borderSecondaryColor}`,
          borderTop: `${borderStyle} ${borderPrimaryColor}`
        }}
      />
    </div>
  )
}
