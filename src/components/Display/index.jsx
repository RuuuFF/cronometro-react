import { DisplayContainer } from "./styles"

export default function Display(props) {
  return (
    <DisplayContainer>
      <h1>{props.display}</h1>
    </DisplayContainer>
  )
}