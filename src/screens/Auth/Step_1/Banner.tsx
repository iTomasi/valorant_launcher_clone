export default function Banner () {
  return (
    <div className="h-[85%] relative">
      <img
        className="w-full h-full object-cover object-center"
        src="/auth_sign_in.jpeg"
        alt="valorant"
      />

      <img
        className="absolute top-4 w-48 left-1/2 -translate-x-1/2"
        src="/valorant_text.png"
      />
    </div>
  )
}
