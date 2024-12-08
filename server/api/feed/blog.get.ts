import homepageConfig from '~~/homepage.config'
import { type X2jOptions, XMLParser } from 'fast-xml-parser'

export default defineCachedEventHandler(async (_event) => {
    const resp = await fetch(homepageConfig.blogAtom)
    const parseOptions: X2jOptions = {
        attributeNamePrefix: '$',
        cdataPropName: '$',
        ignoreAttributes: false,
        isArray: name => name === 'entry',
        textNodeName: '_',
    }
    const objAtom = new XMLParser(parseOptions).parse(await resp.text())

    return objAtom.feed?.entry
}, {
    maxAge: 60 * 60 * 24,
})
