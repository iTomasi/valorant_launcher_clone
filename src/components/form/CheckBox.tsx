interface Props {
  className?: string
  name: string
  children: React.ReactNode
}

export default function CheckBox ({
  className = '',
  name,
  children
}: Props) {
  return (
    <label className={`flex items-center gap-1.5 ${className}`}>
      <input
        type="checkbox"
        name={name}
      />

      <span className="font-semibold text-stone-700">
        {children}
      </span>
    </label>
  )
}
