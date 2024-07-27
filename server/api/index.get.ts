function getAge(birthdate: string) {
    const now = new Date()
    const birth = new Date(birthdate)
    let age = now.getFullYear() - birth.getFullYear()
    const month = now.getMonth() - birth.getMonth()
    if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) {
        age--
    }
    return age
}

const Zhilu = {
    name: '纸鹿本鹿',
    age: getAge('2003-09-24'),
    slogan: '纸鹿至麓不知路，支炉制露不止漉',
    avatars: [
        'https://cdn.libravatar.org/avatar/6790d5a0c7fbba6038a2bf4618cc24d9?s=480',
        'https://wsrv.nl/?url=github.com/L33Z22L11.png',
        'https://weavatar.com/avatar/47c0f2e82b76d9b10eb3023df9e02e4e3fdbeaf5b74b842063f207971e7fbe7b?s=480',
        'https://cravatar.cn/avatar/13aa912754e6bb5e671f3e6654e4712d?s=480',
    ],
    icon: 'https://blog.zhilu.cyou/static/icon.png',
    blog: {
        name: '纸鹿摸鱼处',
        link: 'https://blog.zhilu.cyou',
        feed: 'https://blog.zhilu.cyou/atom.xml',
    },
    qq_group: {
        name: '纸网接入点：博客/技术交流',
        id: 169994096,
    },
}

export default defineEventHandler(async (_event) => {
    return Zhilu
})
