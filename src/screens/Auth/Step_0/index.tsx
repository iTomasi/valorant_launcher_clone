import { Input, CheckBox } from 'components/form'
import Platforms from 'components/Platforms'
import ButtonSubmit from './ButtonSubmit'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodSignIn } from 'utils/zod'

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
      <div className="min-w-[400px] max-w-[400px] py-12 px-12 text-black flex flex-col justify-between">
        <div>
          <img
            className="w-40 mx-auto mb-10"
            src="/logo.png"
          />

          <h1 className="text-2xl text-center font-bold mb-7">Sign In</h1>

          <form
            id="sign_in"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="flex flex-col gap-4 mb-8">
              <Input
                placeholder="Username"
                {...register('username')}
                errorMessage={errors.username?.message as string}
              />

              <Input
                type="password"
                placeholder="Password"
                {...register('password')}
                errorMessage={errors.password?.message as string}
              />
            </div>

            <Platforms />

            <CheckBox className="mt-4" name="stay_signed">Stay signed in</CheckBox>
          </form>
        </div>

        <div className="flex flex-col gap-16 items-center">
          <ButtonSubmit isValid={isValid} />

          <div className="uppercase flex flex-col text-center font-extrabold text-[11px] text-stone-400">
            <a href="#">can{'\''}t sign in?</a>
            <a href="#">Create account</a>
          </div>
        </div>
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
