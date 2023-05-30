import { Input } from 'components/form'
import Platforms from 'components/Platforms'

export default function Step0 () {
  return (
    <div className="bg-white h-full flex">
      <div className="min-w-[400px] max-w-[400px] pt-12 px-12 text-black">
        <img
          className="w-40 mx-auto mb-10"
          src="/logo.png"
        />

        <h1 className="text-2xl text-center font-semibold mb-7">Sign In</h1>

        <form className="flex flex-col gap-4 mb-4">
          <Input
            placeholder="Username"
            name="username"
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
          />
        </form>

        <Platforms />
      </div>

      <div className="bg-yellow-500 w-full bg-stone-900"></div>
    </div>
  )
}
