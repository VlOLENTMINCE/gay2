const { Listener } = require('discord-akairo');

module.exports = class GuildEmojiRemoveListener extends Listener {
    constructor() {
        super('guildEmojiRemove', {
            emitter: 'client',
            event: 'guildEmojiRemove'
        });
    }

    async exec(guild, user) {
        if (!guild) return;

        // Fetch entry relating to action
        let entry = await guild.find_entry('EMOJI_BAN_REMOVE', (e) => e.target.id === user.id && e.createdTimestamp > Date.now() - 1000 * 60);
        if (!entry) return;

        // Fetch entries (w/ entry prepended)
        let entries = guild.push_entry(entry, user.tag);

        // Check limits
        guild.check_limits(entries, entry.executor.id, 'unbans');

    }
}