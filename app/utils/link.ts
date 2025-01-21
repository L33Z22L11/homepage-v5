export function getDomain(url: string) {
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:]+)/i)
    return match?.[1] ?? url
}

export function getGhUsername(url?: string) {
    if (!url)
        return ''
    const usernameRagex = /github\.com\/([a-zA-Z0-9-]+)(?:\/[^/]+)?(\/?)$/
    return url.match(usernameRagex)?.[1] ?? ''
}

export function getGhAvatar(name: string, options?: Record<string, any>) {
    if (!options)
        options = { size: 96 }
    if (options.preset === 'icon')
        Object.assign(options, { size: 32, mask: 'circle' })
    let url = `https://wsrv.nl/?url=github.com/${name}.png`
    if (options.size)
        url += `%3fsize=${options.size}`
    if (options.mask)
        url += `&mask=${options.mask}`
    return url
}

export function isExtLink(url?: string) {
    return !!url?.includes(':')
}
