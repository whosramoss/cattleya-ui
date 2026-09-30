import {
  cloneElement,
  forwardRef,
  isValidElement,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  type TouchEvent
} from 'react'
import { Primitive } from '@/utils/primitive'
import { variants } from '@/utils/variants'
import { cn } from '@/utils/tw-merge'
import { useTimeout } from '@/hooks/use-timeout'
import { theme } from './theme'
import type { ButtonProps } from './types'

const PRESSING_TIMEOUT_MS = 150
const cnButton = variants(theme.variants, { baseClass: theme.baseClass })

function wrapContent(children: ReactNode, loading?: boolean) {
  return (
    <span className={cn('button-wrapper', loading && 'invisible')}>
      {children}
    </span>
  )
}

function wrapChild(children: ReactNode, loading?: boolean) {
  if (!isValidElement<{ children?: ReactNode }>(children)) {
    return wrapContent(children, loading)
  }

  return cloneElement(children, undefined, wrapContent(children.props.children, loading))
}

function withAction<E>(action: () => void, handler?: (event: E) => void) {
  return (event: E) => {
    action()
    handler?.(event)
  }
}

function buttonFlags(disabled?: boolean, loading?: boolean, pressed?: boolean) {
  const isDisabled = Boolean(disabled || loading)
  return {
    isDisabled,
    disabledAttr: isDisabled || undefined,
    loadingAttr: loading || undefined,
    pressedAttr: pressed || undefined
  }
}

function buttonChildren(asChild: boolean, children: ReactNode, loading?: boolean) {
  return asChild ? wrapChild(children, loading) : wrapContent(children, loading)
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  function Button({
    as = 'button',
    asChild = false,
    variant = 'primary',
    className,
    disabled,
    loading,
    children,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    ...props
  }, ref) {
    const [mousedown, setMousedown] = useState(false)
    const { ready, start } = useTimeout(PRESSING_TIMEOUT_MS)
    const flags = buttonFlags(disabled, loading, !ready || mousedown)

    function press() {
      setMousedown(true)
      start()
    }

    function release() {
      setMousedown(false)
    }

    return (
      <Primitive
        ref={ref}
        as={as}
        asChild={asChild}
        className={cn(cnButton({ variant }), className)}
        style={{ '--button-pressing-timeout': `${PRESSING_TIMEOUT_MS}ms` } as CSSProperties}
        disabled={flags.disabledAttr}
        data-disabled={flags.disabledAttr}
        data-loading={flags.loadingAttr}
        data-pressed={flags.pressedAttr}
        aria-busy={flags.loadingAttr}
        aria-label={loading && typeof children === 'string' ? children : undefined}
        onMouseDown={withAction<MouseEvent<HTMLElement>>(press, onMouseDown)}
        onMouseUp={withAction<MouseEvent<HTMLElement>>(release, onMouseUp)}
        onMouseLeave={withAction<MouseEvent<HTMLElement>>(release, onMouseLeave)}
        onTouchStart={withAction<TouchEvent<HTMLElement>>(press, onTouchStart)}
        onTouchEnd={withAction<TouchEvent<HTMLElement>>(release, onTouchEnd)}
        {...props}
      >
        {buttonChildren(asChild, children, loading)}
      </Primitive>
    )
  }
)
