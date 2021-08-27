import styled from '@emotion/styled'

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto 20px;
  padding: 10px;
`
export const Input = styled.input`
  min-width: 478px;
  height: 40px;
  padding: 8px 10px;
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
  margin-bottom: 30px;

  color: #000000;
  font-size: 20px;
  text-align: left;
`
