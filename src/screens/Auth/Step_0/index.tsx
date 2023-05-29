import { Input } from 'components/form'

export default function Step0 () {
  return (
    <div className="bg-white h-full flex">
      <div className="min-w-[400px] max-w-[400px] pt-10 px-12 text-black">
        <img
          className="w-40 mx-auto"
          src="/logo.png"
        />

        <form className="flex flex-col gap-4">
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
      </div>

      <div className="bg-yellow-500 w-full bg-stone-900"></div>
    </div>
  )
}
