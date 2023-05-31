import { CheckBox, Input } from 'components/form'
import Platforms from 'components/Platforms'

interface Props {
  register: (name: string) => any
  errors: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export default function Top ({
  register,
  errors,
  onSubmit
}: Props) {
  return (
    <div>
      <img
        className="w-40 mx-auto mb-10"
        src="/logo.png"
      />

      <h1 className="text-2xl text-center font-bold mb-7">Sign In</h1>

      <form
        id="sign_in"
        onSubmit={onSubmit}
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

  )
}
