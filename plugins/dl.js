const _0x312452=_0x9674;function _0x9674(_0x1dac44,_0x15ee99){const _0x3f04d6=_0x3f04();return _0x9674=function(_0x967495,_0x2bedd0){_0x967495=_0x967495-0x1c5;let _0x3ccafb=_0x3f04d6[_0x967495];return _0x3ccafb;},_0x9674(_0x1dac44,_0x15ee99);}(function(_0x51ce5c,_0x10bd2b){const _0x120408=_0x9674,_0x145e39=_0x51ce5c();while(!![]){try{const _0x362370=-parseInt(_0x120408(0x1e0))/0x1+parseInt(_0x120408(0x1db))/0x2+-parseInt(_0x120408(0x1f4))/0x3+-parseInt(_0x120408(0x1ee))/0x4+-parseInt(_0x120408(0x1d0))/0x5+parseInt(_0x120408(0x1f9))/0x6*(-parseInt(_0x120408(0x1d4))/0x7)+parseInt(_0x120408(0x1eb))/0x8;if(_0x362370===_0x10bd2b)break;else _0x145e39['push'](_0x145e39['shift']());}catch(_0x3f1ab9){_0x145e39['push'](_0x145e39['shift']());}}}(_0x3f04,0x81cba));const {fetchJson}=require(_0x312452(0x1ea)),config=require(_0x312452(0x1d9)),{cmd}=require(_0x312452(0x1cb)),moment=require(_0x312452(0x1e5));let baseUrl;((async()=>{try{let _0x3195a0=await fetchJson('https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json');baseUrl=_0x3195a0['api'];}catch(_0x4915c4){console['error']('Error\x20fetching\x20base\x20URL:',_0x4915c4);}})());function formatFileSize(_0x2308d2){const _0x3f0a5d=_0x312452;if(_0x2308d2===0x0)return _0x3f0a5d(0x1dc);const _0x4fbd34=0x400,_0xfbbb1=[_0x3f0a5d(0x1e6),'KB','MB','GB','TB'],_0x365bac=Math['floor'](Math[_0x3f0a5d(0x1c6)](_0x2308d2)/Math[_0x3f0a5d(0x1c6)](_0x4fbd34));return parseFloat((_0x2308d2/Math[_0x3f0a5d(0x1f8)](_0x4fbd34,_0x365bac))['toFixed'](0x2))+'\x20'+_0xfbbb1[_0x365bac];}function _0x3f04(){const _0x5ba7fc=['\x20Content*\x0a╰────────────────────⊷','message','toUpperCase','name','document','⏳\x20*Downloading...*','twitterdl','mimeType','fileName','log','googledrive','\x20video','https://','trim','../command','link_1','Download\x20Mediafire\x20files','data','video','2805255VinLeM','audio','facebook','sendMessage','1168811wtWkmg','/api/','\x0a╭─『\x20','startsWith','?url=','../config','\x0a\x0a>\x20QUEEN\x20ANJU\x20MD','479796ZIWqfm','0\x20Bytes','twitter','\x0a│\x0a│\x20🤷‍♀️\x20*We\x20Will\x20Send\x20Your\x20','mediafire','447147oLWtNo','\x20DL','Error\x20in\x20','gdrivedl','Not\x20available','moment','Bytes','download','\x0a│\x20📎\x20*Type:*\x20','\x20』───⊷\x0a│\x0a│\x20✨\x20*Requester*:\x20','../lib/functions','23875480eGddhP','❌\x20An\x20error\x20occurred:\x20','\x0a│\x20📦\x20*Size:*\x20','3463844zDjYCd','🎵\x20Audio\x20extracted\x20from\x20','replace','Download\x20Google\x20Drive\x20files','key','file_type','1954677RFpRip','\x0a\x0a>\x20BHASHI-MD','error','twdl','pow','6QmzuSG','mfire','size','audio/mpeg','mediafiredl'];_0x3f04=function(){return _0x5ba7fc;};return _0x3f04();}async function downloadAndSendMedia(_0x2fc2bf,_0x4a4cfe,_0x257aaa,_0x3b6939,_0x1ffc8f,_0x40f526,_0x330273){const _0x1c1079=_0x312452;if(!_0x3b6939||!_0x3b6939[_0x1c1079(0x1d7)](_0x1c1079(0x1c9)))return _0x2fc2bf['sendMessage'](_0x257aaa,{'text':'❌\x20Please\x20provide\x20a\x20valid\x20URL.'},{'quoted':_0x4a4cfe});const _0x4826d6=await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'text':_0x1c1079(0x203)},{'quoted':_0x4a4cfe});await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'react':{'text':'⏳','key':_0x4a4cfe['key']}});try{const _0x291b50=await fetchJson(baseUrl+_0x1c1079(0x1d5)+_0x1ffc8f+_0x1c1079(0x1d8)+encodeURIComponent(_0x3b6939)),_0x43895f=_0x291b50[_0x1c1079(0x1ce)]['data']||_0x291b50[_0x1c1079(0x1ce)],_0x66ca2e=(_0x1c1079(0x1d6)+_0x1ffc8f[_0x1c1079(0x200)]()[_0x1c1079(0x1f0)]('DL',_0x1c1079(0x1e1))+_0x1c1079(0x1e9)+_0x330273+'\x0a│\x20🤖\x20*Bot*:\x20QUEEN\x20ANJU\x20MD\x0a│\x20📄\x20*File\x20Name:*\x20'+(_0x43895f[_0x1c1079(0x1c5)]||_0x43895f[_0x1c1079(0x201)]||_0x1c1079(0x1e4))+_0x1c1079(0x1ed)+formatFileSize(_0x43895f['fileSize']||_0x43895f[_0x1c1079(0x1fb)]||0x0)+_0x1c1079(0x1e8)+(_0x43895f[_0x1c1079(0x205)]||_0x43895f[_0x1c1079(0x1f3)]||'Not\x20available')+_0x1c1079(0x1de)+_0x1ffc8f['replace']('dl','')[_0x1c1079(0x200)]()+_0x1c1079(0x1fe))[_0x1c1079(0x1ca)]();if(_0x40f526===_0x1c1079(0x1cf)){const _0xb041f5=_0x43895f,_0x1040ac=(_0x66ca2e+_0x1c1079(0x1da))['trim']();(_0xb041f5['hd']||_0xb041f5['HD'])&&await _0x2fc2bf['sendMessage'](_0x257aaa,{'video':{'url':_0xb041f5['hd']||_0xb041f5['HD']},'caption':'\x0a\x0a'+_0x1040ac},{'quoted':_0x4a4cfe}),(_0xb041f5['sd']||_0xb041f5['SD'])&&await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'video':{'url':_0xb041f5['sd']||_0xb041f5['SD']},'caption':'\x0a\x0a'+_0x1040ac},{'quoted':_0x4a4cfe}),_0xb041f5[_0x1c1079(0x1d1)]&&await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'audio':{'url':_0xb041f5[_0x1c1079(0x1d1)]},'mimetype':_0x1c1079(0x1fc),'caption':_0x1c1079(0x1ef)+_0x1ffc8f[_0x1c1079(0x1f0)]('dl','')[_0x1c1079(0x200)]()+_0x1c1079(0x1c8)},{'quoted':_0x4a4cfe});}else{if(_0x40f526===_0x1c1079(0x202)){const _0x285ee1=(_0x66ca2e+_0x1c1079(0x1f5))[_0x1c1079(0x1ca)]();await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'document':{'url':_0x43895f[_0x1c1079(0x1e7)]||_0x43895f[_0x1c1079(0x1cc)]},'fileName':_0x43895f[_0x1c1079(0x1c5)]||_0x43895f[_0x1c1079(0x201)],'mimetype':_0x43895f[_0x1c1079(0x205)]||_0x43895f[_0x1c1079(0x1f3)],'caption':_0x285ee1},{'quoted':_0x4a4cfe});}}await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'react':{'text':'✅','key':_0x4a4cfe[_0x1c1079(0x1f2)]}});}catch(_0xe8db5e){console[_0x1c1079(0x1f6)](_0x1c1079(0x1e2)+_0x1ffc8f+':',_0xe8db5e),await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'text':_0x1c1079(0x1ec)+_0xe8db5e[_0x1c1079(0x1ff)]},{'quoted':_0x4a4cfe}),await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'react':{'text':'❌','key':_0x4a4cfe[_0x1c1079(0x1f2)]}});}finally{await _0x2fc2bf[_0x1c1079(0x1d3)](_0x257aaa,{'delete':_0x4826d6[_0x1c1079(0x1f2)]});}}cmd({'pattern':'fb','alias':[_0x312452(0x1d2)],'desc':'Download\x20Facebook\x20videos','category':_0x312452(0x1e7),'filename':__filename},async(_0x42cb92,_0x17135f,_0x34cb82,{from:_0xa31469,q:_0x310dcd,pushname:_0x960471})=>{await downloadAndSendMedia(_0x42cb92,_0x17135f,_0xa31469,_0x310dcd,'fdown','video',_0x960471);}),cmd({'pattern':_0x312452(0x1dd),'alias':[_0x312452(0x1f7)],'desc':'Download\x20Twitter\x20videos','category':_0x312452(0x1e7),'filename':__filename},async(_0x4fca59,_0x112c41,_0x343875,{from:_0xabeff4,q:_0xd0a34c,pushname:_0x4f4d69})=>{const _0x1c3a26=_0x312452;await downloadAndSendMedia(_0x4fca59,_0x112c41,_0xabeff4,_0xd0a34c,_0x1c3a26(0x204),_0x1c3a26(0x1cf),_0x4f4d69);}),cmd({'pattern':'gdrive','alias':[_0x312452(0x1c7)],'desc':_0x312452(0x1f1),'category':_0x312452(0x1e7),'filename':__filename},async(_0x135f36,_0x5b479b,_0x5c8b21,{from:_0x58dd97,q:_0x775009,pushname:_0x4c7742})=>{const _0x46c994=_0x312452;await downloadAndSendMedia(_0x135f36,_0x5b479b,_0x58dd97,_0x775009,_0x46c994(0x1e3),'document',_0x4c7742);}),cmd({'pattern':_0x312452(0x1df),'alias':[_0x312452(0x1fa)],'desc':_0x312452(0x1cd),'category':_0x312452(0x1e7),'filename':__filename},async(_0x5928eb,_0x5c73e7,_0x4f18cf,{from:_0x1b5d45,q:_0x443449,pushname:_0x94fd9c})=>{const _0x4522f3=_0x312452;await downloadAndSendMedia(_0x5928eb,_0x5c73e7,_0x1b5d45,_0x443449,_0x4522f3(0x1fd),'document',_0x94fd9c);});