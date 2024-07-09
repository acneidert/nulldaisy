import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import Code from './Code'
import InputSpan from './components/InputSpan'

export type Props = Record<string, { value: any; description?: string; options?: { name: string; value: any }[] }>

type SandboxProps = {
  element: any
  props?: Props
}

declare function Props(): NullstackNode

declare function ElementCode({ el }: { el: any }): NullstackNode

class Sandbox extends Nullstack<SandboxProps> {

  props: Props = {}
  isShowedCode = false

  initiate(context: NullstackClientContext<SandboxProps>) {
    this.props = context.props
  }

  handleSpanChange({ data, event }) {
    event.preventDefault()
    this.props[data.key].value = event.srcElement.innerText
  }

  renderProps() {
    return (
      <div class="flex flex-col gap-2 bg-zinc-800 p-4 rounded-lg">
        {Object.entries(this.props).map(([key, { value, options, description }]) => {
          return (
            <p key={key}>
              const <strong>{key}</strong> =
              {options && options.length > 0 && (
                <>
                  <select class="bg-transparent ring-0 focus:ring-1 outline-0" bind={this.props[key].value}>
                    {options.map((option) => (
                      <option
                        class="bg-transparent ring-0 focus:ring-1 outline-0"
                        key={option.value}
                        value={option.value}
                      >
                        "{option.name}"
                      </option>
                    ))}
                  </select>
                </>
              )}
              {!options && typeof value === 'boolean' && (
                <button class="text-emerald-500 hover:underline" onclick={() => (this.props[key].value = !value)}>
                  {value ? 'true' : 'false'}
                </button>
              )}
              {!options && typeof value === 'number' && <InputSpan bind={this.props[key].value} />}
              {!options && typeof value === 'string' && (
                <>
                  "<InputSpan bind={this.props[key].value} />"
                </>
              )}
              {description && <span class="text-zinc-400 italic"> // {description}</span>}
            </p>
          )
        })}
      </div>
    )
  }

  handleToggleCode() {
    this.isShowedCode = !this.isShowedCode
  }

  _toProps(props: Props) {
    return Object.fromEntries(Object.entries(props).map(([key, { value }]) => [key, value]))
  }

  renderElementCode({ el }: NullstackClientContext<{ el: any }>) {
    return (
      <Code
        onlyCode
        language="tsx"
        code={`
          import Nullstack from 'nullstack'
          import { ${el.constructor.name} } from 'nulldaisy'
          class ${el.constructor.name}Example extends Nullstack {
            render() {
               return( <${el.constructor.name} ${Object.entries(this.props)
          .map(([key, { value }]) => {
            if (key === 'children') return ``
            if (typeof value === 'boolean') return value ? `${key}` : ``
            if (typeof value === 'string' && value === '') return ``
            if (typeof value === 'number') return `${key}={${value}}`
            return `${key}="${value}"`
          })
          .join(' ')
          .trim()}${
          Object.keys(this.props).includes('children')
            ? `>${this.props.children.value}</${el.constructor.name} >`
            : '/>'
        });
            }
          } 
          
          `}
        name={el.constructor.name}
      />
    )
  }

  render({ element }: NullstackClientContext<SandboxProps>) {
    const el = new element(this._toProps(this.props))
    return (
      <div class="flex flex-col gap-4 border-b border-zinc-500 py-8">
        <h2 class="text-2xl">Sandbox </h2>
        <Props />
        <div class="flex flex-col p-4 border border-zinc-500 rounded-lg">{el.render(this._toProps(this.props))}</div>
        {this.isShowedCode && <ElementCode {...{ el }} />}
        <button class="text-emerald-500 hover:underline" onclick={this.handleToggleCode}>
          {this.isShowedCode ? 'Hide code' : 'Show code'}
        </button>
      </div>
    )
  }

}

export default Sandbox
