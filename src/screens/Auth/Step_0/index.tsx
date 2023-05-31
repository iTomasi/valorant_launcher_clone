import ButtonSubmit from './ButtonSubmit'
import Top from './Top'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodSignIn } from 'utils/zod'
// import Loading from './Loading'

export default function Step0 () {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(zodSignIn),
    mode: 'onTouched'
  })

  const handleOnSubmit = (values: any) => {
    console.log({ values })
  }

  return (
    <div className="bg-white h-full flex">
      <div className="min-w-[400px] max-w-[400px] py-12 px-12 text-black flex flex-col justify-between relative">
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

        {/* <Loading /> */}
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
