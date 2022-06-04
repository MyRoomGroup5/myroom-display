import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { ws } from '.'

const context = createContext<typeof ws | null>(null)

const useWs = () => useContext(context)!

const WsProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <context.Provider value={ws}>{children}</context.Provider>
}

export { WsProvider, useWs }
