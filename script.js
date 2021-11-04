const object = [{ "uttryck": "Alla taggar utåt", "svar": "Inte vara mottaglig för avvikande åsikter, ge ett aggressivt bemötande." },
{ "uttryck": "Alla tiders ", "svar": " Utomordentligt." },
{ "uttryck": "Allena saliggörande ", "svar": " Om något (det enda) som ska lösa ett problem." },
{ "uttryck": "Ana argan list ", "svar": " Ana att något obehagligt är på gång." },
{ "uttryck": "Ana ugglor i mossen ", "svar": " Ana något misstänkt, misstänka en dold fälla." },
{ "uttryck": "Andra bullar ", "svar": " en strängare ordning är att vänta." },
{ "uttryck": "Anno dazumal ", "svar": " Av latinets anno, 'i år', och tyskans dazumal, 'då för tiden'." },
{ "uttryck": "Armbåga sig fram ", "svar": " Tränga sig fram, skaffa sig egna fördelar på bekostnad av andra." },
{ "uttryck": "Av det rätta virket ", "svar": " Att vara tillräcklig för uppgiften i fråga." },
{ "uttryck": "Av samma korn och skrå ", "svar": " Variant av uttrycket 'Av samma skrot och korn', med identisk betydelse." },
{ "uttryck": "Av samma skrot och korn ", "svar": " Vara av samma (underförstått dåliga) kvalitet eller sort." },
{ "uttryck": "Avsked på grått papper ", "svar": " Få avsked/sparken från en anställning på ett snöpligt sätt." },
{ "uttryck": "Bakom flötet ", "svar": " Inte fatta vad saken gäller." },
{ "uttryck": "Bakom lyckta dörrar ", "svar": " Utan allmän insyn." },
{ "uttryck": "Bakom lås och bom ", "svar": " I fängelse, i säkert förvar." },
{ "uttryck": "Balansera på slak lina ", "svar": " Att riskera något och vara osäker på utgången." },
{ "uttryck": "(Som) balsam för själen ", "svar": " Något som ger tröst eller lindring." },
{ "uttryck": "Barka åt skogen ", "svar": " Det kommer att gå illa." },
{ "uttryck": "Barn av sin tid ", "svar": " När någon eller något är präglat av den tid man lever i." },
{ "uttryck": "Basunera ut ", "svar": " Högljutt meddela något." },
{ "uttryck": "Be för sin sjuka mor ", "svar": " Att be om något för någon annans räkning, när det egentligen är man själv som vill ha det." },
{ "uttryck": "Befinna sig i fritt fall ", "svar": " Om något som försämras i rask takt." },
{ "uttryck": "Befinna sig i förskingringen ", "svar": " Vara på en plats långt hemifrån." },
{ "uttryck": "Begära någons huvud på ett fat ", "svar": " Begära ett strängt straff för någon." },
{ "uttryck": "Behandla/ta i någon med silkesvantar ", "svar": " Behandla någon mycket försiktigt." },
{ "uttryck": "Bara toppen av ett isberg/på isberget ", "svar": " Man börjar inse att ett problem är betydligt större än det verkar vid en första anblick." },
{ "uttryck": "Beväpnad till tänderna ", "svar": " Vara väl förberedd och utrustad." }];

// for (let i = 0; i < object.length; i++) {
//     console.log(`${object[i].uttryck} = ${object[i].svar}`);
// }



const getData = async () => {
    const response = await fetch("orden.json");
    const data = await response.json();
    return data;
};
const func = async () => {
    const datan = await getData();

    for (let i = 0; i < datan.length; i++) {
        console.log(`${datan[i].uttryck} = ${object[i].svar}`);
    }
}


func();