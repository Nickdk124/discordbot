// Dette er nick's Discord Bot.

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '!'; //Kommando prefixet

const token = 'NjQ3MTQ4MzU3MTk3ODg5NTM2.Xdbd5g.hjsMAh2wmZGOUKs2iAW-XYlRyNA';

// NjQ1OTgzNTI5MjYzNjkzODQ1.XdQQWw.hwIOBPgikdBllvLxRqB2xHF1rmQ = Test bot's token
// NjQ3MTQ4MzU3MTk3ODg5NTM2.Xdbd5g.hjsMAh2wmZGOUKs2iAW-XYlRyNA = jaaaaaaaaa's token
bot.on('ready', () => {
    console.log('Bot online!');
    bot.user.setActivity('', { type: 'LISTENING' }).catch(console.error); //Dette er statusen af botten
})

bot.on('message', async message => {

    let args = message.content.slice(prefix.length).split(" ");

    switch (args[0]) {
        // Clear kommando, "!clear 1 - 100", fjerner beskeder i chatten 
        case 'clear':
            if (message.member.roles.some(role => role.name === "Staff")) {
                if (!args[0]) {
                    message.channel.bulkDelete('1');
                    message.reply('Skriv venligst et tal fra 1 - 100.');
                    setTimeout(() => {
                        message.channel.bulkDelete('1');
                    }, 2000);
                    break;
                } else if (args[0]) {
                    message.channel.bulkDelete(args[1]);
                    message.reply('Beskeder fjernet.');
                    setTimeout(() => {
                        message.channel.bulkDelete('1');
                    }, 2000);
                    console.log('command: !clear', args[0]);
                    break;
                }
            }


        case 'hjælp':
            if (message.member.roles.some(role => role.name === "Staff")) {
                message.channel.bulkDelete('1')
                const embed = new Discord.RichEmbed()
                    .setTitle('Moderation Hjælp', true)
                    .setDescription("**Prefix:** *!* \n \n **Commands:** \n *!Hjælp* - frehæver denne besked. \n \n *!Clear (1 - 100)* - Fjerner beskeder i den chat du sidder i (mellem 1 - 100) \n \n *!Kick (@bruger)* - kicker en bruger fra discord serveren og sender et invite link igen \n \n *!Ban (@bruger)* - banner en bruger fra Discord serveren (permanent) \n \n \n **Kommer:** \n *!unban* - unbanner en bruger som er bannet \n \n *!tempban* - banner en bruger i en bestemt tid \n \n *!mute* - muter en bruger (permanent) \n \n *!tempmute* - muter en bruger en i bestemt tid \n \n *!sumo* - til at informere om sumo events på serveren. \n \n *!Giveaway* - starter en giveaway med én reaktion som folk skal reagere med for at vinde")
                    .setFooter('Hvis du mener der mangler noget eller har et ønske, kontakt Rawrzz#9999 på Discord.')
                    .setColor(0x238513)
                message.channel.sendEmbed(embed);
                setTimeout(() => {
                    message.channel.bulkDelete('1');
                }, 120000);
                break;
            }

        case 'ban':
            if (message.member.roles.some(role => role.name === "Staff")) {
                const user = message.mentions.users.first();

                if (user) {
                    const member = member.guild.member(user);

                    if (member) {
                        message.channel.bulkDelete('1');
                        member.ban('Du er blevet bannet fra serveren.').then(() => {
                            message.reply('Brugeren er nu bannet fra serveren');
                            setTimeout(() => {
                                message.channel.bulkDelete('1');
                            }, 2000);
                        }).catch(err => {
                            message.reply('Jeg kunne ikke banne brugeren')
                            console.log(err)
                            setTimeout(() => {
                                message.channel.bulkDelete('1');
                            }, 2000);
                        });
                    } else {
                        message.channel.bulkDelete('1');
                        message.reply('Brugeren er ikke en del af serveren')
                        setTimeout(() => {
                            message.channel.bulkDelete('1');
                        }, 2000);
                    }
                } else {
                    message.channel.bulkDelete('1');
                    message.reply('Skriv venligst en bruger du vil banne.')
                    setTimeout(() => {
                        message.channel.bulkDelete('1');
                    }, 2000);
                    break;

                }
            } else {
                message.channel.bulkDelete('1');
                message.reply('Hov! Du har vist ikke adgang til dette. ;)')
                setTimeout(() => {
                    message.channel.bulkDelete('1');
                }, 2000);
            }

        case 'kick':
            if (message.member.roles.some(role => role.name === "Staff")) {
                const user2 = message.mentions.users.first();

                if (user2) {
                    const member2 = message.guild.member(user2);

                    if (member2) {
                        message.channel.bulkDelete('1');
                        member2.kick('Du er blevet kicket fra serveren').then(() => {
                            message.reply('Brugeren er nu kicket fra serveren');
                            setTimeout(() => {
                                message.channel.bulkDelete('1');
                            }, 2000);
                        }).catch(err => {
                            message.reply('Jeg kunne ikke kicke brugeren');
                            console.log(err)
                            setTimeout(() => {
                                message.channel.bulkDelete('1');
                            }, 2000);
                        })
                    } else {
                        message.channel.bulkDelete('1');
                        message.reply('Brugeren er ikke en del af serveren')
                        setTimeout(() => {
                            message.channel.bulkDelete('1');
                        }, 2000);

                    }
                } else {
                    message.channel.bulkDelete('1');
                    message.reply('Skriv venligst en bruger du vil kicke')
                    setTimeout(() => {
                        message.channel.bulkDelete('1');
                    }, 2000);
                    break;
                }
            } else {
                message.channel.bulkDelete('1');
                message.reply('Hov! Du har vist ikke adgang til dette. ;)')
                setTimeout(() => {
                    message.channel.bulkDelete('1');
                }, 2000);
            }

        case 'fs':
            if (args[1]) {
                message.channel.bulkDelete('1')
                const embed = new Discord.RichEmbed()
                    .setTitle(`Fra:  ${message.member.user.tag}`)
                    .setDescription(`**Forslag:** ${args.join(" ")}`)
                    .setColor(0x5463F3)
                const forslagskanal = bot.channels.get('619190787124756480')
                const sentMessage = await forslagskanal.send({embed});
                sentMessage.react('☑');
                sentMessage.react('❌');
            } else {
                message.channel.bulkDelete('1')
                message.reply('Det virkerede ikke :frowning:')
                setTimeout(() => {
                    message.channel.bulkDelete('1');
                }, 2000);
            }

    }

})

bot.login(token);