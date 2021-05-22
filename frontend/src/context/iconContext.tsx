import { ReactNode } from 'react'
import { IconContext } from 'react-icons'

const IconProvider = (props: { children: ReactNode }) => (
  <IconContext.Provider value={{ color: '#FFFFFF' }} {...props} />
)

export { IconProvider }
