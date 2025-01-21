type MaybeHtmlAtom = string | {
    _: string
    $type: string
}

export default interface FeedProps {
    title: MaybeHtmlAtom
    link: {
        $href: string
    }
    id: string
    published: string
    updated?: string
    summary: MaybeHtmlAtom
    content?: {
        $src: string
        $type: string
    }
    category: {
        $term: string
        $scheme: string
    }[]
}
