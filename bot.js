const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();



var Commandss = new CC.Commands();
var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}
function con(text)
{
    console.log(text)
}
function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}


client.on('message', message => {
 if(message.channel.parent.name.includes("Media / News")) 
 {
if(message.channel.id === "509863635171147796")
{
       
    if(message.author.username === "Kyte")
    {
        if(message.embeds[0] === undefined)
        {
            client2.guilds.get("525621262102298647").channels.get("525625427910459402").send(message.content)
        }
        else
        {
            var embed = new Discord.MessageEmbed(message.embeds[0])
            client2.guilds.get("525621262102298647").channels.get("525625427910459402").send(embed)
        }

    }
    if(message.author.username === "Airdrop")
    {
        if(message.embeds[0] === undefined)
        {
            client3.guilds.get("525621262102298647").channels.get("525625427910459402").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client3.guilds.get("525621262102298647").channels.get("525625427910459402").send(embed2)
        }
   
    }
}
if(message.channel.id === "510381414114656278") //TheBlock
{
    if(message.embeds[0] === undefined)
    {
        client4.guilds.get("525621262102298647").channels.get("525625475628793856").send(message.content)
    }
    else
    {
        var embed2 = new Discord.MessageEmbed(message.embeds[0])
        client4.guilds.get("525621262102298647").channels.get("525625475628793856").send(embed2)
    }
}
if(message.channel.id === "497524156250718218")//Reddit
{
    if(message.embeds[0] === undefined)
    {
        client5.guilds.get("525621262102298647").channels.get("525625633057800192").send(message.content)
    }
    else
    {
        var embed2 = new Discord.MessageEmbed(message.embeds[0])
        client5.guilds.get("525621262102298647").channels.get("525625633057800192").send(embed2)
    }
}
if(message.channel.id === "506235289442975754")//Calendar
{
    if(message.embeds[0] === undefined)
    {
        client6.guilds.get("525621262102298647").channels.get("525625582143406111").send(message.content)
    }
    else
    {
        var embed2 = new Discord.MessageEmbed(message.embeds[0])
        client6.guilds.get("525621262102298647").channels.get("525625582143406111").send(embed2)
    }
}
if(message.channel.id === "443142211983638531")//news
{
    if(message.embeds[0] === undefined)
    {
        client46.guilds.get("525621262102298647").channels.get("525628067402743832").send(message.content)
    }
    else
    {
        var embed2 = new Discord.MessageEmbed(message.embeds[0])
        client46.guilds.get("525621262102298647").channels.get("525628067402743832").send(embed2)
    }
}
 }
 if(message.channel.parent.name.includes("Premium Bot")) 
 {
     if(message.channel.id === "441492932399202305")//listening
     {
        if(message.author.username === "Jayden's Coin Listing")
        {
            if(message.embeds[0] === undefined)
            {
                client7.guilds.get("525621262102298647").channels.get("525626384295526410").send(message.content)
            }
            else
            {
                var embed = new Discord.MessageEmbed(message.embeds[0])
                client7.guilds.get("525621262102298647").channels.get("525626384295526410").send(embed)
            }
    
        }
        if(message.author.username === "Translation")
        {
            if(message.embeds[0] === undefined)
            {
                client8.guilds.get("525621262102298647").channels.get("525626384295526410").send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                client8.guilds.get("525621262102298647").channels.get("525626384295526410").send(embed2)
            }
       
        }
     } 
     if(message.channel.id === "451103359789957120")//backup
     {
        if(message.author.username === "Jayden's Coin Listing")
        {
            if(message.embeds[0] === undefined)
            {
                client7.guilds.get("525621262102298647").channels.get("525626438531940369").send(message.content)
            }
            else
            {
                var embed = new Discord.MessageEmbed(message.embeds[0])
                client7.guilds.get("525621262102298647").channels.get("525626438531940369").send(embed)
            }
    
        }
        if(message.author.username === "Translation")
        {
            if(message.embeds[0] === undefined)
            {
                client8.guilds.get("525621262102298647").channels.get("525626438531940369").send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                client8.guilds.get("525621262102298647").channels.get("525626438531940369").send(embed2)
            }
       
        }
     }
     if(message.channel.id === "521976199799504896")//minor
     {
        if(message.embeds[0] === undefined)
        {
            client9.guilds.get("525621262102298647").channels.get("525626480177315860").send(message.content)
        
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client9.guilds.get("525621262102298647").channels.get("525626480177315860").send(embed2)
        }
     }
     if(message.channel.id==="443846217206726666")//twitter
     {
        
            client10.guilds.get("525621262102298647").channels.get("525625778612994057").send(message.content)
       
           
     }
     if(message.channel.id === "445760723247955968")//medium
     {
        if(message.embeds[0] === undefined)
        {
            client11.guilds.get("525621262102298647").channels.get("525625699504095242").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client11.guilds.get("525621262102298647").channels.get("525625699504095242").send(embed2)
        }
     } 
     if(message.channel.id === "504408231708327946")//coindesk
     {
        if(message.embeds[0] === undefined)
        {
            client12.guilds.get("525621262102298647").channels.get("525625741040156701").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client12.guilds.get("525621262102298647").channels.get("525625741040156701").send(embed2)
        }
     }
     if(message.channel.id === "448387129597231114")//priceswing
     {
        if(message.author.username === "Price Increase")
        {
            if(message.embeds[0] === undefined)
            {
                client13.guilds.get("525621262102298647").channels.get("525625876910571520").send(message.content)
            }
            else
            {
                var embed = new Discord.MessageEmbed(message.embeds[0])
                client13.guilds.get("525621262102298647").channels.get("525625876910571520").send(embed)
            }
    
        }
        if(message.author.username === "Price Decrease")
        {
            if(message.embeds[0] === undefined)
            {
                client14.guilds.get("525621262102298647").channels.get("525625876910571520").send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                client14.guilds.get("525621262102298647").channels.get("525625876910571520").send(embed2)
            }
       
        }
     }
     if(message.channel.id === "464323852445679626")//volume
     {
        if(message.embeds[0] === undefined)
        {
            client15.guilds.get("525621262102298647").channels.get("525626183363067915").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client15.guilds.get("525621262102298647").channels.get("525626183363067915").send(embed2)
        }
     }
     if(message.channel.id === "514693173411446795")//volume2
     {
        if(message.embeds[0] === undefined)
        {
            client16.guilds.get("525621262102298647").channels.get("525626231471865867").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client16.guilds.get("525621262102298647").channels.get("525626231471865867").send(embed2)
        }
     }
     if(message.channel.id === "451556208302751744")//algorythm
     {
        if(message.embeds[0] === undefined)
        {
            client17.guilds.get("525621262102298647").channels.get("525626291353944074").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client17.guilds.get("525621262102298647").channels.get("525626291353944074").send(embed2)
        }
     }
     if(message.channel.id === "452675762475106316")//bounce
     {
        if(message.embeds[0] === undefined)
        {
            client18.guilds.get("525621262102298647").channels.get("525626319417901066").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client18.guilds.get("525621262102298647").channels.get("525626319417901066").send(embed2)
        }
     }
     if(message.channel.id === "519777329178738688")//rsi
     {
        if(message.embeds[0] === undefined)
        {
            client19.guilds.get("525621262102298647").channels.get("525626343526891520").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client19.guilds.get("525621262102298647").channels.get("525626343526891520").send(embed2)
        }
     }
     if(message.channel.id === "497501830142623744")//sec
     {
        if(message.embeds[0] === undefined)
        {
            client20.guilds.get("525621262102298647").channels.get("525625817586204683").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client20.guilds.get("525621262102298647").channels.get("525625817586204683").send(embed2)
        }
     }
   
 }
 if(message.channel.parent.name.includes("premium channels"))
 {
     if(message.channel.id === "445295045365596181")//altsign
     {
        if(message.embeds[0] === undefined)
        {
            client21.guilds.get("525621262102298647").channels.get("525626537483960321").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client21.guilds.get("525621262102298647").channels.get("525626537483960321").send(embed2)
        }
     }
     if(message.channel.id === "444580110809563150")//asian
     {
        if(message.embeds[0] === undefined)
        {
            client22.guilds.get("525621262102298647").channels.get("525626588092694528").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client22.guilds.get("525621262102298647").channels.get("525626588092694528").send(embed2)
        }
     }
     if(message.channel.id === "443606748562194442")//bitcoin bravado
     {
        if(message.embeds[0] === undefined)
        {
            client23.guilds.get("525621262102298647").channels.get("525626642479972362").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client23.guilds.get("525621262102298647").channels.get("525626642479972362").send(embed2)
        }
     }
     if(message.channel.id === "443882221548470273")//ccinsider
     {
        if(message.embeds[0] === undefined)
        {
            client24.guilds.get("525621262102298647").channels.get("525626684079210511").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client24.guilds.get("525621262102298647").channels.get("525626684079210511").send(embed2)
        }
     }
     if(message.channel.id === "446071261744070676")//cindi
     {
        if(message.embeds[0] === undefined)
        {
            client25.guilds.get("525621262102298647").channels.get("525627998406311936").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client25.guilds.get("525621262102298647").channels.get("525627998406311936").send(embed2)
        }
     }
     if(message.channel.id === "456381442445017089")//cadd
     {
        if(message.embeds[0] === undefined)
        {
            client26.guilds.get("525621262102298647").channels.get("525626754807627786").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client26.guilds.get("525621262102298647").channels.get("525626754807627786").send(embed2)
        }
     }
     if(message.channel.id === "516857253605670943")//cbird
     {
        if(message.embeds[0] === undefined)
        {
            client27.guilds.get("525621262102298647").channels.get("525626816677937153").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client27.guilds.get("525621262102298647").channels.get("525626816677937153").send(embed2)
        }
     }
     if(message.channel.id === "444589513487155216")//cemp
     {
        if(message.embeds[0] === undefined)
        {
            client28.guilds.get("525621262102298647").channels.get("525626894415298580").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client28.guilds.get("525621262102298647").channels.get("525626894415298580").send(embed2)
        }
     }
     if(message.channel.id === "443136486007898112")//rand
     {
        if(message.embeds[0] === undefined)
        {
            client29.guilds.get("525621262102298647").channels.get("525626946374205460").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client29.guilds.get("525621262102298647").channels.get("525626946374205460").send(embed2)
        }
     }
     if(message.channel.id === "508887780127146004")//ctrooper
     {
        if(message.embeds[0] === undefined)
        {
            client30.guilds.get("525621262102298647").channels.get("525626993413324810").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client30.guilds.get("525621262102298647").channels.get("525626993413324810").send(embed2)
        }
     }
     if(message.channel.id === "444592971505991690")//dz
     {
        if(message.embeds[0] === undefined)
        {
            client31.guilds.get("525621262102298647").channels.get("525627039051546625").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client31.guilds.get("525621262102298647").channels.get("525627039051546625").send(embed2)
        }
     }
     if(message.channel.id === "445724980940898305")//edvardmorra
     {
        if(message.embeds[0] === undefined)
        {
            client32.guilds.get("525621262102298647").channels.get("525627115152867329").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client32.guilds.get("525621262102298647").channels.get("525627115152867329").send(embed2)
        }
     }
     if(message.channel.id === "502906490840023065")//erago
     {
        if(message.embeds[0] === undefined)
        {
            client33.guilds.get("525621262102298647").channels.get("525627167506300928").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client33.guilds.get("525621262102298647").channels.get("525627167506300928").send(embed2)
        }
     }
     if(message.channel.id === "506958451910639616")//kia
     {
        if(message.embeds[0] === undefined)
        {
            client34.guilds.get("525621262102298647").channels.get("525627210175086612").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client34.guilds.get("525621262102298647").channels.get("525627210175086612").send(embed2)
        }
     }
     if(message.channel.id === "499847465458204682")//mining
     {
        if(message.embeds[0] === undefined)
        {
            client35.guilds.get("525621262102298647").channels.get("525627469945110528").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client35.guilds.get("525621262102298647").channels.get("525627469945110528").send(embed2)
        }
     }
     if(message.channel.id === "517492690141577226")//moon
     {
        if(message.embeds[0] === undefined)
        {
            client36.guilds.get("525621262102298647").channels.get("525627252663386122").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client36.guilds.get("525621262102298647").channels.get("525627252663386122").send(embed2)
        }
     }
     if(message.channel.id === "514194512382525440")//monkry
     {
        if(message.embeds[0] === undefined)
        {
            client37.guilds.get("525621262102298647").channels.get("525627291766620191").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client37.guilds.get("525621262102298647").channels.get("525627291766620191").send(embed2)
        }
     }
     if(message.channel.id === "509091138125299732")//paid
     {
        if(message.embeds[0] === undefined)
        {
            client38.guilds.get("525621262102298647").channels.get("525627358670094346").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client38.guilds.get("525621262102298647").channels.get("525627358670094346").send(embed2)
        }
     }
     if(message.channel.id === "506956536870862868")//rats
     {
        if(message.embeds[0] === undefined)
        {
            client39.guilds.get("525621262102298647").channels.get("525627911881883666").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client39.guilds.get("525621262102298647").channels.get("525627911881883666").send(embed2)
        }
     }
     if(message.channel.id === "445782854027444234")//signporf
     {
        if(message.embeds[0] === undefined)
        {
            client40.guilds.get("525621262102298647").channels.get("525627809574420490").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client40.guilds.get("525621262102298647").channels.get("525627809574420490").send(embed2)
        }
     }
     if(message.channel.id === "457239616123043840")//sky
     {
        if(message.embeds[0] === undefined)
        {
            client41.guilds.get("525621262102298647").channels.get("525627962515521536").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client41.guilds.get("525621262102298647").channels.get("525627962515521536").send(embed2)
        }
     }
     if(message.channel.id === "450075993663864832")//the dog
     {
        if(message.embeds[0] === undefined)
        {
            client42.guilds.get("525621262102298647").channels.get("525627516929441792").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client42.guilds.get("525621262102298647").channels.get("525627516929441792").send(embed2)
        }
     }
     if(message.channel.id === "505455160810536971")//vent
     {
        if(message.embeds[0] === undefined)
        {
            client43.guilds.get("525621262102298647").channels.get("525627599754493962").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client43.guilds.get("525621262102298647").channels.get("525627599754493962").send(embed2)
        }
     }
     if(message.channel.id === "493130860976144395")//yo
     {
        if(message.embeds[0] === undefined)
        {
            client44.guilds.get("525621262102298647").channels.get("525627689055420426").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client44.guilds.get("525621262102298647").channels.get("525627689055420426").send(embed2)
        }
     }
     if(message.channel.id === "508776903994245121")//zc
     {
        if(message.embeds[0] === undefined)
        {
            client45.guilds.get("525621262102298647").channels.get("525627689055420426").send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            client45.guilds.get("525621262102298647").channels.get("525627689055420426").send(embed2)
        }
     }
    var ch = client.guilds.get("524167159128129537").channels.find("name", message.channel.name)
       
    client.guilds.get("524167159128129537").channels.get(ch.id).send(message.content) 
 }
  });

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
client5.login(process.env.BOT_TOKEN5);
client6.login(process.env.BOT_TOKEN6);
client7.login(process.env.BOT_TOKEN7);
client8.login(process.env.BOT_TOKEN8);
client9.login(process.env.BOT_TOKEN9);
client10.login(process.env.BOT_TOKEN10);
client11.login(process.env.BOT_TOKEN11);
client12.login(process.env.BOT_TOKEN12);
client13.login(process.env.BOT_TOKEN13);
client14.login(process.env.BOT_TOKEN14);
client15.login(process.env.BOT_TOKEN15);
client16.login(process.env.BOT_TOKEN16);
client17.login(process.env.BOT_TOKEN17);
client18.login(process.env.BOT_TOKEN18);
client19.login(process.env.BOT_TOKEN19);
client20.login(process.env.BOT_TOKEN20);
client21.login(process.env.BOT_TOKEN21);
client22.login(process.env.BOT_TOKEN22);
client23.login(process.env.BOT_TOKEN23);
client24.login(process.env.BOT_TOKEN24);
client25.login(process.env.BOT_TOKEN25);
client26.login(process.env.BOT_TOKEN26);
client27.login(process.env.BOT_TOKEN27);
client28.login(process.env.BOT_TOKEN28);
client29.login(process.env.BOT_TOKEN29);
client30.login(process.env.BOT_TOKEN30);
client31.login(process.env.BOT_TOKEN31);
client32.login(process.env.BOT_TOKEN32);
client33.login(process.env.BOT_TOKEN33);
client34.login(process.env.BOT_TOKEN34);
client35.login(process.env.BOT_TOKEN35);
client36.login(process.env.BOT_TOKEN36);
client37.login(process.env.BOT_TOKEN37);
client38.login(process.env.BOT_TOKEN38);
client39.login(process.env.BOT_TOKEN39);
client40.login(process.env.BOT_TOKEN40);
client41.login(process.env.BOT_TOKEN41);
client42.login(process.env.BOT_TOKEN42);
client43.login(process.env.BOT_TOKEN43);
client44.login(process.env.BOT_TOKEN44);
client45.login(process.env.BOT_TOKEN45);
client46.login(process.env.BOT_TOKEN46);


