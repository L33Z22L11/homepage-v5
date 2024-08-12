import homepageConfig from '~~/homepage.config'

export default defineEventHandler(async (event) => {
    const avatarUrl = homepageConfig.author.avatar
    setResponseStatus(event, 302)
    setHeader(event, 'Location', avatarUrl)
})
