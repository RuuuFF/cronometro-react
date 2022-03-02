import { InputContainer } from "./styles"
import Input from "./Input"

export default function Inputs(props) {
  const { hours, minutes, seconds } = props.times
  const { updateTime, format } = props.functions

  return (
    <InputContainer>
      <Input payload={{
        type: 'hours',
        value: hours,
        format,
        updateTime,
        max: 99,
      }} />

      <span>:</span>

      <Input payload={{
        type: 'minutes',
        value: minutes,
        format,
        updateTime,
      }} />

      <span>:</span>

      <Input payload={{
        type: 'seconds',
        value: seconds,
        format,
        updateTime,
      }} />
    </InputContainer >
  )
}