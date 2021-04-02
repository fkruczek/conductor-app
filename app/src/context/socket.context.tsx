// import { ChildProps } from 'postcss'
// import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
// // import { io } from 'socket.io-client'

// // const socket = io()

// const SocketContext = React.createContext(0)
// SocketContext.displayName = 'SocketContext'

// // export const addClientToQueue = () => {
// //   socket.emit('addClientIdToQueue')
// // }

// // export const getQueueLength = () => {
// //   socket.emit('queueLengthToSocket')
// // }

// // export const removeUserFromQueue = () => {
// //   socket.emit('removeUserFromQueue')
// // }

// // export const socketEvents = ({ setValue }) => {
// //   socket.on('queueLength', ({ queueLength }) => {
// //     setValue((state) => {
// //       return { ...state, queueLength }
// //     })
// //   })

// //   socket.on('positionInLine', ({ positionInLine }) => {
// //     setValue((state) => {
// //       return { ...state, positionInLine }
// //     })
// //   })
// // }

// export const SocketProvider = (props: { children: ReactNode }) => {
//   //   const [socket, setSocket] = useState()

//   // const initSockets = React.useCallback(({ setValue }) => {
//   //   socketEvents({ setValue })
//   //   getQueueLength()
//   // }, [])

//   // const [value, setValue] = useState({
//   //   queueLength: 0,
//   //   positionInLine: 0,
//   // })

//   // useEffect(() => initSockets({ setValue }), [initSockets])

//   //   useEffect(() => {
//   //     setSocket(io())
//   //     return () => {
//   //       cleanup
//   //     }
//   //   }, [])

//   return <SocketContext.Provider value={1} {...props} />
// }
