let button=document.querySelector(".btn");
button.onclick=function players()
{
    let random1=Math.floor(Math.random()*6)+1;
    document.querySelector(".Player1dice").setAttribute("src", `Images/dice${random1}.png`);

    let random2=Math.floor(Math.random()*6)+1;
    document.querySelector(".Player2dice").setAttribute("src", `Images/dice${random2}.png`);
    if(random1 > random2)
    {
        document.querySelector(".result").innerHTML="Player 1 Won";
    }
    else if(random1 < random2)
    {
        document.querySelector(".result").innerHTML="Player 2 Won";
    }
    else{
        document.querySelector(".result").innerHTML="Draw";
    }
};



