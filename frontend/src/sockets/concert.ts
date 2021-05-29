import { ScoreLocation } from 'models'
import { logError } from 'utils/socketHelpers'
import { getSocket } from './startup'

const events = {
  join: 'concert:join',
  suite: 'concert:suite',
  location: 'concert:location',
  startingMeasure: 'concert:startingMeasure',
  leave: 'concert:leave',
}

export const subscribeToConcert = (
  roomId: string,
  {
    onConductorPageChange,
    onSuiteChange,
  }: {
    onSuiteChange: () => void
    onConductorPageChange: (error: null, value: ScoreLocation) => void
  }
) => {
  getSocket()?.emit(events.join, roomId)

  getSocket()?.on(events.suite, () => {
    return onSuiteChange()
  })

  getSocket()?.on(events.location, (scoreLocation) => {
    return onConductorPageChange(null, scoreLocation)
  })
}

export const emitSuiteChange = (roomId: string, suiteId: string) => {
  getSocket()?.emit(events.suite, { suiteId, roomId }, logError)
}

export const emitConductorPageChange = (value: ScoreLocation) => {
  getSocket()?.emit(events.location, value)
}

export const emitConductorStartingMeasure = (measureNumber: number) => {
  getSocket()?.emit(events.startingMeasure, measureNumber)
}

export const unsubscribeToRoomConcert = (roomId: string) => {
  Object.values(events).forEach((event) => getSocket()?.off(event))
  getSocket()?.emit(events.leave, roomId)
}
