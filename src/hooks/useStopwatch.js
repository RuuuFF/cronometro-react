import { useState, useEffect } from "react"

const initialTimeState = {
  display: '00:00:00',
  isRunning: false,
  id: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

let display = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

function format(toFormat) {
  return String(toFormat).padStart(2, '0')
}

export default function useStopwatch() {
  const [timer, setTimer] = useState(initialTimeState)

  function updateTimerState(type, value) {
    setTimer(prevTimer => ({
      ...prevTimer,
      [type]: value,
    }))
  }

  function clearId() {
    clearInterval(timer.id)
    updateTimerState('id', 0)
    updateTimerState('isRunning', false)
  }

  function updateTime(event, time, max = 59) {
    const value = Number(event.target.value)

    if (value > max) {
      updateTimerState(time, 0)
    } else if (value < 0) {
      updateTimerState(time, max)
    } else {
      updateTimerState(time, value)
    }
  }

  function updateDisplay() {
    const value = [display.hours, display.minutes, display.seconds]
      .map(time => format(time)).join(':')

    updateTimerState('display', value)
  }

  function clock() {
    if (display.seconds > 0) {
      display.seconds -= 1
    } else if (display.minutes > 0) {
      display.minutes -= 1
      display.seconds = 59
    } else if (display.hours > 0) {
      display.hours -= 1
      display.minutes = 59
      display.seconds = 59
    }

    if (display.hours === 0 && display.minutes === 0 && display.seconds === 0) {
      clearId()
    }

    updateDisplay()
  }

  function start() {
    if (timer.isRunning) {
      const { hours, minutes, seconds } = timer
      display = { hours, minutes, seconds }
    }

    if (timer.id) { return }

    updateTimerState('id', setInterval(clock, 1000))
    updateTimerState('isRunning', true)
  }

  function pause() {
    clearId()
  }

  function reset() {
    clearId()
    setTimer(initialTimeState)
  }

  useEffect(() => {
    if (!timer.isRunning) {
      display = {
        hours: timer.hours,
        minutes: timer.minutes,
        seconds: timer.seconds,
      }

      updateDisplay()
    }
  }, [timer.hours, timer.minutes, timer.seconds])

  useEffect(() => {
    return () => clearInterval(timer.id)
  }, [])

  return {
    timer,
    updateTime,
    start,
    pause,
    reset,
    format,
  }
}