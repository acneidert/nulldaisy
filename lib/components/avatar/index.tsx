import Nullstack, { NullstackClientContext } from 'nullstack'

import { avatarGroupVariants, avatarVariants } from './styles'
import { AvatarGroupProps, AvatarProps } from './types'

export class Avatar extends Nullstack {

  static Group({children, class: klass}: AvatarGroupProps){
    return <div class={avatarGroupVariants({ class: klass })}>{children}</div>
  }

  render({ children, class: klass, offline, online, placeholder }: NullstackClientContext<AvatarProps>) {
    return <div class={avatarVariants({ class: klass, online, offline, placeholder })}> {children} </div>
  }

}
