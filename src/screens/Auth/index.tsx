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

  const Step = steps[step as keyof typeof steps] ?? steps[0]

  return (
    <ModalWindow
      background="url('/auth_bg.jpg')"
    >
      <Step setStep={setStep} />
    </ModalWindow>
  )
}
