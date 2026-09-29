import { useCallback, useEffect, useRef, useState } from 'react'

export function useTimeout(interval: number) {
  const [pending, setPending] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const stop = useCallback(() => {
    clearTimeout(timer.current)
    setPending(false)
  }, [])

  const start = useCallback(() => {
    clearTimeout(timer.current)
    setPending(true)
    timer.current = setTimeout(() => setPending(false), interval)
  }, [interval])

  useEffect(() => () => clearTimeout(timer.current), [])

  return { ready: !pending, start, stop }
}

export function useTimeoutFn(callback: () => void, interval: number) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  const timer = useRef<ReturnType<typeof setTimeout>>()

  const stop = useCallback(() => clearTimeout(timer.current), [])

  const start = useCallback(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => callbackRef.current(), interval)
  }, [interval])

  useEffect(() => () => clearTimeout(timer.current), [])

  return { start, stop }
}
