import { XMLParser } from 'fast-xml-parser'

export default defineCachedEventHandler(async (event) => {
    const resp = await fetch('https://blog.zhilu.cyou/atom.xml');
    const rawXML = await resp.text();
    const objAtom = new XMLParser().parse(rawXML);

    // 不要 content
    // const feed = objAtom.feed.entry.map((article: any) => {
    //     return {
    //         title: article.title,
    //         link: article.id,
    //         published: article.published,
    //         updated: article.updated,
    //         summary: article.summary,
    //     }
    // });

    return objAtom.feed.entry;
}, {
    maxAge: 60 * 60 * 24,
})