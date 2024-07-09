import { NotifyVariants } from 'nulldaisy'

type props = {
  id?: string
  position?: NotifyVariants['position']
  timeout?: number
}

const open = 'animate-normal'
const close = 'animate-alternate-reverse'
const handlePositions = {
  left: 'animate-fade-right',
  right: 'animate-fade-left',
  top: 'animate-fade-down',
  bottom: 'animate-fade-up',
}
export const getOpenClass = ({ position }: props) => {
  const [x, y] = position.split('-')
  const pos = y === 'center' ? x : y
  // return ''
  return `${handlePositions[pos]} ${open} animate-once animate-duration-500 animate-ease-in-out`
}

export const setClose = ({ id, timeout, position }: props) => {
  setTimeout(() => {
    closeNotify({ id, timeout, position })
  }, timeout - 100)
}

export const closeNotify = ({ id, position }: props) => {
  const [x, y] = position.split('-')
  const pos = y === 'center' ? x : y
  document.getElementById(id)?.classList.remove(handlePositions[pos])
  document.getElementById(id)?.classList.remove(open)
  document.getElementById(id)?.classList.remove('animate-duration-500')
  document.getElementById(id)?.classList.remove('animate-ease-in-out')
  document.getElementById(id)?.classList.remove('animate-once')
  setTimeout(() => {
    document.getElementById(id)?.classList.add(handlePositions[pos])
    document.getElementById(id)?.classList.add('animate-duration-500')
    document.getElementById(id)?.classList.add('animate-ease-in-out')
    document.getElementById(id)?.classList.add('animate-once')
    document.getElementById(id)?.classList.add(close)
  }, 100)
}
