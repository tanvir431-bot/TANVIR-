Toggle navigation
 Pastebin
Facebook
Untitled safest cryptocurrency exchange
From Dipto, 2 Minutes ago, written in JavaScript.
URL https://pastebin.pl/view/bd5d23f8
Embed Show code
Download Paste or View Raw
Hits: 3
      

const axios = require("axios");
 
const prefixes = ["bby", "janu", "babe", "bot", "sona", "bbu", "jaan"];
 
module.exports = {
  config: {
    name: "bot",
    version: "1.6.9",
    author: "Dipto",
    role: 0,
    description: {
      en: "No prefix command.",
    },
    category: "ai",
    guide: {
      en: "Just type a prefix like 'bby' followed by your message.",
    },
  },
 
  onStart: async function () {
    console.log("Bot command initialized.");
  },
 
  // Helper function to remove a prefix
  removePrefix: function (str, prefixes) {
    for (const prefix of prefixes) {
      if (str.startsWith(prefix)) {
        return str.slice(prefix.length).trim();
      }
    }
    return str;
  },
 
  onReply: async function ({ api, event }) {
    if (event.type === "message_reply") {
      try {
        let reply = event.body.toLowerCase();
        reply = this.removePrefix(reply, prefixes) || "bby";
 
        // Updated URL instead of global.GoatBot.config.api
        const response = await axios.get(
          `https://www.noobs-api.rf.gd/dipto/baby?text=${encodeURIComponent(reply)}&senderID;=${event.senderID}&font=1`
        );
 
        const message = response.data.reply;
        if (response.data.react) {
          setTimeout(() => {
            api.setMessageReaction(response.data.react, event.messageID, () => {}, true);
          }, 400);
        }
 
        api.sendMessage(message, event.threadID, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: "bot",
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            text: message,
          });
        }, event.messageID);
      } catch (err) {
        console.error(err.message);
        api.sendMessage(" An error occurred.", event.threadID, event.messageID);
      }
    }
  },
 
  onChat: async function ({ api, event }) {
    const randomReplies = ["Bolo jaan ki korte pari tmr jonno ?", "আর কত বার ডাকবা ,শুনছি তো ??‍♀", "আম গাছে আম নাই ঢিল কেন মারো, তোমার সাথে প্রেম নাই বেবি কেন ডাকো ??", "দূরে যা, তোর কোনো কাজ নাই, শুধু ??? ??? করিস ?", "Hop beda?,", "??? ????? ??? ?????,,??", "??? বলে অসম্মান করচ্ছিছ,??", "ki kobi ko?", "তোর বিয়ে হয় নি ??? হইলো কিভাবে,,?", "??? বললে চাকরি থাকবে না", "বার বার ডাকলে মাথা গরম হয় কিন্তু ??", "বলো ফুলটুশি?", "ভুলে জাও আমাকে ??", "Ato gulo bby k samlate parsi nah ??"];
    const rand = randomReplies[Math.floor(Math.random() * randomReplies.length)];
 
    const messageBody = event.body ? event.body.toLowerCase() : "";
    const words = messageBody.split(" ");
    const wordCount = words.length;
 
    if (event.type !== "message_reply") {
      let messageToSend = messageBody;
      messageToSend = this.removePrefix(messageToSend, prefixes);
 
      if (prefixes.some((prefix) => messageBody.startsWith(prefix))) {
        setTimeout(() => {
          api.setMessageReaction("?", event.messageID, () => {}, true);
        }, 400);
 
        api.sendTypingIndicator(event.threadID, true);
 
        if (event.senderID === api.getCurrentUserID()) return;
 
        const msg = { body: rand };
 
        if (wordCount === 1) {
          setTimeout(() => {
            api.sendMessage(msg, event.threadID, (err, info) => {
              global.GoatBot.onReply.set(info.messageID, {
                commandName: "bot",
                type: "reply",
                messageID: info.messageID,
                author: event.senderID,
                link: msg,
              });
            }, event.messageID);
          }, 400);
        } else {
          words.shift(); // Removing the prefix
          const remainingText = words.join(" ");
 
          try {
            // Updated URL instead of global.GoatBot.config.api
            const response = await axios.get(
              `https://www.noobs-api.rf.gd/dipto/baby?text=${encodeURIComponent(remainingText)}&senderID;=${event.senderID}&font=1`
            );
            const message = response.data.reply;
 
            if (response.data.react) {
              setTimeout(() => {
                api.setMessageReaction(
                  response.data.react,
                  event.messageID,
                  () => {},
                  true
                );
              }, 500);
            }
 
            api.sendMessage({ body: message }, event.threadID, (error, info) => {
              global.GoatBot.onReply.set(info.messageID, {
                commandName: this.config.name,
                type: "reply",
                messageID: info.messageID,
                author: event.senderID,
                link: message,
              });
            }, event.messageID);
          } catch (err) {
            console.error(err.message);
            api.sendMessage(" An error occurred.", event.threadID, event.messageID);
          }
        }
      }
    }
 
    // Handling reaction triggers based on certain text patterns
    const reactions = ["haha", "?", "lol", "pro", "gpt", "?", "hehe"];
    if (reactions.some(reaction => messageBody.includes(reaction))) {
      setTimeout(() => {
        api.setMessageReaction("?", event.messageID, () => {}, true);
      }, 500);
    }
  }
};
Reply to "Untitled"
 Author
 Title
Re: Untitled
 Language
JavaScript
 Your paste - Paste your paste here
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
const axios = require(&quot;axios&quot;);
 
const prefixes = [&quot;bby&quot;, &quot;janu&quot;, &quot;babe&quot;, &quot;Yeager&quot;, &quot;sona&quot;, &quot;bbu&quot;, &quot;jaan&quot;];
 
module.exports = {
  config: {
    name: &quot;bot&quot;,
    version: &quot;1.6.9&quot;,
    author: &quot;xos Eren&quot;,
    role: 0,
    description: {
      en: &quot;No prefix command.&quot;,
    },
    category: &quot;ai&quot;,
    guide: {
      en: &quot;Just type a prefix like 'bby' followed by your message.&quot;,
    },
  },
 
  onStart: async function () {
    console.log(&quot;Bot command initialized.&quot;);
  },
 
  // Helper function to remove a prefix
  removePrefix: function (str, prefixes) {
    for (const prefix of prefixes) {
      if (str.startsWith(prefix)) {
        return str.slice(prefix.length).trim();
      }
    }
    return str;
  },
 
  onReply: async function ({ api, event }) {
    if (event.type === &quot;message_reply&quot;) {
      try {
        let reply = event.body.toLowerCase();
        reply = this.removePrefix(reply, prefixes) || &quot;bby&quot;;
 
        // Updated URL instead of global.GoatBot.config.api
        const response = await axios.get(
          `https://www.noobs-api.rf.gd/dipto/baby?text=${encodeURIComponent(reply)}&amp;senderID;=${event.senderID}&amp;font=1`
        );
 
        const message = response.data.reply;
        if (response.data.react) {
          setTimeout(() =&gt; {
            api.setMessageReaction(response.data.react, event.messageID, () =&gt; {}, true);
          }, 400);
        }
 
        api.sendMessage(message, event.threadID, (err, info) =&gt; {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: &quot;bot&quot;,
            type: &quot;reply&quot;,
            messageID: info.messageID,
            author: event.senderID,
            text: message,
          });
        }, event.messageID);
      } catch (err) {
        console.error(err.message);
        api.sendMessage(&quot; An error occurred.&quot;, event.threadID, event.messageID);
      }
    }
  },
 
  onChat: async function ({ api, event }) {
    const randomReplies = [&quot;Bolo jaan ki korte pari tmr jonno ?&quot;, &quot;আর কত বার ডাকবা ,শুনছি তো ??‍♀&quot;, &quot;আম গাছে আম নাই ঢিল কেন মারো, তোমার সাথে প্রেম নাই বেবি কেন ডাকো ??&quot;, &quot;দূরে যা, তোর কোনো কাজ নাই, শুধু ??? ??? করিস ?&quot;, &quot;Hop beda?,&quot;, &quot;??? ????? ??? ?????,,??&quot;, &quot;??? বলে অসম্মান করচ্ছিছ,??&quot;, &quot;ki kobi ko?&quot;, &quot;তোর বিয়ে হয় নি ??? হইলো কিভাবে,,?&quot;, &quot;??? বললে চাকরি থাকবে না&quot;, &quot;বার বার ডাকলে মাথা গরম হয় কিন্তু ??&quot;, &quot;বলো ফুলটুশি?&quot;, &quot;ভুলে জাও আমাকে ??&quot;, &quot;Ato gulo bby k samlate parsi nah ??&quot;];
    const rand = randomReplies[Math.floor(Math.random() * randomReplies.length)];
 
    const messageBody = event.body ? event.body.toLowerCase() : &quot;&quot;;
    const words = messageBody.split(&quot; &quot;);
    const wordCount = words.length;
 
    if (event.type !== &quot;message_reply&quot;) {
      let messageToSend = messageBody;
      messageToSend = this.removePrefix(messageToSend, prefixes);
 
      if (prefixes.some((prefix) =&gt; messageBody.startsWith(prefix))) {
        setTimeout(() =&gt; {
          api.setMessageReaction(&quot;?&quot;, event.messageID, () =&gt; {}, true);
        }, 400);
 
        api.sendTypingIndicator(event.threadID, true);
 
        if (event.senderID === api.getCurrentUserID()) return;
 
        const msg = { body: rand };
 
        if (wordCount === 1) {
          setTimeout(() =&gt; {
            api.sendMessage(msg, event.threadID, (err, info) =&gt; {
              global.GoatBot.onReply.set(info.messageID, {
                commandName: &quot;bot&quot;,
                type: &quot;reply&quot;,
                messageID: info.messageID,
                author: event.senderID,
                link: msg,
              });
            }, event.messageID);
          }, 400);
        } else {
          words.shift(); // Removing the prefix
          const remainingText = words.join(&quot; &quot;);
 
          try {
            // Updated URL instead of global.GoatBot.config.api
            const response = await axios.get(
              `https://www.noobs-api.rf.gd/dipto/baby?text=${encodeURIComponent(remainingText)}&amp;senderID;=${event.senderID}&amp;font=1`
            );
            const message = response.data.reply;
 
            if (response.data.react) {
              setTimeout(() =&gt; {
                api.setMessageReaction(
                  response.data.react,
                  event.messageID,
                  () =&gt; {},
                  true
                );
Private - Private paste aren't shown in recent listings.
 Delete After - When should we delete your paste?
Keep Forever
Spam protection -


Powered by Stikked | Pastebin.pl 2014 - today
