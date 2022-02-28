export default function Inputs(props) {
  const { hours, minutes, seconds } = props.times
  const { updateTime, format } = props.functions

  return (
    <div>
      <div>
        <span>Horas: </span>
        <input
          type="number"
          value={format(hours)}
          onChange={event => updateTime(event, 'hours', 99)}
        />
      </div>
      <div>
        <span>Minutos: </span>
        <input
          type="number"
          value={format(minutes)}
          onChange={event => updateTime(event, 'minutes')}
        />
      </div>
      <div>
        <span>Segundos: </span>
        <input
          type="number"
          value={format(seconds)}
          onChange={event => updateTime(event, 'seconds')}
        />
      </div>
    </div>
  )
}