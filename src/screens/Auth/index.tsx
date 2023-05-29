import { ModalWindow } from 'components/modals'
import Step0 from './Step_0'

export default function Auth () {
  return (
    <ModalWindow
      background="url('/auth_bg.jpg')"
    >
      <Step0 />
    </ModalWindow>
  )
}
