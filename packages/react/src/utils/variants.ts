export function variants<T extends Config>(config: T, options?: VariantOptions) {
  const { baseClass = '' } = options || {}

  function getStringPropValue(config: Record<string, any>, prop: string) {
    if (typeof config[prop] === 'string') {
      return config[prop]
    } else if (typeof config.xs === 'object') {
      return config.xs[prop]
    }
  }

  function getObjectPropValue(config: Record<string, any>, prop: Record<string, any>, screen: string) {
    const screenConfig = config[screen]
    if (!screenConfig) return
    const value = prop[screen]
    if (screenConfig[value]) return screenConfig[value]
  }

  return function(props: InferProps<T>): string {
    const classes: string[] = baseClass ? [baseClass] : []
    const propKeys = Object.keys(props)

    for (const propKey of propKeys) {
      const prop = props[propKey]
      const configValue = config[propKey]

      if (typeof prop === 'string') {
        const value = getStringPropValue(configValue, prop)
        classes.push(value)
        continue
      }

      if (typeof prop !== 'object') continue

      const screenKeys = Object.keys(prop)

      for (const screen of screenKeys) {
        const value = getObjectPropValue(configValue, prop, screen)
        classes.push(value)
      }
    }

    return classes.join(' ')
  }
}

type Screen = 'xs' | 'sm' | 'md' | 'lg'

type SimpleVariant<T extends string> = { [K in T]: string }
type ResponsiveVariant<T extends string> = { [K in Screen]?: { [S in T]: string } }

type VariantValue<T> = T extends ResponsiveVariant<infer U>
  ? { [K in Screen]?: U } | U
  : T extends SimpleVariant<infer U>
    ? U
    : never

type Variant<T extends string> = SimpleVariant<T> | ResponsiveVariant<T>

type Config = { [K in string]: Variant<string> }

type InferProps<T extends Config> = {
  [K in keyof T]?: VariantValue<T[K]>
}

type VariantOptions = {
  baseClass: string
}
