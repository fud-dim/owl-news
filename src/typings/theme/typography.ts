// eslint-disable-next-line no-unused-vars
import * as CSS from 'csstype'

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline'

export type Typography = Partial<
  Record<Variant, CSS.Properties<number | string>>
>
