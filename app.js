function getPetName(){
    let petName = prompt('What is your pet\'s name?');
    return petName;
}

function greetPet(name){
    if(name == ''){
        name = prompt('Please tell me their name!');
    }
    document.write(name + ' is an awesome name!');
}

function petLove(){
    let loveAnswer = prompt('Do you love your pet? Enter 1 for YES or 2 for NO');
    return loveAnswer
}

function specialMessage(love){
    if(love == 1){
        document.write('You are a great pet parent!');
      } else if (love == 2){
        document.write('Leave my page!');
        }
}
    