import Nullstack, { NullstackClientContext } from 'nullstack'

type InputSpanProps = {
  bind: any
}

class InputSpan extends Nullstack<InputSpanProps> {

  innerHtml
  spanEl
  type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' = null

  hydrate({ bind }: NullstackClientContext) {
    this.innerHtml = bind.object[bind.property]
    this.type = typeof bind.object[bind.property]
  }

  handleSpanChange({ bind, event }) {
    if (this.type === 'number') bind.object[bind.property] = Number(event.srcElement.innerText)
    else if (this.type === 'boolean') bind.object[bind.property] = event.srcElement.innerText === 'true'
    else if (this.type === 'object') bind.object[bind.property] = JSON.parse(event.srcElement.innerText)
    else if (this.type === 'function') bind.object[bind.property] = new Function(event.srcElement.innerText)
    else if (this.type === 'symbol') bind.object[bind.property] = Symbol(event.srcElement.innerText)
    else if (this.type === 'bigint') bind.object[bind.property] = BigInt(event.srcElement.innerText)
    else if (this.type === 'undefined') bind.object[bind.property] = undefined
    else if (this.type === 'string') bind.object[bind.property] = event.srcElement.innerText
    else bind.object[bind.property] = event.srcElement.innerText
  }

  hasError() {
    if (!this.hydrated) return false
    if (this.type === null || !this.spanEl) return false
    if (this.type === 'number' && isNaN(this.spanEl.innerText)) return true
    if (this.type === 'boolean' && this.spanEl.innerText !== 'true' && this.spanEl.innerText !== 'false') return true
    if (this.type === 'object' && !JSON.parse(this.spanEl.innerText)) return true
    if (this.type === 'function' && !new Function(this.spanEl.innerText)) return true
    if (this.type === 'symbol' && this.spanEl.innerText === '') return true
    if (this.type === 'bigint' && !BigInt(this.spanEl.innerText)) return true
    if (this.type === 'undefined' && this.spanEl.innerText !== '') return true
    if (this.type === 'string' && this.spanEl.innerText === '') return true
    return false
  }

  render(context: NullstackClientContext) {
    return (
      <span
        ref={this.spanEl}
        class={`focus:px-1 focus:ring-inset focus:ring-1  focus:rounded-lg outline-0 ${
          this.hasError() ? 'ring-1 ring-red-500 focus:ring-red-500 rounded-lg px-1' : 'focus:ring-emerald-500'
        }`}
        contenteditable
        onkeyup={this.handleSpanChange}
        {...context}
      >
        {this.innerHtml}
      </span>
    )
  }

}

export default InputSpan
