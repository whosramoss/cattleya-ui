export type ColorMap = {
  name: string,
  description: string,
  variable?: string,
  value: string
}[]

export function toArgs(colorMap: ColorMap) {
  return colorMap.reduce((object, color) => {
    const { name, value } = color
    object[name] = value
    return object
  }, {} as { [key: string]: any })
}

export function toArgTypes(colorMap: ColorMap, options = { control: 'text' }) {
  return colorMap.reduce((object, color) => {
    const { name, description, variable, value } = color
    object[name] = {
      name,
      description,
      control: { type: options.control },
      table: {
        defaultValue: { summary: value },
        type: { summary: variable }
      }
    }
    return object
  }, {} as { [key: string]: any })
}
