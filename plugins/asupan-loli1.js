/*let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/loli'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupanloli']
handler.tags = ['asupan']
handler.command = /^(asupanloli)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/loli'
	conn.sendFile(m.chat, url, null, 'Asupan loli', m)
}
handler.command = /^(asupanloli1)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['asupanloli1']
handler.limit = true
export default handler
