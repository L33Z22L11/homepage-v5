import { type X2jOptions, XMLParser } from 'fast-xml-parser'
import homepageConfig from '~~/homepage.config'

export default defineCachedEventHandler(async (_event) => {
    const resp = await fetch(homepageConfig.blogAtom)
    const parseOptions: X2jOptions = {
        ignoreAttributes: false,
        attributeNamePrefix: '$',
    }
    const objAtom = new XMLParser(parseOptions).parse(await resp.text())

    return objAtom.feed.entry
}, {
    maxAge: 60 * 60 * 24,
})
