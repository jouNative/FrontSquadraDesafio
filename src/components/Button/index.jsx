import { Container } from "./styles"

export const Button = ({text,...rest}) => {
  return (
    <Container {...rest}>{text}</Container >
  )
}