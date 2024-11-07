export default interface FeedProps {
    [key: string]: any
    title: string
    link: {
        $href: string
    }
    id: string
    published: string
    updated: string
    summary: {
        _: string
        $type: string
    }
    content?: {
        $src: string
        $type: string
    }
    category: {
        $term: string
        $scheme: string
    }[]
}
