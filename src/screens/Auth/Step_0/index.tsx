import ButtonSubmit from './ButtonSubmit'
import Top from './Top'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodSignIn } from 'utils/zod'
import Loading from './Loading'
import wait from 'utils/wait'

interface Props {
  setStep: (value: number | ((prev: number) => number)) => void
}

export default function Step0 ({
  setStep
}: Props) {
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
    resolver: zodResolver(zodSignIn),
    mode: 'onTouched'
  })

  const handleOnSubmit = async (values: any) => {
    await wait(2000)
    console.log({ values })
    setStep(1)
  }

  return (
    <div className="h-full flex">
      <div className="min-w-[400px] max-w-[400px] p-12 flex flex-col justify-between relative">
        <Top
          onSubmit={handleSubmit(handleOnSubmit)}
          errors={errors}
          register={register}
        />

        <div className="flex flex-col gap-16 items-center">
          <ButtonSubmit isValid={isValid} />

          <div className="uppercase flex flex-col text-center font-extrabold text-[11px] text-stone-400">
            <a href="#">can{'\''}t sign in?</a>
            <a href="#">Create account</a>
          </div>
        </div>

        {
          isSubmitting && (
            <Loading />
          )
        }
      </div>

      <div
        className="w-full"
        style={{
          background: 'url("/auth_sign_in.jpeg")',
          backgroundPosition: 'right',
          backgroundSize: 'cover'
        }}
      ></div>
    </div>
  )
}
