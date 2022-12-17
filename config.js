/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['51963324152']
global.ownernomer = "51963324152"
global.creador = ['51963324152']
global.numcreador = "51963324152"
global.packname = 'Sticker'
global.author = 'Nexus'
global.sessionName = 'nexusdev'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefix = ['.']
global.sp = ''

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25,
    resetcron:12
}

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    ownerB: '[❗]\n*¡Este comando solo puede ser utilizado por el creador del Bot!*',
    creadorB: '[❗]\n*¡Este comando solo puede ser utilizado por el creador del Bot!*',
    group: '[❗]\n*¡Este comando solo puede ser utilizado en grupos!*',
    grupo: '[❗] *ALERTA*\n\n*¡Este comando solo puede ser utilizado en grupos!*',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    comandoespera: '*Espera un momento por favor...*',
    etiquetaimg: 'Debes etiquetar una imagen con el comando: ',
    etiquetastick: 'Debes etiquetar un sticker con el comando: ',
    musicacomando: 'Falta agregar el nombre de la música dejando un espacio al lado del comando: ',
    textocomando: 'Falta agregar texto dejando un espacio al lado del siguiente comando: ',
    linkcomando: 'Falta agregar la url dejando un espacio al lado del comando: ',
    etiquetaimgvidl: 'Debes etiquetar una imagen o un video con una duración máxima de 10 segundos con el comando: ',
    limm: '*La duración máxima permitida es de 10 minutos.*',
    lims: '*La duración máxima permitida es de 10 segundos.*',
    error: '*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: `[❗] *ALERTA*\n\n*No puedes usar este comando premium.*\n\nHas llegado al *límite de comandos premium* que tu *usuario gratuito* puede usar.\n\nTu usuario tiene un límite de uso de ${global.limitawal.free} comandos premium cada ${global.limitawal.resetcron} horas, este límite se restablece cada 12 horas.\n\nPara monitorear cuantos comandos premium tienes disponibles usa el siguiente comando:\n\n*${prefix}limite*\n\nSi te conviertes en *usuario premium* puedes usar los comandos premium *sin limitaciones* en el tiempo que dure tu suscripción.\n\nPara convertirte en usuario premium puedes consultar el siguiente comando:\n\n*${prefix}premium*\n`,
}

// Fake
global.thumb = fs.readFileSync('./media/image/assistant.jpg')
global.faall = fs.readFileSync('./media/image/assistant.jpg')

// Url
global.mygit = 'https://github.com/Nexus07z'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/Cp1OJenk6Q9D9vgLjLU558"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Nexusᴮᴼᵀ'
global.apilol = '4fda13ee5ed767eef2174d23'
global.akulaku = 'Bot By Naze'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
