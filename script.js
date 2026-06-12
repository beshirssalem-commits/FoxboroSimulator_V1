
const svg=document.getElementById('diagram');
const title=document.getElementById('scenarioTitle');

function box(x,y,w,h,t){
return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="white"/>
<text x="${x+w/2}" y="${y+h/2}" fill="white" text-anchor="middle">${t}</text>`;
}
function line(x1,y1,x2,y2,c){
return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="4"/>`;
}

function existing(){
title.innerText="Existing Foxboro Architecture";
svg.innerHTML=`
${box(80,120,120,60,'TE-101A TC')}
${box(320,120,140,60,'Foxboro 34C')}
${box(600,120,140,60,'TIC-101A')}
${line(200,150,320,150,'deepskyblue')}
${line(460,150,600,150,'orange')}

${box(80,420,120,60,'TE-1008 RTD')}
${box(320,420,140,60,'Foxboro 34C')}
${box(600,420,140,60,'TR-1008')}
${line(200,450,320,450,'deepskyblue')}
${line(460,450,600,450,'orange')}
`;
}

function modular(){
title.innerText="Proposed Modular Replacement";
svg.innerHTML=`
${box(60,120,120,60,'TE-101A')}
${box(250,120,140,60,'TC CONV')}
${box(470,120,120,60,'PH10 I/P')}
${box(700,120,140,60,'TIC-101A')}
${line(180,150,250,150,'deepskyblue')}
${line(390,150,470,150,'lime')}
${line(590,150,700,150,'orange')}

${box(60,420,120,60,'TE-1008')}
${box(250,420,140,60,'RTD CONV')}
${box(470,420,120,60,'PH10 I/P')}
${box(700,420,140,60,'TR-1008')}
${line(180,450,250,450,'deepskyblue')}
${line(390,450,470,450,'lime')}
${line(590,450,700,450,'orange')}
`;
}

function electronic(){
title.innerText="Electronic Upgrade";
svg.innerHTML=`
${box(60,120,120,60,'TE-101A')}
${box(250,120,140,60,'TC CONV')}
${box(550,120,180,60,'Electronic Controller')}
${line(180,150,250,150,'deepskyblue')}
${line(390,150,550,150,'lime')}

${box(60,420,120,60,'TE-1008')}
${box(250,420,140,60,'RTD CONV')}
${box(550,420,180,60,'GX10 Recorder')}
${line(180,450,250,450,'deepskyblue')}
${line(390,450,550,450,'lime')}
`;
}

function dcs(){
title.innerText="Future DCS / SCADA Architecture";
svg.innerHTML=`
${box(80,120,120,60,'TE-101A')}
${box(350,120,160,60,'COMM MODULE')}
${box(650,120,160,60,'DCS')}
${line(200,150,350,150,'deepskyblue')}
${line(510,150,650,150,'purple')}

${box(80,420,120,60,'TE-1008')}
${box(350,420,160,60,'COMM MODULE')}
${box(650,420,160,60,'SCADA')}
${line(200,450,350,450,'deepskyblue')}
${line(510,450,650,450,'purple')}
`;
}

function cabinet(){
title.innerText="8-Slot Modular Nest";
svg.innerHTML='';
for(let i=0;i<8;i++){
svg.innerHTML += `<rect x="250" y="${80+i*60}" width="300" height="50" fill="none" stroke="white"/>
<text x="400" y="${110+i*60}" fill="white" text-anchor="middle">Slot ${i+1}</text>`;
}
svg.innerHTML += `<text x="650" y="180" fill="white">Rear Mounted FPSU Power Supply</text>
<text x="650" y="220" fill="white">20 PSI Air Header</text>`;
}

function loadScenario(s){
if(s==='existing') existing();
if(s==='modular') modular();
if(s==='electronic') electronic();
if(s==='dcs') dcs();
if(s==='cabinet') cabinet();
}

const temp=document.getElementById('temp');
const results=document.getElementById('results');

function calc(){
let t=parseFloat(temp.value);
let ma=4+(t/800)*16;
let psi=3+(t/800)*12;
results.innerHTML=`Temperature: ${t.toFixed(1)} °C<br>Current: ${ma.toFixed(2)} mA<br>Pressure: ${psi.toFixed(2)} PSI`;
}
temp.addEventListener('input',calc);
calc();
loadScenario('existing');
