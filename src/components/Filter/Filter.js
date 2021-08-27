import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/contacts/contacts-slice'
import { Label, Input, Wrapper } from './Filter.styles'

function Filter() {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Label>
        Find contacts by name or number:
        <Input
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          type="text"
          name="filter"
        ></Input>
      </Label>
    </Wrapper>
  )
}

export default Filter
