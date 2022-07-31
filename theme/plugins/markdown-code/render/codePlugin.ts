import hljs from 'highlight.js'
import type MarkdownIt from 'markdown-it/lib'
import type Token from 'markdown-it/lib/token'
import { resolveLanguage } from './resolveLanguage'
import type Renderer from 'markdown-it/lib/renderer'

const generateId = (() => {
    let i = 0
    return (prefix = 'uuid-code') => {
        i += 1
        return `${prefix}-${i}`
    }
})()

export default function codePlugin(md: MarkdownIt) {
    md.renderer.rules.fence = function (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) {
        const token = tokens[idx]
        const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
        // resolve language from token info
        const language = resolveLanguage(info)
        const languageClass = `${options.langPrefix}${language.name} hljs`
        const uuid = generateId()
        const tmpToken: any = {
            attrs: [
                ['id', uuid],
                ['class', languageClass],
                ['data-lang', language.name.toUpperCase()]
            ],
        }
        // try to get highlighted code
        const code = hljs.highlightAuto(token.content).value || md.utils.escapeHtml(token.content)
        const result = code.startsWith('<pre')
            ? code 
            : `<pre class="highlight-wrap">
                <code ${self.renderAttrs(tmpToken)}>${code}</code>
                <span data-zoom title="放大">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/></svg>
                </span>
                <span data-clipboard-target="#${uuid}" title="拷贝代码">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M13 4h-3V0H0v14h6v2h10V7l-3-3zM3 1h4v1H3V1zm12 14H7V5h5v3h3v7zm-2-8V5l2 2h-2z"/></svg>
                </span>
            </pre>`
        return result
    }

}
