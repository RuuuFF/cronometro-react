import Button from "./Button"
import { ButtonContainer } from "./styles"

export default function Buttons(props) {
  const { start, pause, reset } = props.buttons

  return (
    <ButtonContainer>
      <Button className={'play'} interaction={start} color="#3266CC" />
      <Button className={'pause'} interaction={pause} color="#3266CC" />
      <Button className={'refresh'} interaction={reset} />
    </ButtonContainer>
  )
}