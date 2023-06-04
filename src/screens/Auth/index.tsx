import { useState } from 'react'
import { ModalWindow } from 'components/modals'
import Step0 from './Step_0'
import Step1 from './Step_1'

const steps = {
  0: Step0,
  1: Step1
}

export default function Auth () {
  const [step, setStep] = useState<number>(0)
  const [showHeader, setShowHeader] = useState<boolean>(false)

  const Step = steps[step as keyof typeof steps] ?? steps[0]

  const handleOnScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget

    if (scrollTop < 760) {
      if (showHeader) setShowHeader(false)
    } else if (!showHeader) setShowHeader(true)
  }

  return (
    <ModalWindow
      background="url('/auth_bg.jpg')"
      onScroll={handleOnScroll}
    >
      <Step setStep={setStep} showHeader={showHeader} />
    </ModalWindow>
  )
}
