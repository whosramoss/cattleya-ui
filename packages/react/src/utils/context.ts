import { createContext as createReactContext, useContext, type Context, type Provider } from 'react'

export function createContext<T>(name = 'Context'): CreateContextReturn<T> {
  const context = createReactContext<T | undefined>(undefined)
  context.displayName = name

  function useRequiredContext() {
    const value = useContext(context)

    if (value === undefined) {
      throw new Error(`use${name} deve ser usado dentro de um provider de ${name}.`)
    }

    return value
  }

  return [context.Provider, useRequiredContext, context]
}

type CreateContextReturn<T> = [
  Provider<T | undefined>,
  () => T,
  Context<T | undefined>
]
