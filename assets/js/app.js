// function For inner Text from Html Tag
function playerName(id) {
    const playerid=document.getElementById(id);
    const playerNames=playerid.innerText;
    return playerNames;
}
// function For inner Text To intger Value 
function inerTextTointValue(id) {
    const inerTextId=document.getElementById(id);
    const inerTextValue=inerTextId.innerText;
    const integerValue=parseFloat(inerTextValue);
    return integerValue;
}
// function For Input Value To Intger Value
function inputValueToIntValue(id) {
    const inputValueid=document.getElementById(id);
    const inputValue=inputValueid.value;
    const intValue=parseFloat(inputValue);
    return intValue;
}
// array for player Select
let selectedPlayer=[];

// Function for Select Player form All Player And make a Select lest
function buttonHendelar(buttonId, playerId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const palyername=playerName(playerId);
        selectedPlayer.push(palyername);
        const selected1=document.getElementById('seletedPlayer-1');
        if (selectedPlayer.length >= 1) {
            selected1.innerText=selectedPlayer[0];
        }else{
            selected1.innerText='';
        }
        const selected2=document.getElementById('seletedPlayer-2');
        if (selectedPlayer.length>=2) {
            selected2.innerText=selectedPlayer[1];
        }else{
            selected2.innerText='';
        }
        const selected3=document.getElementById('seletedPlayer-3');
        if (selectedPlayer.length>=3) {
            selected3.innerText=selectedPlayer[2];
        }else{
            selected3.innerText='';
        }
        const selected4=document.getElementById('seletedPlayer-4');
        if (selectedPlayer.length>=4) {
            selected4.innerText=selectedPlayer[3];
        }else{
            selected4.innerText='';
        }
        const selected5=document.getElementById('seletedPlayer-5');
        if (selectedPlayer.length>=5) {
            selected5.innerText=selectedPlayer[4];
        }else{
            selected5.innerText='';
        }
        let totalPlayer=selectedPlayer.length;
        // Player Selection Limitation
        if (selectedPlayer.length<=5) {
            const buttonSelect=document.getElementById(buttonId);
            buttonSelect.style.backgroundColor='red';
            buttonSelect.setAttribute('disabled', true);
            let palyerlenth=totalPlayer;
            const plyernum=document.getElementById('playersnum');
            plyernum.innerText=palyerlenth;
            return plyernum;
        }else{
            alert( 'Five Player Selected');
            return
        }  
    })    
}


