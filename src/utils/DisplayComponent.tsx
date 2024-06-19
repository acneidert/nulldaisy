import Nullstack, { NullstackClientContext } from 'nullstack'

// import { HLJSApi } from 'highlight.js'
import slugify from 'slugify'

import Code from './Code'

type DisplayComponentProps = {
  name: string
  description?: string
  code: string
  states?: string
}

type tabs = 'preview' | 'code'

class DisplayComponent extends Nullstack<DisplayComponentProps> {

  active: tabs = 'preview'
  codeElement

  render({ children, name, description, code, states }: NullstackClientContext<DisplayComponentProps>) {
    return (
      <section class="flex flex-col gap-2 pt-4" id={slugify(name, { lower: true })}>
        <div class="flex  gap-1">
          <a class="text-emerald-500 hover:underline" href={`#${slugify(name, { lower: true })}`}>
            #
          </a>
          <h3 class="font-semibold text-base">{name}</h3>
        </div>
        {description && <p>{description}</p>}
        <ul class="flex gap-4">
          <li>
            <button
              class={this.active === 'preview' ? 'text-emerald-500 hover:underline' : 'hover:underline'}
              onclick={() => (this.active = 'preview')}
            >
              Preview
            </button>
          </li>
          <li>
            <button
              class={this.active === 'code' ? 'text-emerald-500 hover:underline' : 'hover:underline'}
              onclick={() => (this.active = 'code')}
            >
              Code
            </button>
          </li>
        </ul>
        {this.active === 'preview' && <div class="flex gap-4   p-4 rounded-lg bg-zinc-800">{children}</div>}
        {this.active === 'code' && (
          <Code name={name} class={'flex gap-4  p-4 rounded-lg bg-zinc-800'} code={code} states={states} />
        )}
      </section>
    )
  }

}

export default DisplayComponent
