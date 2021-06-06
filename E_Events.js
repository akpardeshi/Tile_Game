// this is the event file
// it will handle the  events from the mouse
window.addEventListener("mousedown", E_MouseDown);

function E_MouseDown( e ){
    var l_ClientX = e.clientX;
    var l_ClientY = e.clientY;
    var g_Index = F_GetIndexOfSquare( l_ClientX, l_ClientY)
    switch ( g_StrState ){
      case "Running":
          if ( g_Index >= 0 && g_Index < 16 ) {
            F_Bool( g_Index );
          }
          F_Validator();
          break;

      case "Completed":
        if(l_ClientX >= g_goRestartButton.PosX && l_ClientX <= g_goRestartButton.PosX + g_goRestartButton.Width
        && l_ClientY >= g_goRestartButton.PosY && l_ClientY <= g_goRestartButton.PosY + g_goRestartButton.Height){
          if( g_goRestartButton.IsActive ){
            F_AssignTest();
            g_StrState = "Running";
          }
        }
        break;

      case "Start":
      if(l_ClientX >= 220 && l_ClientY >= 200 && l_ClientX < 370 && l_ClientY < 275)
  {

    if( g_goStartButton.IsActive )
    {
       g_goStartButton.IsActive = false;
       g_goHelpButton.IsActive = false;
       g_goTitleText.IsActive = false;
       g_goHelpText.IsActive = false;
       g_goControlButton.IsActive = false ;
       g_goBackButton.IsActive = false ;
       g_goControlText.IsActive = false;
       g_BoolShouldDisplayControls = false;
       g_goInstructionButton.IsActive = false;
       g_StrState = "Running";
       break ;
    }

    if ( g_goControlButton.IsActive )
    {
       g_goStartButton.IsActive = false ;
       g_goHelpButton.IsActive = false ;
       g_goTitleText.IsActive = false ;
       g_goHelpText.IsActive = false ;
       g_goControlButton.IsActive = false ;
       g_goBackButton.IsActive = true ;
       g_goControlText.IsActive = true;
       g_BoolShouldDisplayControls = true;
       g_goInstructionButton.IsActive = false;
       break;
    }
  }

  if(l_ClientX >= 220 && l_ClientY >= 350 && l_ClientX < 370 && l_ClientY < 425)
  {
    if ( g_goHelpButton.IsActive )
    {
       g_goStartButton.IsActive = false;
       g_goHelpButton.IsActive = false;
       g_goTitleText.IsActive = false;
       g_goHelpText.IsActive = true;
       g_goControlButton.IsActive = true;
       g_goBackButton.IsActive = true;
       g_goInstructionButton.IsActive = true;
       break ;
    }

    if ( g_goInstructionButton.IsActive )
    {
       g_goStartButton.IsActive = false;
       g_goHelpButton.IsActive = false;
       g_goTitleText.IsActive = false;
       g_goHelpText.IsActive = false;
       g_goControlButton.IsActive = false;
       g_goBackButton.IsActive = true;
       g_goInstructionButton.IsActive = false;
       g_BoolShouldDisplayInstructions = true;
       g_goInstructionText.IsActive = true;
       break ;
    }
  }

  if(l_ClientX >= 220 && l_ClientY >= 500 && l_ClientX < 370 && l_ClientY  < 575 )
  {
    if ( g_goBackButton.IsActive )
    {
      if( g_goControlText.IsActive || g_goInstructionText.IsActive )
      {
        g_goControlText.IsActive = false;
        g_goStartButton.IsActive = false;
        g_goHelpButton.IsActive = false;
        g_goTitleText.IsActive = false;
        g_goHelpText.IsActive = true;
        g_goControlButton.IsActive = true;
        g_goInstructionButton.IsActive = true;
        g_goInstructionText.IsActive = false;
        g_BoolShouldDisplayInstructions = false;
        g_BoolShouldDisplayControls = false;
        g_goControlText.IsActive = false;
        break;
      }



      if( g_goHelpText.IsActive )
      {
        g_goTitleText.IsActive = true;
        g_goStartButton.IsActive = true;
        g_goHelpButton.IsActive = true;
        g_goHelpText.IsActive = false;
        g_goControlButton.IsActive = false;
        g_goInstructionText.IsActive = false;
        g_goInstructionButton.IsActive = false;
        g_goBackButton.IsActive = false;
        g_BoolShouldDisplayInstructions = false;
        g_BoolShouldDisplayControls = false;
        g_goControlText.IsActive = false;
        break;
      }
    }
  }



          /*if ( l_ClientX >= g_goInstructionButton.PosX && l_ClientX <= g_goInstructionButton.PosX + g_goInstructionButton.Width
               && l_ClientY >= g_goInstructionButton.PosY && l_ClientY <= g_goInstructionButton.PosY + g_goStartButton.Height){
            if(g_goHelpText.IsActive){
              console.log("____________________________");
            }
          }
          if ( l_ClientX >= g_goStartButton.PosX && l_ClientX <= g_goStartButton.PosX + g_goStartButton.Width
               && l_ClientY >= g_goStartButton.PosY && l_ClientY <= g_goStartButton.PosY + g_goStartButton.Height){
                 if (g_goTitleText.IsActive){
                   g_StrState = "Running";
                 }
          }

          if ( l_ClientX >= g_goHelpButton.PosX && l_ClientX <= g_goHelpButton.PosX + g_goHelpButton.Width
            && l_ClientY >= g_goHelpButton.PosY && l_ClientY <= g_goHelpButton.PosY + g_goHelpButton.Height){
              //console.log("Open Help Menu");
                if ( g_goTitleText.IsActive ){
                    // Active things
                    g_goControlButton.IsActive = true;
                    g_goBackButton.IsActive = true;
                    g_goHelpText.IsActive = true;
                    g_goInstructionButton.IsActive = true;

                    // deactivated things
                    g_goStartButton.IsActive = false;
                    g_goTitleText.IsActive = false;
                    g_goHelpButton.IsActive = false;
                }
              }

              if ( g_goHelpText.IsActive ){
                if ( l_ClientX >= g_goControlButton.PosX && l_ClientX <= g_goControlButton.PosX + g_goControlButton.Width
                     && l_ClientY >= g_goControlButton.PosY && l_ClientY <= g_goControlButton.PosY + g_goControlButton.Height ){
                       // Active things
                       g_goControlButton.IsActive = false;
                       g_goBackButton.IsActive = true;
                       g_goHelpText.IsActive = false;

                       // deactivated things
                       g_goStartButton.IsActive = false;
                       g_goTitleText.IsActive = false;
                       g_goHelpButton.IsActive = false;
                       g_goControlText.IsActive = true
                       g_BoolShouldDisplayControls = true;
                     }
              }

              if ( l_ClientX >= g_goBackButton.PosX && l_ClientX <= g_goBackButton.PosX + g_goBackButton.Width
                   && l_ClientY >= g_goBackButton.PosY && l_ClientY <= g_goBackButton.PosY + g_goBackButton.Height){
                     console.log(12345);
                   }*/
              break;

    }



}

// this function will get the index of the square you clicked on
function F_GetIndexOfSquare( l_MouseX, l_MouseY){
    for (var i = 0; i < g_goSquareArray.length; i++) {
      if (l_MouseX >= g_goSquareArray[i].PosX &&
          l_MouseX < g_goSquareArray[i].PosX + g_goSquareArray[i].width &&
          l_MouseY >= g_goSquareArray[i].PosY &&
          l_MouseY < g_goSquareArray[i].height + g_goSquareArray[i].PosY){
              return i;
      }
    }
    return false;
}

// this function will get the square magnitude of the square
// this function is useftul for checking if we can swap the neighbour squares with empty tile or not
function F_Bool( l_IntIndex ){
  if(l_IntIndex || l_IntIndex === 0){

    if ( g_goSquareArray[l_IntIndex].PosX - 10  >= 100 ){
      if ( l_IntIndex - 1 >= 0 )
      if(g_goSquareArray[l_IntIndex - 1].Text == " " ){
        F_SwapValues( l_IntIndex , l_IntIndex - 1 )
      }
    }

    if ( g_goSquareArray[l_IntIndex].PosX + 10 <= 500 ){
      if( l_IntIndex + 1 <= 15 )
      if(g_goSquareArray[l_IntIndex + 1].Text == " " ){
        F_SwapValues( l_IntIndex , l_IntIndex + 1 )
      }
    }

    if ( g_goSquareArray[l_IntIndex].PosY - 10 >= 100 ) {
      if (l_IntIndex - 4 >= 0)
      if(g_goSquareArray[l_IntIndex - 4].Text == " " ){
        F_SwapValues( l_IntIndex , l_IntIndex - 4 )
      }
    }

    if ( g_goSquareArray[l_IntIndex].PosY + 10 <= 500){
      if(l_IntIndex + 4 <= 15)
      if(g_goSquareArray[l_IntIndex + 4].Text == " " ){
        F_SwapValues( l_IntIndex , l_IntIndex + 4 )
      }
    }
  }
}

function F_SwapValues( l_Index , l_EmptyIndex ){
    g_Moves += 1;
    g_goSquareArray[l_EmptyIndex].Text = g_goSquareArray[l_Index].Text;
    g_goSquareArray[l_Index].Text = " ";
}

function F_Validator(){
  l_Woof = false;
  for(var i = 0; i < g_NumberOfSquares; i++){
    if( g_goSquareArray[i].Text == g_Answer[i]){
      l_Woof = true;
    }
    else{
      l_Woof = false;
      return ;
    }
  }
  if(l_Woof){
      g_StrState = "Completed";
      g_goWinText.IsActive = true;
      g_goRestartButton.IsActive = true;
  }
}
