
buttonHendelar('playerButton-1','playerName-1');
buttonHendelar('playerButton-2','playerName-2');
buttonHendelar('playerButton-3','playerName-3');
buttonHendelar('playerButton-4','playerName-4');
buttonHendelar('playerButton-5','playerName-5');
buttonHendelar('playerButton-6','playerName-6');
buttonHendelar('playerButton-7','playerName-7');
buttonHendelar('playerButton-8','playerName-8');




document.getElementById('calculetSubmit').addEventListener('click', function () {
    
    
    const players=inerTextTointValue('playersnum');
    const inputValue=inputValueToIntValue('playerCost');
    if (isNaN(inputValue)) {
        alert ('input type invalid');
        return
    }
    const OutputValue=inputValue*players;
    
    const playerexp=document.getElementById('expenses');
    playerexp.innerText=OutputValue;

})


document.getElementById('totalSubmit').addEventListener('click', function () {
    const managerCost=inputValueToIntValue('managerCost');
    const coachCost=inputValueToIntValue('coachCost');
    const playercost=inerTextTointValue('expenses');

    if (isNaN(managerCost) || isNaN(coachCost) ) {
        alert ('input type invalid');
        return
    }
    const newTotalCost=playercost+managerCost+coachCost
    const totalexp=document.getElementById('totalCost');
    totalexp.innerText=newTotalCost

})