// SILAHKAN KALIAN ATUR SESUAI KEINGINAN KALIAN :)
// NO ENC ALL FITUR? CHAT ME 🥴
// BY HANN SYKES | YOUTUBE : HannSykes
/*++++++++++++++++++++++++++++++++++++++++++++*/

// UCAPAN WELCOME
const ucapan = (num, mdata, pushname) => {
	return `*Hello, @${num.split('@')[0]} Si Beban Grup 👋*
*Selamat Datang Di ${mdata.subject} *
*Jangan Lupa Untuk Patuhi Rules *
*Dan Ramaikan Grup Ini *

*Thanks *
*Salam Dari Binjai *`
}

exports.ucapan = ucapan

// FOOTER WELCOME
const footerwelkam = `JANGAN LUPA INTRO!`
exports.footerwelkam = footerwelkam


// UCAPAN GOODBYE
const goodbye = (num, mdata, pushname) => {
  return `*Anak  Lu @${num.split('@')[0]} Malah Out*
*Dasar Anak Ngen...*`
  }
exports.goodbye = goodbye


// FOOTER GOODBYE
const footergoodbye = `SEMOGA TENANG DI ALAM SANA`
exports.footergoodbye = footergoodbye