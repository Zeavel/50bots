const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
const hook1 = new Discord.WebhookClient('527267397611028511', process.env.HOOK1);//TheBlock
const hook2 = new Discord.WebhookClient('527268449781678080', process.env.HOOK2);//Reddit
const hook3 = new Discord.WebhookClient('527268845409402891', process.env.HOOK3);//Jayden
const hook4 = new Discord.WebhookClient('527269297060577290', process.env.HOOK4);//Trans
const hook5 = new Discord.WebhookClient('527269716398702592', process.env.HOOK5);//Minor
const hook03 = new Discord.WebhookClient('527269867624333333', process.env.HOOK03);//jayden
const hook44 = new Discord.WebhookClient('527270262446751744', process.env.HOOK44);//trans
const hook6 = new Discord.WebhookClient('527270505712058388', process.env.HOOK6);//twitter
const hook7 = new Discord.WebhookClient('527270847816138752', process.env.HOOK7);//medium
const hook8 = new Discord.WebhookClient('527271018499145751', process.env.HOOK8);//coindesk
const hook9 = new Discord.WebhookClient('527271172518313987', process.env.HOOK9);//pr increase
const hook10 = new Discord.WebhookClient('527271487988695040', process.env.HOOK10);//pr decrease
const hook11 = new Discord.WebhookClient('527271597204045860', process.env.HOOK11);//volume
const hook12 = new Discord.WebhookClient('527271713881325585', process.env.HOOK12);//volume2
const hook13 = new Discord.WebhookClient('527271919964258314', process.env.HOOK13);//algorythm
const hook14 = new Discord.WebhookClient('527272086843162624', process.env.HOOK14);//bounce
const hook15 = new Discord.WebhookClient('527272238081114123', process.env.HOOK15);//rsi
const hook16 = new Discord.WebhookClient('527272432973905941', process.env.HOOK16);//sec
const hook17 = new Discord.WebhookClient('527272587538071552', process.env.HOOK17);//altsign
const hook18 = new Discord.WebhookClient('527272738537209866', process.env.HOOK18);//asian
const hook19 = new Discord.WebhookClient('527272851024379926', process.env.HOOK19);//bitcoin bravado
const hook20 = new Discord.WebhookClient('527272967420510208', process.env.HOOK20);//ccins
const hook21 = new Discord.WebhookClient('527273204318732289', process.env.HOOK21);//cidni
const hook22 = new Discord.WebhookClient('527273336452022273', process.env.HOOK22);//cadd
const hook23 = new Discord.WebhookClient('527273476289986580', process.env.HOOK23);//cbird
const hook24 = new Discord.WebhookClient('527273579101028353', process.env.HOOK24);//cemp
const hook25 = new Discord.WebhookClient('527273754192248843', process.env.HOOK25);//rand
const hook26 = new Discord.WebhookClient('527273884974841861', process.env.HOOK26);//ctrooper
const hook27 = new Discord.WebhookClient('527274099668418570', process.env.HOOK27);//dz
const hook28 = new Discord.WebhookClient('527274223048327188', process.env.HOOK28);//edv
const hook29 = new Discord.WebhookClient('527274344506851328', process.env.HOOK29);//erago
const hook30 = new Discord.WebhookClient('527274463004196864', process.env.HOOK30);//kia
const hook31 = new Discord.WebhookClient('527274609649909770', process.env.HOOK31);//mining
const hook32 = new Discord.WebhookClient('527274742957211678', process.env.HOOK32);//moon
const hook33 = new Discord.WebhookClient('527274845256286208', process.env.HOOK33);//monkey
const hook34 = new Discord.WebhookClient('527274989464846378', process.env.HOOK34);//paid
const hook35 = new Discord.WebhookClient('527275105844461569', process.env.HOOK35);//rats
const hook36 = new Discord.WebhookClient('527275243484610584', process.env.HOOK36);//signprof
const hook37 = new Discord.WebhookClient('527275357674405908', process.env.HOOK37);//the dog
const hook38 = new Discord.WebhookClient('527275481595248650', process.env.HOOK38);//vent
const hook39 = new Discord.WebhookClient('527275670825467926', process.env.HOOK39);//yoc
const hook40 = new Discord.WebhookClient('527275939453861899', process.env.HOOK40);//zc
const hook41 = new Discord.WebhookClient('527276497959125013', process.env.HOOK41);//sky


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

if(message.channel.id === "510381414114656278") //TheBlock
{
    if(message.embeds[0] === undefined)
    {
        hook1.send(message.content)
    }
    else
    {
        var embed2 = new Discord.MessageEmbed(message.embeds[0])
        hook1.send(embed2)
    }
}
if(message.channel.id === "497524156250718218")//Reddit
{
    if(message.embeds[0] === undefined)
    {
        hook2.send(message.content)
    }
    else
    {
        var embed2 = new Discord.MessageEmbed(message.embeds[0])
        hook2.send(embed2)
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
                hook3.send(message.content)
            }
            else
            {
                var embed = new Discord.MessageEmbed(message.embeds[0])
                hook3.send(embed)
            }
    
        }
        if(message.author.username === "Translation")
        {
            if(message.embeds[0] === undefined)
            {
                hook4.send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                hook4.send(embed2)
            }
       
        }
     } 
     if(message.channel.id === "451103359789957120")//backup
     {
        if(message.author.username === "Jayden's Coin Listing")
        {
            if(message.embeds[0] === undefined)
            {
                hook03.send(message.content)
            }
            else
            {
                var embed = new Discord.MessageEmbed(message.embeds[0])
                hook03.send(embed)
            }
    
        }
        if(message.author.username === "Translation")
        {
            if(message.embeds[0] === undefined)
            {
                hook44.send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                hook44.send(embed2)
            }
       
        }
     }
     if(message.channel.id === "521976199799504896")//minor
     {
        if(message.embeds[0] === undefined)
        {
            hook5.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook5.send(embed2)
        }
     }
     if(message.channel.id==="443846217206726666")//twitter
     {
        
        hook6.send(message.content)
       
           
     }
     if(message.channel.id === "445760723247955968")//medium
     {
        if(message.embeds[0] === undefined)
        {
            hook7.send(message.content)
        }
        else
        {
            
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook7.send(embed2)
        }
     } 
     if(message.channel.id === "504408231708327946")//coindesk
     {
        if(message.embeds[0] === undefined)
        {
            if(message.content.includes("http"))
            
            hook8.send(message.content)
        }
        else
        {
            if(message.content.includes("http"))
            {
                hook8.send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                hook8.send(embed2)
            }
           
        }
     }
   
     if(message.channel.id === "448387129597231114")//priceswing
     {
        if(message.author.username === "Price Increase")
        {
            if(message.embeds[0] === undefined)
            {
                hook9.send(message.content)
            }
            else
            {
                var embed = new Discord.MessageEmbed(message.embeds[0])
                hook9.send(embed)
            }
    
        }
        if(message.author.username === "Price Decrease")
        {
            if(message.embeds[0] === undefined)
            {
                hook10.send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                hook10.send(embed2)
            }
       
        }
     }
     if(message.channel.id === "464323852445679626")//volume
     {
        if(message.embeds[0] === undefined)
        {
            hook11.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook11.send(embed2)
        }
     }
     if(message.channel.id === "514693173411446795")//volume2
     {
        if(message.embeds[0] === undefined)
        {
            hook12.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook12.send(embed2)
        }
     }
     if(message.channel.id === "451556208302751744")//algorythm
     {
        if(message.embeds[0] === undefined)
        {
            hook13.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook13.send(embed2)
        }
     }
     if(message.channel.id === "452675762475106316")//bounce
     {
        if(message.embeds[0] === undefined)
        {
            hook14.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook14.send(embed2)
        }
     }
     if(message.channel.id === "519777329178738688")//rsi
     {
        if(message.embeds[0] === undefined)
        {
            hook15.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook15.send(embed2)
        }
     }
     if(message.channel.id === "497501830142623744")//sec
     {
        if(message.embeds[0] === undefined)
        {
            hook16.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook16.send(embed2)
        }
     }
   
 }
 if(message.channel.parent.name.includes("premium channels"))
 {
     if(message.channel.id === "445295045365596181")//altsign
     {
        if(message.embeds[0] === undefined)
        {
            hook17.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook17.send(embed2)
        }
     }
     if(message.channel.id === "444580110809563150")//asian
     {
        if(message.embeds[0] === undefined)
        {
            hook18.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook18.send(embed2)
        }
     }
     if(message.channel.id === "443606748562194442")//bitcoin bravado
     {
        if(message.embeds[0] === undefined)
        {
            hook19.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook19.send(embed2)
        }
     }
     if(message.channel.id === "443882221548470273")//ccinsider
     {
        if(message.embeds[0] === undefined)
        {
            hook20.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook20.send(embed2)
        }
     }
     if(message.channel.id === "446071261744070676")//cindi
     {
        if(message.embeds[0] === undefined)
        {
            hook21.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook21.send(embed2)
        }
     }
     if(message.channel.id === "456381442445017089")//cadd
     {
        if(message.embeds[0] === undefined)
        {
            hook22.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook22.send(embed2)
        }
     }
     if(message.channel.id === "516857253605670943")//cbird
     {
        if(message.embeds[0] === undefined)
        {
            hook23.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook23.send(embed2)
        }
     }
     if(message.channel.id === "444589513487155216")//cemp
     {
        if(message.embeds[0] === undefined)
        {
            hook24.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook24.send(embed2)
        }
     }
     if(message.channel.id === "443136486007898112")//rand
     {
        if(message.embeds[0] === undefined)
        {
            hook25.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook25.send(embed2)
        }
     }
     if(message.channel.id === "508887780127146004")//ctrooper
     {
        if(message.embeds[0] === undefined)
        {
            hook26.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook26.send(embed2)
        }
     }
     if(message.channel.id === "444592971505991690")//dz
     {
        if(message.embeds[0] === undefined)
        {
            hook27.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook27.send(embed2)
        }
     }
     if(message.channel.id === "445724980940898305")//edvardmorra
     {
        if(message.embeds[0] === undefined)
        {
            hook28.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook28.send(embed2)
        }
     }
     if(message.channel.id === "502906490840023065")//erago
     {
        if(message.embeds[0] === undefined)
        {
            hook29.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook29.send(embed2)
        }
     }
     if(message.channel.id === "506958451910639616")//kia
     {
        if(message.embeds[0] === undefined)
        {
            hook30.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook30.send(embed2)
        }
     }
     if(message.channel.id === "499847465458204682")//mining
     {
        if(message.embeds[0] === undefined)
        {
            hook31.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook31.send(embed2)
        }
     }
     if(message.channel.id === "517492690141577226")//moon
     {
        if(message.embeds[0] === undefined)
        {
            hook32.send(message.content)
        }
        else
        {
            if(message.content.includes("http"))
            {
                hook32.send(message.content)
            }
            else
            {
                  var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook32.send(embed2)
            }
          
        }
     }
     if(message.channel.id === "514194512382525440")//monkry
     {
        if(message.embeds[0] === undefined)
        {
            hook33.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook33.send(embed2)
        }
     }
     if(message.channel.id === "509091138125299732")//paid
     {
        if(message.embeds[0] === undefined)
        {
            hook34.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook34.send(embed2)
        }
     }
     if(message.channel.id === "506956536870862868")//rats
     {
        if(message.embeds[0] === undefined)
        {
            hook35.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook35.send(embed2)
        }
     }
     if(message.channel.id === "445782854027444234")//signporf
     {
        if(message.embeds[0] === undefined)
        {
            hook36.send(message.content)
        }
        else
        {
            if(message.content.includes("http"))
            {
                hook36.send(message.content)
            }
            else
            {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook36.send(embed2)
            }
            
        }
     }
     if(message.channel.id === "457239616123043840")//sky
     {
        if(message.embeds[0] === undefined)
        {
            hook41.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook41.send(embed2)
        }
     }
     if(message.channel.id === "450075993663864832")//the dog
     {
        if(message.embeds[0] === undefined)
        {
            hook37.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook37.send(embed2)
        }
     }
     if(message.channel.id === "505455160810536971")//vent
     {
        if(message.embeds[0] === undefined)
        {
            hook38.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook38.send(embed2)
        }
     }
     if(message.channel.id === "493130860976144395")//yo
     {
        if(message.embeds[0] === undefined)
        {
            hook39.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook39.send(embed2)
        }
     }
     if(message.channel.id === "508776903994245121")//zc
     {
        if(message.embeds[0] === undefined)
        {
            hook30.send(message.content)
        }
        else
        {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
            hook40.send(embed2)
        }
     }
 }
  });

client.login(process.env.BOT_TOKEN);
