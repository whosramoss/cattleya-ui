export interface FieldProps {
  valid?: boolean,
  validated?: boolean,
  disabled?: boolean
}

export function useField(props: FieldProps) {
  return {
    valid: props.valid,
    validated: props.validated,
    disabled: props.disabled
  }
}
