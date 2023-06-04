interface Props {
  title: string
  children: React.ReactNode
}

export default function Description ({
  title,
  children
}: Props) {
  return (
    <div>
      <h5 className="text-stone-600 uppercase font-bold text-xs mb-1">{title}</h5>
      <p className="text-stone-300 font-semibold">{children}</p>
    </div>
  )
}
