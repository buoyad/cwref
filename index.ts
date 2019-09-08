import Bot from 'keybase-bot'

const bot = new Bot()
const username = ''
const paperkey = ''

async function main() {
    try {
        await bot.init(username, paperkey, {verbose: false})
        console.log(`logged in as ${bot.myInfo().username}`)
        bot.chat.watchChannelForNewMessages({name: 'cwtracks', membersType: 'team', topicType: 'chat', topicName: '_test'},
            (message) => console.log(message),
            (err) => console.error(err))
    } catch (e) {
        console.error('fatal: ', e)
        bot.deinit()
        process.exit(-1)
    }
}

process.on('exit', () => bot.deinit())
process.on('SIGINT', () => bot.deinit())
main()
