function compMovePicker(){
    let rand = Math.random();
    if(rand >=0 && rand <=1/3){
        return  'rock';
        }
    else if(rand>1/3 && rand<= 2/3){
        return 'paper';
        }
    else{
        return 'scissors';
        }
}
let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties :0
    };
    updateScore();
function playGame(playerMove){
    let move = compMovePicker();
    let result = '';
    switch(playerMove){
        case 'rock':
            if(move === 'rock'){
                result = 'Tie';
                score.ties++;
            }else if(move === 'paper'){
                result = 'You Lose';
                score.losses++;
            }
            else{
                result = 'You Win';
                score.wins++;
            }
            document.querySelector('.myMove').innerHTML = ` You : <img src="${playerMove}-emoji.png" alt="" class="move-icon2"> `;
            document.querySelector('.compMove').innerHTML = `Computer : <img src="${move}-emoji.png" alt="" class="move-icon2">`;
            document.querySelector('.result').innerHTML = result;
            updateScore();
        break;
        case 'paper' : 
            if(move === 'paper'){
                result = 'Tie';
                score.ties++;
            }else if(move === 'Scissor'){
                result = 'You Lose';
                score.losses++;
            }else{
                result = 'You win';
                score.wins++;
            }
            document.querySelector('.myMove').innerHTML = `You : <img src="${playerMove}-emoji.png" alt="" class="move-icon2">`;
            document.querySelector('.compMove').innerHTML = `Computer : <img src="${move}-emoji.png" alt="" class="move-icon2">`;
            document.querySelector('.result').innerHTML = result;
            updateScore();
        break;
        case 'scissors' : 
            if(move === 'scissors'){
                result = 'Tie';
                score.ties++;
            }else if(move === 'rock'){
                result = 'You Lose';
                score.losses++;
            }else{
                result = 'You win';
                score.wins++;
            }
            document.querySelector('.myMove').innerHTML = `You : <img src="${playerMove}-emoji.png" alt="" class="move-icon2">`;
            document.querySelector('.compMove').innerHTML = `Computer : <img src="${move}-emoji.png" alt="" class="move-icon2">`;
            document.querySelector('.result').innerHTML = result;
            updateScore();
        break;
        default :
            alert('UNEXPECTED ERROR');
    }
    localStorage.setItem('score' , JSON.stringify(score));
}
function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.myMove').innerHTML = null;
    document.querySelector('.compMove').innerHTML = null;
    document.querySelector('.result').innerHTML = null;
    updateScore();
    localStorage.removeItem('score');
}
function updateScore(){
    document.querySelector('.js-score').innerHTML = ` Wins : ${score.wins}  Losses : ${score.losses}  Ties : ${score.ties}`;
}