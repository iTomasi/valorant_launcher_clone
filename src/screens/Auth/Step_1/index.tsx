import Banner from './Banner'
import ButtonPlay from './ButtonPlay'
import Bottom from './Bottom'
import Header from './Header'

interface Props {
  showHeader: boolean
  bottomHeader: number
}

export default function Step1 ({
  showHeader,
  bottomHeader
}: Props) {
  return (
    <div className="bg-stone-900 min-h-full text-white relative">
      <Header show={showHeader} bottom={bottomHeader} />
      <div className="h-[760px] mb-40">
        <Banner />

        <div className="h-[15%] bg-stone-800 flex items-center px-20">
          <ButtonPlay />
        </div>
      </div>

      <Bottom />
    </div>
  )
}
