import { IconProps } from 'phosphor-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any
export type TODO = ANY

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>
