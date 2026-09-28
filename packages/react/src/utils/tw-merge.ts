import { extendTailwindMerge, type ClassNameValue } from 'tailwind-merge'

type AdditionalUtilities =
  'font-size' | 'font-weight' | 'line-height' | 'corner-radius' |
  'title' | 'body' | 'label' | 'price' | 'surface' |
  'badge-variant' | 'card-variant'

export const twMerge = extendTailwindMerge<AdditionalUtilities>({
  extend: {
    classGroups: {
      'font-size': [(value: string) => value.startsWith('font-size')],
      'font-weight': [(value: string) => value.startsWith('font-weight')],
      'line-height': [(value: string) => value.startsWith('line-height')],
      'corner-radius': [(value: string) => value.startsWith('corner-radius')],
      'title': [(value: string) => value.startsWith('title')],
      'body': [(value: string) => value.startsWith('body')],
      'label': [(value: string) => value.startsWith('label')],
      'price': [(value: string) => value.startsWith('price')],
      'surface': [(value: string) => value.startsWith('surface')],
      'badge-variant': [
        'badge-default',
        'badge-primary',
        'badge-discount',
        'badge-cashback',
        'badge-positive',
        'badge-negative',
        'badge-neutral',
        'badge-verified'
      ],
      'card-variant': ['card-default', 'card-secondary', 'card-tertiary']
    },
    conflictingClassGroups: {
      'title': ['body', 'label', 'price'],
      'body': ['title', 'label', 'price'],
      'label': ['title', 'body', 'price'],
      'price': ['title', 'body', 'label'],
      'surface': ['bg-color'],
      'size': ['w', 'h'],
      'w': ['size'],
      'h': ['size']
    }
  }
})

export function cn(...classes: ClassNameValue[]) {
  return twMerge(classes)
}
