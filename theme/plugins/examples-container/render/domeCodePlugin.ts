// 扩展 rules slots 规则
import type Token from 'markdown-it/lib/token'
import type { PluginWithOptions } from 'markdown-it'

import path from 'path'

const SYNTAX_RE = /@\[code(?:{(?:(\d+)?-(\d+)?)})?(?: ([^\]]+))?\]\(([^)]*)\)/

export interface ImportCodePluginOptions {
    /**
     * A function to handle the import path
     */
    handleImportPath?: (str: string) => string
}

export const domeCodePlugin: PluginWithOptions<ImportCodePluginOptions> = (md, options = {}) => {
    md.core.ruler.after('block', 'dome-code', function (state) {
        const tokens = state.tokens
        let startToken = false
    
        for (let i = 0, len = tokens.length; i < len; i++) {
            const token = tokens[i]

            startToken = token.type === 'container_template_open'
            startToken = !(token.type === 'container_template_close')

            if (startToken) {

                if (token.type === 'code_block') {

                    if (SYNTAX_RE.test(token.content)) {
                        const content = token.content
                        const match = content.match(SYNTAX_RE)
                        if (!match) { continue }

                        token.type = 'import_code'
                        token.content = ''
                        const [, lineStart, lineEnd, info, importPath] = match
                        const meta = {
                            importPath: options.handleImportPath!(importPath),
                            lineStart: lineStart ? Number.parseInt(lineStart, 10) : 0,
                            lineEnd: lineEnd ? Number.parseInt(lineEnd, 10) : undefined,
                        }
                        token.info = info ?? path.extname(meta.importPath).slice(1)
                        token.markup = '```'
                        token.meta = meta
                    } else {
                        token.type = 'html_block'
                    }
                }

            }
        }

    })
}
