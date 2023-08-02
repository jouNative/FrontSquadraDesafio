import styled from "styled-components"

export const Container = styled.button`
  width:  100%;
  height: 5px;
  border: 0;
  border-radius: 8px;
  background: #ff9902;
  color: #111;
  font-size: 20px ;
  font-weight: 700;
  margin-top: 32px;
  transition: filter 0.2s;
  &:hover {
      filter: brightness(0.8)
  }
`

