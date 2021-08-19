import Loader from 'react-loader-spinner'

export default function Spinner() {
  return (
    <Loader
      type="ThreeDots"
      color="#456173"
      height={100}
      width={100}
      timeout={1000}
    />
  )
}
