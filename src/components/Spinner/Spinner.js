import Loader from 'react-loader-spinner'
import { Div } from './Spinner.styles'

export default function Spinner() {
  return (
    <Div>
      <Loader
        type="ThreeDots"
        color="#3F51B5"
        height={100}
        width={100}
        timeout={1000}
      />
    </Div>
  )
}
