interface Props {
  className?: string
  background: string
  children: React.ReactNode
}

export default function Window ({
  className = '',
  background,
  children
}: Props) {
  return (
    <div
      className="fixed inset-0 grid place-items-center"
      style={{
        background,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-h-screen overflow-y-scroll">
        <div className={`w-full max-w-screen-xl mx-auto h-[760px] ${className}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
