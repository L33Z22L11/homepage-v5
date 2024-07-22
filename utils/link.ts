export function isExtLink(url: string | undefined) {
    return url?.match(':')
}
