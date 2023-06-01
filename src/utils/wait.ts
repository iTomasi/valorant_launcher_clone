const wait = (ms: number) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
)

export default wait
