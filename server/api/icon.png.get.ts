import homepageConfig from '~~/homepage.config'

export default defineEventHandler(async (event) => {
    const avatarUrl = homepageConfig.favicon
    setResponseStatus(event, 302)
    setHeader(event, 'Location', avatarUrl)
})
