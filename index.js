require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.on("message", message => {
    if(message.content.startsWith("Hi Trump")){
        message.reply("Shut up I dont like you");
    }
    else if(message.content.startsWith("You are so ugly Trump")){
        message.reply("You are uglier");
    }
    else if(message.content.startsWith("Youre racist Trump")){
        message.reply("How can the greatest race be racist");
    }
    else if(message.content.startsWith("You are racist Trump")){
        message.reply("How can the greatest race be racist");
    }
    else if(message.content.startsWith("Nobody likes you Trump")){
        message.reply("Who cares Im rich");
    }
    else if(message.content.startsWith("u")){
        message.reply("Vote for me or get deported");
    }
    else if(message.content.startsWith("Politics are shit Trump")){
        message.reply("Thats not an insult try again");
    }
    else if(message.content.startsWith("Corona virus")){
        message.reply("Chinese Virus");
    }
    else if(message.content.startsWith("i")){
        message.reply("I dont like any of you");
    }
    else if(message.content.startsWith("o")){
        message.reply("I dont like any of you");
    }
    else if(message.content.startsWith("m")){
        message.reply("Vote for me or get deported");
    }
    else if(message.content.startsWith("l")){
        message.reply("Lets build a wall");
    }
    else if(message.content.startsWith("r")){
        message.reply("Vote for me or get deported");
    }
    else if(message.content.startsWith("Im voting for you Trump")){
        message.reply("Great this means I can take away youre freedom and start world war three");
    }
    else if(message.content.startsWith("K")){
        message.reply("I dont like any of you");
    }
    else if(message.content.startsWith("You are an idiot Trump")){
        message.reply("Keep saying that if you want to get deported");
    }
    else if(message.content.startsWith("You are so ugly Trump")){
        message.reply("Keep saying that if you want to get deported");
    }
    else if(message.content.startsWith("Screw you Trump")){
        message.reply("You have angered me")
        message.reply("It was not a good decision to mess with the richest man in the world");
    }
    else if(message.content.startsWith("I would like to see you try Trump")){
        message.reply("Ok I will");
    }
    else if(message.content.startsWith("Nobody likes me")){
        message.reply("Finally you realized that");
    }
    else if(message.content.startsWith("You are ugly Trump")){
        message.reply("With my money I can get anybody I want so who cares");
    }
    else if(message.content.startsWith("I dare you Trump")){
        message.reply("Ok i will then you idiot");
    }
    else if(message.content.startsWith("I like comunism")){
        message.reply("Who doesnt like comunism");
    }
    else if(message.content.startsWith("I hate you Trump")){
        message.reply("I hate you even more, you can not even begin to fathom how much I loathe you");
    }
    else if(message.content.startsWith("!info")){
        message.reply("Type !link for the link to the bot");
    }
    else if(message.content.startsWith("!link")){
        message.reply("https://discord.com/oauth2/authorize?client_id=751280132853071913&scope=bot&permissions=15360");
    }
    else if(message.content.startsWith("I love you Trump")){
        message.reply("Well I hate you");
    }
})

client.once('ready', () => {
    console.log('Trump Bot is online!');
});


//last line in bot
client.login(process.env.TOKEN);