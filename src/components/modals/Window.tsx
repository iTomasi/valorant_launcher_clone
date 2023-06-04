interface Props {
  className?: string
  background: string
  children: React.ReactNode
  onScroll: React.MouseEventHandler<HTMLDivElement>
}

export default function Window ({
  className = '',
  background,
  children,
  onScroll
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
      <div className="w-full max-h-screen overflow-y-auto">
        <div className={`w-full max-w-screen-xl mx-auto h-[760px] overflow-y-auto bg-white text-black ${className}`} onScroll={onScroll}>
          {children}
        </div>
      </div>
    </div>
  )
}
