// SOURCE: https://github.com/kentcdodds/bookshelf/blob/main/src/utils/hooks.js

import React from 'react'

function useSafeDispatch(dispatch: React.Dispatch<() => void>) {
  const mounted = React.useRef(false)
  React.useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  return React.useCallback((action) => (mounted.current ? dispatch(action) : void 0), [dispatch])
}

const defaultInitialState = { status: 'idle', data: null, error: null }

function useAsync<T>(
  initialState: Record<string, unknown> | null
): Record<string, unknown> & {
  data: T
  run: (promise: Promise<T>) => Promise<T>
  setData: (data: T) => void
} {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState,
  })
  const [{ status, data, error }, setState] = React.useReducer(
    (s: any, a: () => void) => ({ ...s, ...a }),
    initialStateRef.current
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = React.useCallback((data: T) => safeSetState({ data, status: 'resolved' }), [
    safeSetState,
  ])
  const setError = React.useCallback((error) => safeSetState({ error, status: 'rejected' }), [
    safeSetState,
  ])
  const reset = React.useCallback(() => safeSetState(initialStateRef.current), [safeSetState])

  const run = React.useCallback(
    (promise: Promise<T>) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        )
      }
      safeSetState({ status: 'pending' })
      return promise.then(
        (data: T) => {
          setData(data)
          return data
        },
        (error: any) => {
          setError(error)
          return Promise.reject(error)
        }
      )
    },
    [safeSetState, setData, setError]
  )

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

export { useAsync }
