import { XMLParser } from 'fast-xml-parser'
import homepageConfig from '~~/homepage.config'

export default defineCachedEventHandler(async (_event) => {
    const parser = new XMLParser({
        attributeNamePrefix: '$',
        cdataPropName: '$',
        ignoreAttributes: false,
        isArray: name => name === 'entry' || name === 'category',
        textNodeName: '_',
    })

    const resp = await fetch(homepageConfig.blogAtom)

    const objAtom = parser.parse(await resp.text())
    return objAtom.feed?.entry
}, {
    maxAge: 60 * 60 * 24,
})
