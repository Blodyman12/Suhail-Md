const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349164488665";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_32_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUlESTc3VDhtbGRwVlNBRnRLb09hRlc4S0ZnVzhXeTZYdEt6bUNEVTg3QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY0NDg4NjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQTk4QkE1Q0JDNUExMTdGQ0M1RTE4MjFCODBDMDBCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NDU1NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWtiV3lRbUpRbXlmSnd6N1B0Nkxzd1wiLFxuICBcInBob25lSWRcIjogXCJkYWJmODk2My1jNGEyLTQ3ZGYtOGQ1MS0yYjgzY2NhN2NlNGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAyMTUsXG4gICAgICA3OSxcbiAgICAgIDI4LFxuICAgICAgMTU2LFxuICAgICAgMTYyLFxuICAgICAgNzYsXG4gICAgICAxMTgsXG4gICAgICAzOSxcbiAgICAgIDE5NyxcbiAgICAgIDIyOSxcbiAgICAgIDIxLFxuICAgICAgMTc0LFxuICAgICAgMTU3LFxuICAgICAgMTUzLFxuICAgICAgMTYzLFxuICAgICAgMjUsXG4gICAgICAxNDQsXG4gICAgICA4OCxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICA5NyxcbiAgICAgIDIyLFxuICAgICAgMTEsXG4gICAgICAxNjAsXG4gICAgICA4MyxcbiAgICAgIDE0NixcbiAgICAgIDEyMixcbiAgICAgIDIyMixcbiAgICAgIDIwMCxcbiAgICAgIDI5LFxuICAgICAgMzMsXG4gICAgICAyMTgsXG4gICAgICAyMSxcbiAgICAgIDE5NixcbiAgICAgIDE4NSxcbiAgICAgIDEsXG4gICAgICAxMzAsXG4gICAgICAyMDQsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhLWkREQU5BXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY0NDg4NjY1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyODMxMjYzNDU0NDE5Nzo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlPDkOOCnVLEksOFUMOLUlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTYzJVNFErTlN2dEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVUZoelVpdHU5K3pHcktaa25hV2hFZUFqQ1hoaHZNWVh4QmZOdU04ZWp3cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCMXZGWlgzR2NDcjMxRVk5RENiTlYwTk02VXNKMTlZRytHcm9EN3pyWGRmWjlHV1VoVk5XK0VCYkFDZkZyVzJPaVkzejZxRThGbFRtZ1Z0NTRSdTFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYVThaYjRKQkRJK1ZFVEJtMHk3ZkdvMWlaeDNWcDJsZ2UxRVdLMDdyMnZPNEtDdDdtc2Y4RTd6blBvT3BSNkdoL0xONXdQazlsam9lRmlmUk9qbUVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY0NDg4NjY1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ0NTU2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtNVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS01WLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMnFURkdLQ3ZYRWxkNUYxcHVDcmZPY3IyZHdnNGNxejJudHB0OERMa2RDRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjUwMzk2MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTMxMjM0MjYwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
