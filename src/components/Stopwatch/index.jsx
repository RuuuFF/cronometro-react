import useStopwatch from "../../hooks/useStopwatch"

import { Container } from "./styles"
import Display from "../Display"
import Input from "../Input"
import Buttons from "../Buttons"


export default function Stopwatch() {
  const {
    timer,
    updateTime,
    start,
    pause,
    reset,
    format,
  } = useStopwatch()

  const { display, hours, minutes, seconds } = timer

  return (
    <Container>
      <div>
        <Display display={display} />
        <Input
          times={{ hours, minutes, seconds }}
          functions={{ updateTime, format }}
        />
        <Buttons buttons={{ start, pause, reset }} />
      </div>
    </Container>
  )
}