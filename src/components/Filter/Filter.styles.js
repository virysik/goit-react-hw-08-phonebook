import styled from '@emotion/styled'

export const Input = styled.input`
  min-width: 478px;
  height: 40px;
  padding: 8px 10px;
  margin-bottom: 50px;
  font-size: 24px;
  border: 2px solid #000000;
  border-radius: 4px;
  transition: border 250ms ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid #3f51b5;
  }
`
export const Label = styled.label`
  color: #000000;
  font-size: 20px;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 500px;
`
