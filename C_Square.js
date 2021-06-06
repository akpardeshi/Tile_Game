// this is the class to make square
function C_Square(l_PosX, l_PosY, l_Color, l_Width, l_Height ){
	this.PosX = l_PosX;
	this.PosY = l_PosY;
	this.Color = l_Color;
	this.width = l_Width;
	this.height = l_Height;
	// this proprty will hold the text on the square
	this.Text = "A";
	this.IsSwapable = false;

	this.M_DrawSquare = function( l_Ctx )
	{
		l_Ctx.fillStyle = 'black';
		l_Ctx.fillRect( this.PosX, this.PosY, this.width, this.height);
		l_Ctx.strokeStyle = "White";
		l_Ctx.lineWidth = "4";
		l_Ctx.strokeRect( this.PosX, this.PosY, this.width, this.height);
	}

	this.M_DrawOnSquare  =  function ( l_Ctx )
	{
		l_Ctx.font = "56px bold serif"
		l_Ctx.fillStyle = "White"
		l_Ctx.fillText(this.Text, this.PosX + this.width / 3.25, this.PosY + this.height /1.5);
	}
}

// this function will create the squares on the grid
function F_CreateSquares( l_LoopCounter, l_StartingPosX, l_StartingPosY, l_Width, l_Height)
{
	var l_SquareArray = new Array(l_LoopCounter);
	var l_PosX = l_StartingPosX ;
	var l_PosY = l_StartingPosY ;
	var l_Difference = 100;

	for ( var i =0; i < l_LoopCounter; i++)
	{
		if( i % 4 == 0 && i > 0)
		{
		    l_PosX = l_StartingPosX;
				l_PosY += l_Difference;
		}

		else
		{
			if(i > 0)
			{
				l_PosX += l_Difference;
			}
		}

		l_SquareArray[i] = new C_Square(l_PosX, l_PosY, "Black", l_Width, l_Height);
	}

	return l_SquareArray;
}

// this function will draw the squares
// this function is supposed to called in game loop
function F_DrawSquares( l_LoopCounter )
{
	for ( var i = 0; i < l_LoopCounter; i++)
	{
		g_goSquareArray[i].M_DrawSquare(g_Ctx);
		g_goSquareArray[i].M_DrawOnSquare(g_Ctx);
	}
}

function F_DrawText( l_Ctx ) {
		l_Ctx.font = "32px bold serif";
		l_Ctx.fillStyle = "Black";
		l_Ctx.fillText("Moves : ", 220, 75);
		l_Ctx.fillText(g_Moves, 350, 75);
}
