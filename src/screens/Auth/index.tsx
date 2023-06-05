import { useState } from 'react'
import { ModalWindow } from 'components/modals'
import Step0 from './Step_0'
import Step1 from './Step_1'

const steps = {
  0: Step0,
  1: Step1
}

const bottomMargin = 80

export default function Auth () {
  const [step, setStep] = useState<number>(0)
  const [showHeader, setShowHeader] = useState<boolean>(false)
  const [bottomHeader, setBottomHeader] = useState<number>(680)

  const Step = steps[step as keyof typeof steps] ?? steps[0]

  const handleOnScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const { scrollTop, offsetHeight, scrollHeight } = e.currentTarget

    if (scrollTop < 760) {
      if (showHeader) setShowHeader(false)
      return
    }

    const value = scrollHeight - offsetHeight - scrollTop

    setBottomHeader((offsetHeight - bottomMargin) + value)

    if (!showHeader) setShowHeader(true)
  }

  return (
    <ModalWindow
      background="url('/auth_bg.jpg')"
      onScroll={handleOnScroll}
    >
      <Step setStep={setStep} showHeader={showHeader} bottomHeader={bottomHeader} />
    </ModalWindow>
  )
}
