import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/phonebook/phonebook-reducer'
import { Label, Input } from './Filter.styles'

function Filter() {
  const dispatch = useDispatch()

  return (
    <Label>
      Find contacts by name:
      <Input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        name="filter"
      ></Input>
    </Label>
  )
}

export default Filter
