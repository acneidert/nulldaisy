import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import parserBabel from 'prettier/parser-babel'
import prettier from 'prettier/standalone'

import Nullstack, { NullstackClientContext } from 'nullstack'

import { pascalCase } from 'change-case'

const replaceAccentsChars = (str, charWith = ' ', regexType = 'NO_SPECIAL') => {
  if (!str) return

  const REGEX_TYPE = {
    ALL: / /g,
    NO_SPECIAL: /[^A-Z0-9]/gi,
    SINGLE_FOR_MULTI: /[^A-Z0-9]+/gi,
  }

  return str.replace(REGEX_TYPE[regexType], charWith).toLowerCase()
}

type CodeProps = {
  code: string
  format?: boolean
  language?: string
  class?: string
  name: string
  states?: string
  onlyCode?: boolean
}

class Code extends Nullstack<CodeProps> {

  isCopyped = false
  _newCode = ''
  _html

  update({
    code,
    format = true,
    language = 'tsx',
    class: klass,
    name,
    states = '',
    onlyCode = false,
  }: NullstackClientContext<CodeProps>) {
    if (!onlyCode) {
      this._newCode = `
      class ${pascalCase(replaceAccentsChars(`${name} Example`))} extends Nullstack {
        ${states}
        render(){
          return (
            ${code}
          )
        }
      }`
    } else {
      this._newCode = code
    }
    if (format) {
      try {
        this._newCode = prettier.format(this._newCode, {
          parser: 'babel',
          plugins: [parserBabel],
        })
      } catch (error) {
        console.error(error)
        console.log(this._newCode)
      }
    }
    this._html = hljs.highlightAuto(this._newCode, [language]).value
  }

  handleClick() {
    navigator.clipboard.writeText(this._newCode)
    this.isCopyped = true
    setTimeout(() => {
      this.isCopyped = false
    }, 2000)
  }

  render({
    code,
    format = true,
    language = 'javascript',
    class: klass,
    name,
    states = '',
  }: NullstackClientContext<CodeProps>) {
    return (
      <div class={['relative', klass]}>
        <pre class="m-0 pr-9">
          <code class="font-mono" html={this._html} />
          <span
            class="tooltip tooltip-left
             absolute top-2 right-2 text-xs text-zinc-500"
            data-tip={this.isCopyped ? 'Copied' : 'Copy'}
          >
            <button class="w-6 h-6 text-zinc-500 hover:text-zinc-400" onclick={this.handleClick}>
              {this.isCopyped ? (
                <svg
                  class="w-6 h-6 text-emerald-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"
                  />
                </svg>
              ) : (
                <svg
                  class="w-6 h-6 text-zinc-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                  />
                </svg>
              )}
            </button>
          </span>
        </pre>
      </div>
    )
  }

}

export default Code
