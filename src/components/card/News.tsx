interface Props {
  imageUrl: string
  tag: string
  title: string
  size?: keyof typeof sizes
}

const sizes = {
  normal: 'w-56',
  lg: 'w-64',
  xl: 'w-72'
}

export default function News ({
  imageUrl,
  tag,
  title,
  size = 'normal'
}: Props) {
  const theSize = sizes[size] ?? sizes.normal

  return (
    <a className={`block bg-blue-400 h-28 relative rounded-lg overflow-hidden ${theSize}`} href="#">
      <img
        className="w-full h-full object-cover object-center"
        src={imageUrl}
        alt="new"
      />

      <div className="absolute inset-0 flex flex-col justify-between px-4 py-2">
        <span className="bg-white bg-opacity-40 max-w-max px-2 py-1 rounded-full uppercase text-stone-900 font-bold text-xs">{tag}</span>

        <h3 className="font-semibold">{title}</h3>

      </div>
    </a>
  )
}
