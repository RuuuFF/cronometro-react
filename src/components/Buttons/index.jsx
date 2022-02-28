export default function Buttons(props) {
  const { start, pause, reset } = props.buttons

  return (
    <div>
      <button onClick={start}>Iniciar</button>
      <button onClick={pause}>Parar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  )
}