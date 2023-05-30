import { Input, CheckBox } from 'components/form'
import Platforms from 'components/Platforms'
import ButtonSubmit from './ButtonSubmit'

export default function Step0 () {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    console.log(data)
  }

  return (
    <div className="bg-white h-full flex">
      <div className="min-w-[400px] max-w-[400px] py-12 px-12 text-black flex flex-col justify-between">
        <div>
          <img
            className="w-40 mx-auto mb-10"
            src="/logo.png"
          />

          <h1 className="text-2xl text-center font-semibold mb-7">Sign In</h1>

          <form
            id="sign_in"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 mb-8">
              <Input
                placeholder="Username"
                name="username"
              />

              <Input
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>

            <Platforms />

            <CheckBox className="mt-4" name="stay_signed">Stay signed in</CheckBox>
          </form>
        </div>

        <div className="flex flex-col gap-20 items-center">
          <ButtonSubmit />

          <div className="uppercase flex flex-col text-center font-bold text-xs text-[#979797]">
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
