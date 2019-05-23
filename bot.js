const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;
const hook1 = new Discord.WebhookClient('532961522973147146', process.env.HOOK1);//TheBlock
const hook2 = new Discord.WebhookClient('532962198088318976', process.env.HOOK2);//Reddit
const hook3 = new Discord.WebhookClient('532962943814336513', process.env.HOOK3);//Jayden
const hook4 = new Discord.WebhookClient('532962980216700951', process.env.HOOK4);//Trans
const hook5 = new Discord.WebhookClient('532967361721139201', process.env.HOOK5);//Minor
const hook03 = new Discord.WebhookClient('532966700631719965', process.env.HOOK03);//jayden
const hook44 = new Discord.WebhookClient('532966740112572438', process.env.HOOK44);//trans
const hook6 = new Discord.WebhookClient('532967617883799583', process.env.HOOK6);//twitter
const hook7 = new Discord.WebhookClient('532967846133891073', process.env.HOOK7);//medium
const hook8 = new Discord.WebhookClient('532968118369386507', process.env.HOOK8);//coindesk
const hook9 = new Discord.WebhookClient('532968366827110422', process.env.HOOK9);//pr increase
const hook10 = new Discord.WebhookClient('532968406966730752', process.env.HOOK10);//pr decrease
const hook11 = new Discord.WebhookClient('532968931271639041', process.env.HOOK11);//volume
const hook12 = new Discord.WebhookClient('532969068228116481', process.env.HOOK12);//volume2
const hook13 = new Discord.WebhookClient('532969259882643486', process.env.HOOK13);//algorythm
const hook14 = new Discord.WebhookClient('532969535553142806', process.env.HOOK14);//bounce
const hook15 = new Discord.WebhookClient('532969687311581185', process.env.HOOK15);//rsi
const hook16 = new Discord.WebhookClient('532969861023006751', process.env.HOOK16);//sec
const hook17 = new Discord.WebhookClient('532970023522926625', process.env.HOOK17);//altsign
const hook18 = new Discord.WebhookClient('532970195556368392', process.env.HOOK18);//asian
const hook19 = new Discord.WebhookClient('532970364737683466', process.env.HOOK19);//bitcoin bravado
const hook20 = new Discord.WebhookClient('532970549610020874', process.env.HOOK20);//ccins
const hook21 = new Discord.WebhookClient('532970734981611530', process.env.HOOK21);//cidni
const hook22 = new Discord.WebhookClient('532970878565220352', process.env.HOOK22);//cadd
const hook23 = new Discord.WebhookClient('532971038238179351', process.env.HOOK23);//cbird
const hook24 = new Discord.WebhookClient('532971192009752577', process.env.HOOK24);//cemp
const hook25 = new Discord.WebhookClient('532971324365340674', process.env.HOOK25);//rand
const hook26 = new Discord.WebhookClient('532971469945176095', process.env.HOOK26);//ctrooper
const hook27 = new Discord.WebhookClient('532971664661807134', process.env.HOOK27);//dz
const hook28 = new Discord.WebhookClient('532971799777116181', process.env.HOOK28);//edv
const hook29 = new Discord.WebhookClient('532971932497346580', process.env.HOOK29);//erago
const hook30 = new Discord.WebhookClient('532972064739688448', process.env.HOOK30);//kia
const hook31 = new Discord.WebhookClient('532972216464310307', process.env.HOOK31);//mining
const hook32 = new Discord.WebhookClient('532972368591847432', process.env.HOOK32);//moon
const hook33 = new Discord.WebhookClient('532972528638099491', process.env.HOOK33);//monkey
const hook34 = new Discord.WebhookClient('532972700176744458', process.env.HOOK34);//paid
const hook35 = new Discord.WebhookClient('532972861829414933', process.env.HOOK35);//rats
const hook36 = new Discord.WebhookClient('532972992628654108', process.env.HOOK36);//signprof
const hook37 = new Discord.WebhookClient('532973125839880201', process.env.HOOK37);//the dog
const hook38 = new Discord.WebhookClient('532973276604137472', process.env.HOOK38);//vent
const hook39 = new Discord.WebhookClient('532973430291824660', process.env.HOOK39);//yoc
const hook40 = new Discord.WebhookClient('532973571115450378', process.env.HOOK40);//zc
const hook41 = new Discord.WebhookClient('532973694658805780', process.env.HOOK41);//sky
const hooke = new Discord.WebhookClient('543526892221890560', process.env.HOOKE);//overbought
const dog_pound = new Discord.WebhookClient('580339917658390528', process.env.DOG_POUND_BACKUP);//-
const fatpig_vip = new Discord.WebhookClient('580339917670973442', process.env.FATPIG_VIP_BACKUP);//
const golden_premium = new Discord.WebhookClient('580339917687750677', process.env.GOLDEN_PREMIUM);//w-
const slime_calls = new Discord.WebhookClient('580339917729693735', process.env.SLIME_CALLS);//
const yocrypto = new Discord.WebhookClient('580339917742407681', process.env.YO_CRYPTO_BACKUP);//--
const ninja = new Discord.WebhookClient('580339917754728449', process.env.NINJA);//-
const wolfpack_alts = new Discord.WebhookClient('580339917771767809', process.env.WOLFPACK_ALTS);//-
const cryptocue = new Discord.WebhookClient('580339917784088578', process.env.CRYPTOCUE_BAKCUP);//-
const alan_masters = new Discord.WebhookClient('580339917805191179', process.env.ALAN_MASTERS);//--
const cc_insiders = new Discord.WebhookClient('580339917813710848', process.env.CC_INSIDERS_BACKUP);//--
const cryptomist = new Discord.WebhookClient('580339917821968409', process.env.CRYPTOMIST);//-
const crypto_vip_zone = new Discord.WebhookClient('580339917826031617', process.env.CRYPTO_VIP_ZONE);//---
const crypto_kirby = new Discord.WebhookClient('580339917826162689', process.env.CRYPTO_KIRBY);//--
const info_crypto_signals_bot = new Discord.WebhookClient('580339917834551317', process.env.INFO_CRYPTO_SIGNALS_BOT);//
const rose_bitmex = new Discord.WebhookClient('580339917842808863', process.env.ROSE_BITMEX);//
const ozelcup_vip = new Discord.WebhookClient('580339917851459586', process.env.OZELCUP_VIP);//
const krs_paid = new Discord.WebhookClient('580339917872431104', process.env.KRS_PAID);//--
const bravado_trades = new Discord.WebhookClient('580339917884882944', process.env.BRAVADO_TRADERS);//---
const bitmex_wizard = new Discord.WebhookClient('580339917914112031', process.env.BITMEX_WIZARD);//-
const alt_masters = new Discord.WebhookClient('580339917922762753', process.env.ALT_MASTERS);//b---
const whale_tank = new Discord.WebhookClient('580339917997998080', process.env.WHALE_TANK);//-
const cryptocoins = new Discord.WebhookClient('580339918044135425', process.env.CRYPTOCOINS);//-
const crypto_picasso = new Discord.WebhookClient('580339918056849418', process.env.CRYPTO_PICASSO);//-
const trading_crypto_coach = new Discord.WebhookClient('580339918056980500', process.env.TRADING_CRYPTO_COACH);//
const ibc = new Discord.WebhookClient('580339918086340609', process.env.IBC);//
const bitqueen = new Discord.WebhookClient('580339918090403850', process.env.BITQUEEN_BACKUP);//-
const antimex = new Discord.WebhookClient('580339918098923520', process.env.ANTIMEX);//-
const cryptochoe = new Discord.WebhookClient('580339918111375370', process.env.CRYPTOCHOE);//--
const crypo_addicts_margin = new Discord.WebhookClient('580339918119763968', process.env.CRYPO_ADDICTS_MARGIN);//L-
const crypto_signals_premium = new Discord.WebhookClient('580339918132346880', process.env.CRYPTO_SIGNALS_PREMIUM);//-
const rose_alt = new Discord.WebhookClient('580339918136541185', process.env.ROSE_ALT);//-
const rats_premium_signals = new Discord.WebhookClient('580339918136541214', process.env.RATS_PREMIUM_SIGNALS_BACKUP);//-
const klondike_margin = new Discord.WebhookClient('580339918140604429', process.env.KLONDIKE_MARGIN);//
const skyrock_signals = new Discord.WebhookClient('580339918144798720', process.env.SKYROCK_SIGNALS_BACKUP);//--

const bitmex_calls = new Discord.WebhookClient('580339918144929792', process.env.BITMEX_CALLS);//-
const max_gains = new Discord.WebhookClient('580339918169964544', process.env.MAX_GAINS);//-
const btc_syndicate = new Discord.WebhookClient('580339918169964555', process.env.BTC_SYNDICATE);//
const zephyr_crypto = new Discord.WebhookClient('580339918174421032', process.env.ZEPHYR_CRYPTO);//
const kia_vip = new Discord.WebhookClient('580339918178484225', process.env.KIA_VIP);//
const bitmex_lifestyle = new Discord.WebhookClient('580339918182547459', process.env.BITMEX_LIFESTYLE);//-
const coinscoach = new Discord.WebhookClient('580339918195392512', process.env.COINSCOACH);//--
const paidadvisory = new Discord.WebhookClient('580339918195392522', process.env.PAID_ADVISORY_BACKUP);//--
const margin_whale = new Discord.WebhookClient('580339918203518976', process.env.MARGIN_WHALE);//
const premium_signals = new Discord.WebhookClient('580339918207713290', process.env.PREMIUM_SIGNALS);//--
const coin_trading = new Discord.WebhookClient('580339918207844372', process.env.COIN_TRADING);//
const insiders_club = new Discord.WebhookClient('580339918249787402', process.env.INSIDERS_CLUB);//
const wiz_scalps = new Discord.WebhookClient('580339918249787403', process.env.WIZ_SCALPS);//
const oriental_whales = new Discord.WebhookClient('580339918253981706', process.env.ORIENTAL_WHALES);//-
const cryptomedics = new Discord.WebhookClient('580339918291861505', process.env.CRYPTOMEDICS);//
const bitmex_saviour = new Discord.WebhookClient('580339918312570880', process.env.BITMEX_SAVIOUR);//-
const bps = new Discord.WebhookClient('580339925686288386', process.env.BPS);//
const info_crypto_signals = new Discord.WebhookClient('580339925824700416', process.env.INFO_CRYPTO_SIGNALS);//-
const binance_vip = new Discord.WebhookClient('580339925891809281', process.env.BINANCE_VIP);//-
const cryptommedics = new Discord.WebhookClient('580339925996666899', process.env.CRYPTOMMEDICS);//
const dz871 = new Discord.WebhookClient('580339926005186591', process.env.DZ871_BACKUP);//---
const whales_crypto_vip = new Discord.WebhookClient('580339926042804234', process.env.WHALES_CRYPTO_VIP);//
const alts_saviour = new Discord.WebhookClient('580339926134947841', process.env.ALTS_SAVIOUR);//
const crypto_birb = new Discord.WebhookClient('580339926156181553', process.env.CRYPTO_BIRB_BACKUP);//
const jeekis = new Discord.WebhookClient('580339926172696576', process.env.JEEKIS);//
const bitmex_experts = new Discord.WebhookClient('580339926185279488', process.env.BITMEX_EXPERTS);
const credible_crypto = new Discord.WebhookClient('580339926189604904', process.env.CREDIBLE_CRYPTO);
const wolf_pack_margin = new Discord.WebhookClient('580339926197862415', process.env.WOLF_PACK_MARGIN);
const klondile_alts = new Discord.WebhookClient('580339926231678976', process.env.KLONDILE_ALTS);
const crypto_addicts_alts = new Discord.WebhookClient('580339926239805450', process.env.CRYPTO_ADDICTS_ALTS);
const palm_venice_beach = new Discord.WebhookClient('580339926244130836', process.env.PALM_VENICE_BEACH);
const bravado_margin = new Discord.WebhookClient('580339926256844800', process.env.BRAVADO_MARGIN);
const vip_crypto_signals = new Discord.WebhookClient('580339926298787840', process.env.VIP_CRYPTO_SIGNALS);
const zcrypto = new Discord.WebhookClient('580339926315433984', process.env.ZCRYPTO_BACKUP);








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

bot.on("ready", r=>{ 
            function sec() {
                bot.guilds.get('525621262102298647').channels.get('532960863645204495').fetchMessage("532975632012017691")
                .then(msg => {
                    var slova = msg.content
                    if(slova.includes(","))
                    {
                        var users = slova.split(",")
                        for(i=0;i<users.length;i++)
                        {
                            console.log(slova.slice(0, -1))
                            if(!users[i].includes(":"))
                            {
                                 msg.edit(slova.replace(slova, slova.slice(1, -1)))
                            }
                            else
                            {
                                  var splite = users[i].split(":")
                            var user = splite[0].replace(/[ ]/g,"").trim()
                            var time = splite[1].replace(/[ ]/g,"").trim()
                            var data = new Date().getTime()
                            var temp;
                            if(i==users.length-1)
                            {
                             temp = user +":"+time 
                            }
                            else
                            {
                             temp = user +":"+time+","   
                            }
                            
                            if(time<data)
                            {
                                console.log(bot.guilds.get('525621262102298647').members.get(user))
                               bot.guilds.get('525621262102298647').members.get(user).removeRole("525692857357697024")
                                msg.edit(slova.replace(temp, "".trim()))
                            }
                            }
                          
                           
                        }
                    }
                    
                })
              
               
                }
                
        setInterval(sec,60000)
                    
                     
         })
client.on('message', message => {
 if(message.channel.parent.name.includes("Media / News")) 
 {

if(message.channel.id === "510381414114656278") //TheBlock
{
    if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook1.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook1.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
           
                if(message.content == "")
                {
                    hook1.send(embed2)
                }
                else
                {
                    hook1.send(message.content)
                    hook1.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook1.send(message.content)
            
        }
 
}
if(message.channel.id === "497524156250718218")//Reddit
{
    if(message.embeds.toString() != "") //���������, ���� ���� embed
    {
       if(message.content.startsWith("http"))
       {
        hook2.send(message.content)
       }
       else
       {
           if(message.content.includes("http"))
           {
            hook2.send(message.content)
           }
           else
           {
            var embed2 = new Discord.MessageEmbed(message.embeds[0])
       
            if(message.content == "")
            {
                hook2.send(embed2)
            }
            else
            {
                hook2.send(message.content)
                hook2.send(embed2)

            }
        
           }

       }
    }
    else
    {
        
        hook2.send(message.content)
        
    }
}

 }
 if(message.channel.parent.name.includes("Premium Bot")) 
 {
     if(message.channel.id === "441492932399202305")//listening
     {
        if(message.author.username === "Jayden's Coin Listing")
        {
            if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook3.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook3.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
        
                if(message.content == "")
                {
                    hook3.send(embed2)
                }
                else
                {
                    hook3.send(message.content)
                    hook3.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook3.send(message.content)
            
        }
    
        }
        if(message.author.username === "Translation")
        {
            if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook4.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook4.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook4.send(embed2)
                }
                else
                {
                    hook4.send(message.content)
                    hook4.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook4.send(message.content)
            
        }
       
        }
     } 
     if(message.channel.id === "451103359789957120")//backup
     {
        if(message.author.username === "Jayden's Coin Listing")
        {
            if(message.embeds.toString() != "") //���������, ���� ���� embed
            {
               if(message.content.startsWith("http"))
               {
                hook03.send(message.content)
               }
               else
               {
                   if(message.content.includes("http"))
                   {
                    hook03.send(message.content)
                   }
                   else
                   {
                    var embed2 = new Discord.MessageEmbed(message.embeds[0])
             
                    if(message.content == "")
                    {
                        hook03.send(embed2)
                    }
                    else
                    {
                        hook03.send(message.content)
                        hook03.send(embed2)
        
                    }
                
                   }
        
               }
            }
            else
            {
                
                hook03.send(message.content)
                
            }
    
        }
        if(message.author.username === "Translation")
        {
            if(message.embeds.toString() != "") //���������, ���� ���� embed
            {
               if(message.content.startsWith("http"))
               {
                hook44.send(message.content)
               }
               else
               {
                   if(message.content.includes("http"))
                   {
                    hook44.send(message.content)
                   }
                   else
                   {
                    var embed2 = new Discord.MessageEmbed(message.embeds[0])
           
                    if(message.content == "")
                    {
                        hook44.send(embed2)
                    }
                    else
                    {
                        hook44.send(message.content)
                        hook44.send(embed2)
        
                    }
                
                   }
        
               }
            }
            else
            {
                
                hook44.send(message.content)
                
            }
       
        }
     }
     if(message.channel.id === "521976199799504896")//minor
     {
        if(message.embeds.length == 1)
           {
               if(message.embeds[0].type !== "rich")
               {
                hook5.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
               
                if(message.content == "")
                {
                    hook5.send(embed2)
                }
                else
                {
                    hook5.send(message.content)
                    hook5.send(embed2)
    
                }
               }
           }
           else
           {
            hook5.send(message.content)
           }
       
     }
     if(message.channel.id==="443846217206726666")//twitter
     {
        
        hook6.send(message.content)
       
           
     }
     if(message.channel.id === "445760723247955968")//medium
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook7.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook7.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
      
                if(message.content == "")
                {
                    hook7.send(embed2)
                }
                else
                {
                    hook7.send(message.content)
                    hook7.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook7.send(message.content)
            
        }
     } 
     if(message.channel.id === "504408231708327946")//coindesk
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
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
             
                if(message.content == "")
                {
                    hook8.send(embed2)
                }
                else
                {
                    hook8.send(message.content)
                    hook8.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook8.send(message.content)
            
        }
     }
   
     if(message.channel.id === "448387129597231114")//priceswing
     {
        if(message.author.username === "Price Increase")
        {
            if(message.embeds.toString() != "") //���������, ���� ���� embed
            {
               if(message.content.startsWith("http"))
               {
                hook9.send(message.content)
               }
               else
               {
                   if(message.content.includes("http"))
                   {
                    hook9.send(message.content)
                   }
                   else
                   {
                    var embed2 = new Discord.MessageEmbed(message.embeds[0])
                  
                    if(message.content == "")
                    {
                        hook9.send(embed2)
                    }
                    else
                    {
                        hook9.send(message.content)
                        hook9.send(embed2)
        
                    }
                
                   }
        
               }
            }
            else
            {
                
                hook9.send(message.content)
                
            }
    
        }
        if(message.author.username === "Price Decrease")
        {
            if(message.embeds.toString() != "") //���������, ���� ���� embed
            {
               if(message.content.startsWith("http"))
               {
                hook10.send(message.content)
               }
               else
               {
                   if(message.content.includes("http"))
                   {
                    hook10.send(message.content)
                   }
                   else
                   {
                    var embed2 = new Discord.MessageEmbed(message.embeds[0])
                   
                    if(message.content == "")
                    {
                        hook10.send(embed2)
                    }
                    else
                    {
                        hook10.send(message.content)
                        hook10.send(embed2)
        
                    }
                
                   }
        
               }
            }
            else
            {
                
                hook10.send(message.content)
                
            }
        }
     }
     if(message.channel.id === "464323852445679626")//volume
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook11.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook11.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
           
                if(message.content == "")
                {
                    hook11.send(embed2)
                }
                else
                {
                    hook11.send(message.content)
                    hook11.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook11.send(message.content)
            
        }
     }
     if(message.channel.id === "514693173411446795")//volume2
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook12.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook12.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
        
                if(message.content == "")
                {
                    hook12.send(embed2)
                }
                else
                {
                    hook12.send(message.content)
                    hook12.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook12.send(message.content)
            
        }
     }
     if(message.channel.id === "451556208302751744")//algorythm
     {
         if(message.author.username === "Jayden Algorithm Trading")
         {
                  if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook13.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook13.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
         
                if(message.content == "")
                {
                    hook13.send(embed2)
                }
                else
                {
                    hook13.send(message.content)
                    hook13.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook13.send(message.content)
            
        }
         }
    if(message.author.username === "Overbought")
         {
             if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hooke.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hooke.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hooke.send(embed2)
                }
                else
                {
                    hooke.send(message.content)
                    hooke.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hooke.send(message.content)
            
        }
         }
     }
     if(message.channel.id === "452675762475106316")//bounce
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook14.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook14.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
          
                if(message.content == "")
                {
                    hook14.send(embed2)
                }
                else
                {
                    hook14.send(message.content)
                    hook14.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook14.send(message.content)
            
        }
     }
     if(message.channel.id === "519777329178738688")//rsi
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook15.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook15.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
      
                if(message.content == "")
                {
                    hook15.send(embed2)
                }
                else
                {
                    hook15.send(message.content)
                    hook15.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook15.send(message.content)
            
        }
     }
     if(message.channel.id === "497501830142623744")//sec
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook16.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook16.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
          
                if(message.content == "")
                {
                    hook16.send(embed2)
                }
                else
                {
                    hook16.send(message.content)
                    hook16.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook16.send(message.content)
            
        }
     }
   
 }
 if(message.channel.parent.name.includes("premium channels"))
 {
     if(message.channel.id === "445295045365596181")//altsign
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook17.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook17.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
          
                if(message.content == "")
                {
                    hook17.send(embed2)
                }
                else
                {
                    hook17.send(message.content)
                    hook17.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook17.send(message.content)
            
        }
     }
     if(message.channel.id === "444580110809563150")//asian
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook18.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook1.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
           
                if(message.content == "")
                {
                    hook18.send(embed2)
                }
                else
                {
                    hook18.send(message.content)
                    hook18.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook18.send(message.content)
            
        }
     }
     if(message.channel.id === "443606748562194442")//bitcoin bravado
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook19.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook1.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
             
                if(message.content == "")
                {
                    hook19.send(embed2)
                }
                else
                {
                    hook19.send(message.content)
                    hook19.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook19.send(message.content)
            
        }
     }
     if(message.channel.id === "443882221548470273")//ccinsider
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook20.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook20.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
               
                if(message.content == "")
                {
                    hook20.send(embed2)
                }
                else
                {
                    hook20.send(message.content)
                    hook20.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook20.send(message.content)
            
        }
     }
     if(message.channel.id === "446071261744070676")//cindi
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook21.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook21.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
        
                if(message.content == "")
                {
                    hook21.send(embed2)
                }
                else
                {
                    hook21.send(message.content)
                    hook21.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook21.send(message.content)
            
        }
     }
     if(message.channel.id === "456381442445017089")//cadd
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook22.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook22.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
         
                if(message.content == "")
                {
                    hook22.send(embed2)
                }
                else
                {
                    hook22.send(message.content)
                    hook22.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook22.send(message.content)
            
        }
     }
     if(message.channel.id === "516857253605670943")//cbird
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook23.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook23.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook23.send(embed2)
                }
                else
                {
                    hook23.send(message.content)
                    hook23.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook23.send(message.content)
            
        }
     }
     if(message.channel.id === "444589513487155216")//cemp
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook24.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook24.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook24.send(embed2)
                }
                else
                {
                    hook24.send(message.content)
                    hook24.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook24.send(message.content)
            
        }
     }
     if(message.channel.id === "443136486007898112")//rand
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook25.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook25.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook25.send(embed2)
                }
                else
                {
                    hook25.send(message.content)
                    hook25.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook25.send(message.content)
            
        }
     }
     if(message.channel.id === "508887780127146004")//ctrooper
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook26.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook26.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook26.send(embed2)
                }
                else
                {
                    hook26.send(message.content)
                    hook26.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook26.send(message.content)
            
        }
     }
     if(message.channel.id === "444592971505991690")//dz
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook27.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook27.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
          
                if(message.content == "")
                {
                    hook27.send(embed2)
                }
                else
                {
                    hook27.send(message.content)
                    hook27.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook27.send(message.content)
            
        }
     }
     if(message.channel.id === "445724980940898305")//edvardmorra
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook28.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook28.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook28.send(embed2)
                }
                else
                {
                    hook28.send(message.content)
                    hook28.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook28.send(message.content)
            
        }
     }
     if(message.channel.id === "502906490840023065")//erago
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook29.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook29.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
         
                if(message.content == "")
                {
                    hook29.send(embed2)
                }
                else
                {
                    hook29.send(message.content)
                    hook29.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook29.send(message.content)
            
        }
     }
     if(message.channel.id === "506958451910639616")//kia
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook30.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook30.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
             
                if(message.content == "")
                {
                    hook30.send(embed2)
                }
                else
                {
                    hook30.send(message.content)
                    hook30.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook30.send(message.content)
            
        }
     }
     if(message.channel.id === "499847465458204682")//mining
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook31.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook31.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
             
                if(message.content == "")
                {
                    hook31.send(embed2)
                }
                else
                {
                    hook31.send(message.content)
                    hook31.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook31.send(message.content)
            
        }
     }
     if(message.channel.id === "517492690141577226")//moon
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
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
               
                if(message.content == "")
                {
                    hook32.send(embed2)
                }
                else
                {
                    hook32.send(message.content)
                    hook32.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook32.send(message.content)
            
        }
     }
     if(message.channel.id === "514194512382525440")//monkry
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook33.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook33.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
              
                if(message.content == "")
                {
                    hook33.send(embed2)
                }
                else
                {
                    hook33.send(message.content)
                    hook33.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook33.send(message.content)
            
        }
     }
     if(message.channel.id === "509091138125299732")//paid
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook34.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook34.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
               
                if(message.content == "")
                {
                    hook34.send(embed2)
                }
                else
                {
                    hook34.send(message.content)
                    hook34.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook34.send(message.content)
            
        }
     }
     if(message.channel.id === "506956536870862868")//rats
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook35.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook35.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
               
                if(message.content == "")
                {
                    hook35.send(embed2)
                }
                else
                {
                    hook35.send(message.content)
                    hook35.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook35.send(message.content)
            
        }
     }
     if(message.channel.id === "445782854027444234")//signporf
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
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
                
                if(message.content == "")
                {
                    hook36.send(embed2)
                }
                else
                {
                    hook36.send(message.content)
                    hook36.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook36.send(message.content)
            
        }
     }
     if(message.channel.id === "457239616123043840")//sky
     {
        if(message.embeds.length == 1)
           {
               if(message.embeds[0].type !== "rich")
               {
                hook41.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
               
                if(message.content == "")
                {
                    hook41.send(embed2)
                }
                else
                {
                    hook41.send(message.content)
                    hook41.send(embed2)
    
                }
               }
           }
           else
           {
            hook41.send(message.content)
           }
       
     }
     if(message.channel.id === "450075993663864832")//the dog
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook37.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook37.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                
                if(message.content == "")
                {
                    hook37.send(embed2)
                }
                else
                {
                    hook37.send(message.content)
                    hook37.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook37.send(message.content)
            
        }
     }
     if(message.channel.id === "505455160810536971")//vent
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook38.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook38.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
            
                if(message.content == "")
                {
                    hook38.send(embed2)
                }
                else
                {
                    hook38.send(message.content)
                    hook38.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook38.send(message.content)
            
        }
     }
     if(message.channel.id === "493130860976144395")//yo
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook39.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook39.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
                
                if(message.content == "")
                {
                    hook39.send(embed2)
                }
                else
                {
                    hook39.send(message.content)
                    hook39.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook39.send(message.content)
            
        }
     }
     if(message.channel.id === "508776903994245121")//zc
     {
        if(message.embeds.toString() != "") //���������, ���� ���� embed
        {
           if(message.content.startsWith("http"))
           {
            hook40.send(message.content)
           }
           else
           {
               if(message.content.includes("http"))
               {
                hook40.send(message.content)
               }
               else
               {
                var embed2 = new Discord.MessageEmbed(message.embeds[0])
               
                if(message.content == "")
                {
                    hook40.send(embed2)
                }
                else
                {
                    hook40.send(message.content)
                    hook40.send(embed2)
    
                }
            
               }
    
           }
        }
        else
        {
            
            hook40.send(message.content)
            
        }
     }
    }

    if(message.channel.id === "573359417752551455")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        margin_whale.send(embed2)
    
    }
    
    
                   if(message.channel.id === "530787005928308736")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        skyrock_signals.send(embed2)
    
    }
    
    
                   if(message.channel.id === "546265620086390784")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        golden_premium.send(embed2)
    
    }
    
    
                   if(message.channel.id === "570867766488203294")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        info_crypto_signals_bot.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048413270016000")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_addicts_margin.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522030659523444736")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        alan_masters.send(embed2)
    
    }
    
    
                   if(message.channel.id === "546267936948486144")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        cryptochoe.send(embed2)
    
    }
    
    
                   if(message.channel.id === "538245155338190859")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bitmex_saviour.send(embed2)
    
    }
    
    
                   if(message.channel.id === "570868375832756227")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        rose_alt.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048802840903680")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        whale_tank.send(embed2)
    
    }
    
    
                   if(message.channel.id === "527751646428528640")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        btc_syndicate.send(embed2)
    
    }
    
    
                   if(message.channel.id === "527753235079888909")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bitmex_calls.send(embed2)
    
    }
    
    
                   if(message.channel.id === "527752256603291648")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        max_gains.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048453459836938")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        trading_crypto_coach.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048846793277440")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        zcrypto.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048731231813634")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        paidadvisory.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537545855650103296")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        rats_premium_signals.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522315710228070413")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        cc_insiders.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048501358526464")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        cryptomedics.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048358857310209")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bravado_trades.send(embed2)
    
    }
    
    
                   if(message.channel.id === "546265709886439454")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        ibc.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537547048120221696")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        wolf_pack_margin.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537880923731918884")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bitmex_wizard.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537546037552873483")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        wolfpack_alts.send(embed2)
    
    }
    
    
                   if(message.channel.id === "570868032700809217")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        zephyr_crypto.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048515418095637")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        cryptomist.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537544244051836948")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        antimex.send(embed2)
    
    }
    
    
                   if(message.channel.id === "571593899466948618")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        dz871.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537544583043874816")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        klondike_margin.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048774923747330")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        premium_signals.send(embed2)
    
    }
    
    
                   if(message.channel.id === "545265800248950784")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bps.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048427396300801")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_birb.send(embed2)
    
    }
    
    
                   if(message.channel.id === "570868562630279169")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        wiz_scalps.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048297444048923")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        alt_masters.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048617360523274")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        dog_pound.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537879683400859668")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        oriental_whales.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048685614563328")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        krs_paid.send(embed2)
    
    }
    
    
                   if(message.channel.id === "546265653724577802")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        vip_crypto_signals.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048715683266580")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        ninja.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537548125561159680")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        klondile_alts.send(embed2)
    
    }
    
    
                   if(message.channel.id === "538245950812979200")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        alts_saviour.send(embed2)
    
    }
    
    
                   if(message.channel.id === "570868261575458827")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        binance_vip.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537545517995917317")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        fatpig_vip.send(embed2)
    
    }
    
    
                   if(message.channel.id === "543841447078789171")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        info_crypto_signals.send(embed2)
    
    }
    
    
                   if(message.channel.id === "527750447004385290")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        cryptocue.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048379035975700")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        coin_trading.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537548195274686479")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        kia_vip.send(embed2)
    
    }
    
    
                   if(message.channel.id === "571593845972664320")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        ozelcup_vip.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537548457834184704")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        coinscoach.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048815323283457")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        whales_crypto_vip.send(embed2)
    
    }
    
    
                   if(message.channel.id === "552932816208527371")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        jeekis.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048485432885260")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        cryptocoins.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048761531465748")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        palm_venice_beach.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537546179127279617")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        slime_calls.send(embed2)
    
    }
    
    
                   if(message.channel.id === "540460629815984138")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bitmex_lifestyle.send(embed2)
    
    }
    
    
                   if(message.channel.id === "571598031707701251")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bitmex_experts.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537545690000130058")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        insiders_club.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048392399159297")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        credible_crypto.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048664412094503")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_kirby.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048344793808896")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bounce_bot.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048473076334592")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_vip_zone.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537546994663686175")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_addicts_alts.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048833383825409")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        yocrypto.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537545212537470996")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_signals_premium_club.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522048440402837514")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        crypto_picasso.send(embed2)
    
    }
    
    
                   if(message.channel.id === "522374871221796865")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        blockchain_whispers.send(embed2)
    
    }
    
    
                   if(message.channel.id === "537548758007676938")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bravado_margin.send(embed2)
    
    }
    
    
                   if(message.channel.id === "571596651077304339")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        rose_bitmex.send(embed2)
    
    }
    
    
                   if(message.channel.id === "546265696259276800")//crypp
    {
        console.log(message.embeds[0])
        var embed2 = new Discord.RichEmbed(message.embeds[0])
       .setFooter("JURASSICRYPTO")
    
        bitqueen.send(embed2)
    
    }
  });

client.login(process.env.BOT_TOKEN);
bot.login(process.env.BOT_KYTE);
