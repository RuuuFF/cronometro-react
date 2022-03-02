import { useRef } from "react"

export default function Input(props) {
  const {
    value,
    type,
    format,
    updateTime,
    max = 59,
  } = props.payload

  const inputRef = useRef(null)

  function focus(event) {
    event && event.preventDefault()
    inputRef.current.focus()
  }

  function update(sum, max) {
    updateTime({
      target: { value: value + sum }
    }, type, max)

    focus()
  }

  return (
    <div className="wrapper">
      <div className="input-set">
        <button
          onClick={() => update(1, max)}
          onMouseDown={event => focus(event)}
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>

        <input
          type="number"
          value={format(value)}
          onChange={event => updateTime(event, type, max)}
          ref={inputRef} />

        <button
          onClick={() => update(-1, max)}
          onMouseDown={event => focus(event)}
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </div >
  )
}