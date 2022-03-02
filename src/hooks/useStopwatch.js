import { useState, useEffect } from "react"

const initialTimeState = {
  display: '00:00:00',
  isStarted: false,
  isPaused: false,
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

  function clearId() {
    clearInterval(timer.id)
    updateTimerState('id', 0)
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
      updateTimerState('isStarted', false)
    }

    updateDisplay()
  }

  function start() {
    if (!timer.isStarted || !timer.isPaused) {
      const { hours, minutes, seconds } = timer
      display = { hours, minutes, seconds }
    }

    if (timer.id && timer.isStarted) { return }

    updateTimerState('isStarted', true)
    updateTimerState('isPaused', false)
    updateTimerState('id', setInterval(clock, 1000))
  }

  function pause() {
    clearId()
    updateTimerState('isPaused', true)
  }

  function reset() {
    clearInterval(timer.id)
    setTimer(initialTimeState)
  }

  useEffect(() => {
    if (!timer.isStarted) {
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
  }, [timer.id])

  return {
    timer,
    updateTime,
    start,
    pause,
    reset,
    format,
  }
}