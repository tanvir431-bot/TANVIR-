#const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "bot2",
    version: "1.0",
    author: "Nazrul",
    countDown: 5,
    role: 0,
    description: "Bot",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({}) {},

  onChat: async function ({ api, event, args, Threads, usersData }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    const { threadID, messageID, senderID } = event;
    const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L");
    const idgr = `${event.threadID}`;

    const messages = [
      " আমরা দারুণ রকমের দুঃখ সাজাই প্রবল ভালোবেসে..!😅💔",
        "- আমি যখন একটু খুশি হওয়ার চেষ্টা করি, তখন দুঃখ এসে আবার আমাকে আঁকড়ে ধরে 😅💔",
        " °°অনুভূতি প্রকাশ করতে নেই মানুষ নাটক মনে করে মজা নেয়°..! 😥💔🥀",
        " কিছু মানুষ স্বল্প সময়ের জন্য আমাদের জীবনে আসে।কিন্তু দীর্ঘ সময় স্মৃতি রেখে যায়..!🙂💔",
        "𝙴𝙸 𝙿𝙰𝙶𝙾𝙻 𝙴𝚃𝙾 𝙳𝙰𝙺𝙾𝚂 𝙺𝙴𝙽?",
        " 𝙼𝚈𝙱 𝙸 𝙹𝚄𝚂𝚃 𝚆𝙰𝙽𝙽𝙰 𝙱𝙴 𝚈𝙾𝚄𝚁𝚂 ? 😌💝",
        " 𝙸 𝚂𝙰𝚈 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙵𝙾𝚁𝙴𝚅𝙴𝚁💝🐼",
        "য়ামরা কি ভন্দু হতে পারিহ?? নাহ্লে তার থেকে বেসি কিচু??😋",
        " 𝚈𝚄𝙼𝙼𝚈 𝙱𝙱𝚈 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚂𝙾 𝚂𝚆𝙴𝙴𝚃😋🤤",
        "𝙰𝚌𝙲𝙲𝙰𝙷 𝙱𝙾𝙻𝙾 𝙰𝙼𝙺𝙴 𝙻𝙰𝙶𝙱𝙴 𝙽𝙰𝙺𝙸 𝚁𝚄𝚂𝚂𝙸𝙰𝙽 ?",
        "তোর সাথে কথা নাই কারণ তুই অনেক লুচ্চা",
        " এইখানে লুচ্চামি করলে লাথি দিবো কিন্তু",
        "আমাকে চুমু দিবি 🫢🦋",
        "হেহে বাবু আমার কাছে আসো 😘💋",
        "আমি তোমাকে অনেক ভালোবাসি বাবু🥺💖",
        "your chocolate বট এর help list dekhte type koron *help",
        "কিরে বলদ তুই এইখানে 🙂",
        " আমাকেq চিনো না জানু? মনু",
        "hey bbe I'm your personal Based chatbot you ask me anything",
        "AR asbo na tor kache",
        "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
        "Hop beda dakos kn🥲",
        "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱",
        " ওই মামী আর ডাকিস না প্লিজ🥲",
        " হ্যা বলো, শুনছি আমি",
        "বলো কি করতে পারি তোমার জন্য😌 ",
        "𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌 ",
        " I love you tuna🥺🥶",
        "Tuma dew xanu😍😘 ",
        " এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈",
        " দেখা হলে কাঠগোলাপ দিও..🤗",
        "𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺 ",
        "•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺 ",
        "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 ",
        "Single taka ki oporad🥺 ",
        " Premer mora jole duve na😛",
        "Ufff matha gorom kore disos😒 ",
        "Boss hussain er chipay😜 ",
        "bashi dakle boss hussain ke bole dimu😒 ",
        "Xhipay atke gaci jan🥲 ",
        "Washroom a🤣 ",
        "bado maser kawwa police amar sawwa😞 ",
        "I am single plz distrab me🥺🥲 ",
        "𝗮𝗺𝗶 𝗯𝗼𝘁 𝗻𝗮 𝗮𝗺𝗮𝗸𝗲 𝗯𝗯𝘆 𝗯𝗼𝗹𝗼 𝗯𝗯𝘆!!😘 ",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲 ",
        "𝗛𝗶𝗶 𝗶 𝗮𝗺 𝗯𝗼𝘁 𝗰𝗮𝗻 𝗶 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂!🤖 ",
        "𝗲𝘁𝗼 𝗯𝗼𝘁 𝗯𝗼𝘁 𝗻𝗮 𝗸𝗼𝗿𝗲 𝘁𝗮𝗸𝗮 𝗼 𝘁𝗼 𝗽𝗮𝘁𝗵𝗮𝘁𝗲 𝗽𝗮𝗿𝗼😒🥳🥳 ",
        "𝘁𝗼𝗿𝗲 𝗺𝗮𝗿𝗮𝗿 𝗽𝗿𝗲𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗻𝗶𝗰𝗵𝗶...!!.🫡 ",
        "𝘂𝗺𝗺𝗮𝗵 𝗱𝗶𝗹𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗸𝗼𝗺𝘂 𝗸𝗶𝗻𝘁𝘂😑 ",
        " আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
        " Bal falaw😩",
        "Tapraiya dat falai demu🥴 ",
        "He🤤bolo amar jan kmn aso🤭 ",
        "Hmmm jan ummmmmmah🫣 ",
        "Chup kor ato bot bot koros kn😬 ",
        "Yes sir/mem😍 ",
        "Assalamualikum☺️💖 ",
        "Walaikumsalam😫🤓 ",
        "Chaiya takos kn ki kobi kooo☹️ ",
        "Onek boro beyadop re tui😒 ",
        "Amar shate kew sex opps tex kore na😫 ",
        "অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস Sakib কে-🐸😾🔪 ",
        "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏 ",
        "-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস Sakib ধরতে পারছে না-🐸🥲 ",
        " তোর কি চোখে পড়ে না আমি ব্যাস্ত 😒🐱",
        "বলো কি বলবা, চিপায় যাইয়া বলবা নাকি সবার সামনে বলবা ?🤭"
    ];

    const rand = messages[Math.floor(Math.random() * messages.length)];

    if (event.body.toLowerCase() === "🐥" || event.body.toLowerCase() === "🐣") {
      return api.sendMessage("-  𝐔𝐟𝐟'𝐬 𝐀𝐦𝐚𝐫 𝐁𝐚𝐛𝐮 𝐓𝐚🐥", "- ইসস আমার সোনা বাবু টা 🙊", threadID);
    }
  if ((event.body.toLowerCase() == "hedar bot") || (event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "sawwar bot") || (event.body.toLowerCase() == "karap bot")) {
     return api.sendMessage("𝐌𝐚𝐝𝐚𝐫𝐱𝐮𝐝 𝐤𝐢 𝐤𝐨𝐬 𝐥𝐚𝐭𝐭𝐚𝐦𝐮 𝐭𝐨𝐫𝐞⚠️💀", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("𝐀𝐫𝐞 𝐲𝐨𝐮 𝐩𝐫𝐞𝐠𝐧𝐞𝐧𝐭? 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("𝐇𝐮𝐠 𝐦𝐞 𝐛𝐛𝐲 💋☺️", threadID);
   };

   if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("𝐁𝐨𝐥𝐨𝐝 𝐚𝐠𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐝𝐞😩", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("𝐇𝐢.𝐇𝐞𝐥𝐥𝐨. 𝐚𝐢𝐬𝐨𝐛 𝐧𝐚 𝐤𝐨𝐫𝐞 Ayan 𝐫𝐞 𝐩𝐨𝐭𝐚𝐢𝐭𝐞 𝐨 𝐭𝐨 𝐩𝐚𝐫𝐨𝐬😫🌊", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("𝐓𝐨𝐫𝐞 𝐭𝐮𝐝𝐢💋😘 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("𝐋𝐨𝐥 𝐭𝐮𝐦𝐚𝐫 𝐩𝐮𝐭***𝐤𝐢 𝐝𝐢𝐲𝐚 𝐝𝐮𝐤𝐢𝐲𝐞 𝐝𝐢𝐯𝐨⚠️😒", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "kew nai ")) {
     return api.sendMessage("𝐀𝐢𝐭𝐨 𝐚𝐦𝐢 𝐣𝐚𝐚𝐚𝐧😘❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Ayan") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "Ayan vhai")) {
     return api.sendMessage( "𝐌𝐲 𝐛𝐨𝐬𝐬 𝐢𝐬 𝐛𝐮𝐬𝐲 𝐧𝐨𝐰!! 𝐃𝐨𝐧'𝐭 𝐝𝐢𝐬𝐭𝐫𝐚𝐛 𝐡𝐢𝐦😒🌊⚠️",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝗔𝗬𝗔𝗡 𝐀𝐇𝐌𝐄𝐝☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝗔𝗬𝗔𝗡🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐧𝐚𝐦𝐞🤓:- ☞ アヤン\n👋For Any Kind Of Help Contact 👉 01839268235", threadID);
   };

    if (event.body.toLowerCase().startsWith("bot") || event.body.toLowerCase() === "Bot") {
      const msg = {
        body: `🐱 ${rand}`,
      };
      return api.sendMessage(msg, threadID, messageID);
    }
  },
};
#
