const { Command } = require('discord-akairo');

class RecentCommand extends Command {
    constructor() {
        super('recent', {
            aliases: ['recent'],
            args: [
                {
                    id: 'ID',
                }
            ],
            channel: 'guild'
        });
    }



    async exec(message, args) {

        const embed = this.client.util.embed()
            .setColor("#000000")
            .setTitle(`Recent Actions in ${message.guild.name}`)
            .setDescription(`*You can do **\`${message.guild.prefix}recent <ID>\`** to view all actions relating to a user.*`)
            .setImage("https://media.discordapp.net/attachments/742599109713723467/743292581324128276/image0.gif?width=380&height=212")
            .setFooter("𝘜𝘯𝘵𝘰𝘶𝘤𝘩𝘢𝘣𝘭𝘦");

        let actions = message.guild.getActions(args.ID ? (i => i.executor.id === args.ID || (i.target && (i.target.id === args.ID))) : undefined);
        for (var k in actions) embed.addField(`${actions[k].name} (${(actions[k].actions || '').split('\n').length - 1})`, actions[k].actions || 'No entries.');
  
        message.channel.send(embed);

    }

}

module.exports = RecentCommand;