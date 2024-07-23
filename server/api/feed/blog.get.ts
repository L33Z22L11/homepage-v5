import { XMLParser } from 'fast-xml-parser'
import type { validationOptions } from 'fast-xml-parser'

export default defineCachedEventHandler(async (_event) => {
    const resp = await fetch('https://blog.zhilu.cyou/atom.xml')
    const parseOptions: validationOptions = {
        ignoreAttributes: false,
        attributeNamePrefix: '$',
    }
    const objAtom = new XMLParser(parseOptions).parse(await resp.text())

    // 不要 content
    // const feed = objAtom.feed.entry.map((article: any) => {
    //     return {
    //         title: article.title,
    //         link: article.id,
    //         published: article.published,
    //         updated: article.updated,
    //         summary: article.summary,
    //     }
    // })

    return objAtom.feed.entry
}, {
    maxAge: 60 * 60 * 24,
})
