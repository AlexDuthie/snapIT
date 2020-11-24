// 	Alex Duthie / 12010280 - Inverness College, UHI (NQ Level 6 Computing)

// 	The Score variables set both scores to 0 by default, onload
var userScore = 0;
var compScore = 0;

//	An Array of different colour names
var colours = ["blue", "green", "yellow", "red", "pink", "magenta"];

//	Function for the "go" button
function go()
{
    //  The two following lines get rid of the background image from the two cards
    document.getElementById("cardOne").style.backgroundImage = "none";
    document.getElementById("cardTwo").style.backgroundImage = "none";

	// Loop that changes both card colours onclick
	for(i = 0; i < colours.length; i++)
	{
        //  cardOne is equal to a random number between 0 and the length of the colours array
		cardOne = Math.round(Math.random(i) * i);
        
        //  Nested loop
		for(j = 0; j < colours.length; j++)
		{
            /*  
                cardTwo is also equal to a random number between 0 and the 
                length of the colours array
            */
			cardTwo = Math.round(Math.random(j) * j);
		}
	}

    /* 
        The element "cardOne"'s background colour will be set to a random element from the colours 
        array using the cardOne variable found in the above for loop.
    */
	document.getElementById("cardOne").style.backgroundColor = colours[cardOne];
    /* 
        The element "cardTwo"'s background colour will be set to a random element from the colours 
        array using the cardTwo variable found in the above nested for loop.
    */
    document.getElementById("cardTwo").style.backgroundColor = colours[cardTwo];

}

//	Function for the "snap" button
function snap() 
{

    //  If the cardOne and cardTwo from the loop in the go function are equal to eachother.
	if(colours[cardOne] == colours[cardTwo])
	{
        //  Increment userScre
		userScore++;
        //  Call go()
		go();
	} else //  If they are not equal
	{
        //  Increment compScore
		compScore++;
        //  Call go()
		go();
	}

    //  Display userScore
	document.getElementById("userScr").innerHTML = userScore;
    //  Display compScore
	document.getElementById("compScr").innerHTML = compScore;

    //  If userScore if equal to 5
	if(userScore == 5)
	{
        //  WIN
        alert("YOU WIN!"); // Create a WIN page with restart option
        location.reload();
	} else if(compScore == 5) //   compScore is equal to 5
	{
        //  LOSE
        alert("YOU LOSE!") // Create a LOSE page with retry option
        location.reload();
	}

}