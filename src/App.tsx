import { useState, useEffect } from 'react'
import { AuthScreen } from 'screens'
import { MIN_WIDTH_REQUIRED } from 'config/consts'

export default function App () {
  const [screenX, setScreenX] = useState<number>(innerWidth)

  useEffect(() => {
    const handleOnResize = () => {
      setScreenX(innerWidth)
    }

    window.addEventListener('resize', handleOnResize)

    return () => {
      window.removeEventListener('resize', handleOnResize)
    }
  }, [screenX])

  if (screenX < MIN_WIDTH_REQUIRED) {
    return (
      <h3>MIN WIDTH Required: {MIN_WIDTH_REQUIRED}</h3>
    )
  }

  return (
    <div>
      <AuthScreen/>
    </div>
  )
}
