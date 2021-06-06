function C_Button( l_Name, l_PosX, l_PosY, l_Color, l_Width, l_Height)
{
	this.Name = l_Name;
	this.PosX = l_PosX;
	this.PosY = l_PosY;
	this.Color = l_Color;
	this.Width = l_Width
	this.Height = l_Height

	// this flag will be used to decide whether the button is active or not
	this.IsActive = false;

	this.Button = new C_Square(this.PosX, this.PosY, this.Color, this.Width, this.Height);

	if(this.Name == "Control")
	{
		this.Button.width = 210;
	}

	if(this.Name == "Instruction")
	{
		this.Button.width = 270;
	}

	this.M_DrawButton = function ( l_Ctx )
	{
		if(this.IsActive)
		{
			this.Button.M_DrawSquare(l_Ctx);
			l_Ctx.font = "bold 48px serif"
			l_Ctx.fillStyle = "red";
			l_Ctx.fillText(this.Name, this.PosX + 25, this.PosY + 50);
			return;
		}
	}
}
