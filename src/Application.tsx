import Nullstack, { NullstackClientContext } from 'nullstack'

import '../tailwind.css'
import AlertDocs from './components/AlertDocs'
import ButtonDocs from './components/ButtonDocs'
import DropdownDocs from './components/DropdownDocs'
import ModalDocs from './components/ModalDocs'
import SwapDocs from './components/SwapDocs'

class Application extends Nullstack {

  prepare({ page }: NullstackClientContext) {
    page.locale = 'pt-BR'
  }

  render({ router }: NullstackClientContext) {
    const current = router.path

    return (
      <body class="bg-zinc-900 text-white">
        <div class=" flex flex-col h-screen w-screen">
          <div class="flex px-4 bg-zinc-950 py-2">
            <span class="text-4xl font-bold">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">NullDaisy</span>
            </span>
          </div>
          <div class="flex grow gap-2 pl-4 ">
            <ul class="flex flex-col gap-4 pr-8 pt-4">
              <li class={current === '/button' ? 'hover:underline text-emerald-500' : 'hover:underline'}>
                <a href="/button">Button</a>
              </li>
              <li class={current === '/swap' ? 'hover:underline text-emerald-500' : 'hover:underline'}>
                <a href="/swap">Swap</a>
              </li>
              <li class={current === '/dropdown' ? 'hover:underline text-emerald-500' : 'hover:underline'}>
                <a href="/dropdown">Dropdown</a>
              </li>
              <li class={current === '/modal' ? 'hover:underline text-emerald-500' : 'hover:underline'}>
                <a href="/modal">Modal</a>
              </li>
              <li class={current === '/alert' ? 'hover:underline text-emerald-500' : 'hover:underline'}>
                <a href="/alert">Alert</a>
              </li>
            </ul>
            <div class="flex overscroll-contain overflow-y-auto h-[90vh] grow w-full">
              <ButtonDocs route="/button" />
              <SwapDocs route="/swap" />
              <DropdownDocs route="/dropdown" />
              <ModalDocs route="/modal" />
              <AlertDocs route="/alert" />
            </div>
          </div>
        </div>
      </body>
    )
  }

}

export default Application
