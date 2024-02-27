import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", msg => msg.reply.text(msg.text))

bot.on("/start", msg => msg.reply.photo('https://www.meme-arsenal.com/memes/488f0194b841271f1e8601f4714d5969.jpg'))

export default bot
