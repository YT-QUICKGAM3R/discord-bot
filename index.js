const Discord = require("discord.js");
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = 3000;

//fara 83
fara_headhsot_damage = 40
fara_chest_damage = 27
fara_shoulder_damage = 31
fara_extremities_damage = 31
fara_ADS = 269
fara_ADS_movement = 2.31
fara_movement = 4.67
fara_bullet_velocity = 600
fara_reload_time = 3.17
fara_mag_size = 30
fara_tac_sprint_to_fire_time = 392
fara_sprint_to_fire_time = 263
fara_hipfire_area = 16.5
fara_open_bolt_delay = 0

const FARA = new Discord.MessageEmbed()
  .setTitle('FARA 83')
  .setDescription('Here are the FARA 83 wepon stats')
  .addField('Headshot damage: ', fara_headhsot_damage)
  .addField('Chest damage: ', fara_chest_damage)
  .addField('Shoulder damage: ', fara_shoulder_damage)
  .addField('Extremities damage: ', fara_extremities_damage)
  .addField('ADS: ', fara_ADS + ' ms')
  .addField('ADS Movement: ', fara_ADS_movement + ' m/s')
  .addField('Movement: ', fara_movement +  'm/s')
  .addField('Bullet Velocity: ', fara_bullet_velocity + 'm/s')
  .addField('Reload Time: ', fara_reload_time + ' s')
  .addField('Mag Size: ', fara_mag_size)
  .addField('Tactical Sprint to Fire Time: ', fara_tac_sprint_to_fire_time + ' ms')
  .addField('Sprint to Fire Time: ', fara_hipfire_area + ' ms')
  .addField('Hipfire Area: ', fara_hipfire_area + ' kPixel^2')
  .addField('Open Bolt Delay: ', fara_open_bolt_delay + ' ms')
  .setImage('https://cdn.charlieintel.com/wp-content/uploads/2021/02/29133859/FARA-thumbnail-1024x576.jpg')
  

//ffar 1
ffar_headhsot_damage = 40
ffar_chest_damage = 31
ffar_shoulder_damage = 31
ffar_extremities_damage = 31
ffar_ADS = 300
ffar_ADS_movement = 2.42
ffar_movement = 4.69
ffar_bullet_velocity = 628
ffar_reload_time = 2.48
ffar_mag_size = 30
ffar_tac_sprint_to_fire_time = 392
ffar_sprint_to_fire_time = 263
ffar_hipfire_area = 16.5
ffar_open_bolt_delay = 0

const FARA = new Discord.MessageEmbed()
  .setTitle('FARA 83')
  .setDescription('Here are the FARA 83 wepon stats')
  .addField('Headshot damage: ', ffar_headhsot_damage)
  .addField('Chest damage: ', ffar_chest_damage)
  .addField('Shoulder damage: ', ffar_shoulder_damage)
  .addField('Extremities damage: ', ffar_extremities_damage)
  .addField('ADS: ', ffar_ADS + 'ms')
  .addField('ADS Movement: ', ffar_ADS_movement + 'm/s')
  .addField('Movement: ', ffar_movement + 'm/s')
  .addField('Bullet Velocity: ', ffar_bullet_velocity + 'm/s')
  .addField('Reload Time: ', ffar_reload_time + 's')
  .addField('Mag Size: ', ffar_mag_size)
  .addField('Tactical Sprint to Fire Time: ', ffar_tac_sprint_to_fire_time + 'ms')
  .addField('Sprint to Fire Time: ', ffar_hipfire_area + 'ms')
  .addField('Hipfire Area: ', ffar_hipfire_area + 'kPixel^2')
  .addField('Open Bolt Delay: ', ffar_open_bolt_delay + 'ms')
  .setImage('https://cdn.charlieintel.com/wp-content/uploads/2021/02/29133859/FARA-thumbnail-1024x576.jpg')



app.get('/', (req, res) => res.send('Hello Big Wide World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

prefix = '='
client.on('message', msg => {
  if (msg.author.bot) return;

  if (msg.content === `${prefix}FARA`) {
    msg.reply(FARA)
  }
  
  if (msg.content === prefix + 'speed') {  
    if (msg.member.roles.cache.some(role => role.name === 'Admin')){
      msg.channel
      .send(`Latency is:\n${Date.now() - msg.createdTimestamp}ms.\nAPI Latency is:\n${Math.round(client.ws.ping)}ms`)
      .then((sentMessage) => msg.delete({ timeout: 10000 }))
      .catch(console.error);
    }
  }

  if (msg.content === prefix + 'clear') {
    if (msg.member.roles.cache.some(role => role.name === 'Admin')){
      async function wipe() {
          var msg_size = 100;
          while (msg_size == 100) {
              await msg.channel.bulkDelete(100)
          .then(messages => msg_size = messages.size)
          .catch(console.error);
          }
      }
      wipe()
    }
  }

});

client.login(process.env.TOKEN);
