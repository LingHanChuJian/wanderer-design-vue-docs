import { startCase } from 'lodash'
import { name, author, description, keywords } from './package.json'

/* Meta */
const title = startCase(name)
export {
    title,
    author,
    description,
    keywords
}

/* CDN fonts and styles */
export const googleapis = 'https://fonts.googleapis.com'
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* Docsearch key */
export const apiKey = ''
export const appId = ''
export const indexName = ''

/* Github link */
export const docsLink = 'https://github.com/LingHanChuJian/wanderer-design-vue-docs'
export const wandererLink = 'https://github.com/LingHanChuJian/wanderer-design-vue'
