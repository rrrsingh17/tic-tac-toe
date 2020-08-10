var tictac = (function(){

	var initialState = []

	var rowCount = "4";
	var colCount = "4";
	var streakCount = "4";
	var turn=0;
	var countVar=1;

    function updateMatrix(){
        initialState = [];
        for (let i=0; i < rowCount; i++){
            let row = [];
            for (let j=0; j < colCount; j++){
                row.push("");
            }
            initialState.push(row);
        }
    }
    function winningMovement()
    {
        //Row Wise Execution
        countVar=1;
        console.log(initialState);
        var colSize=initialState[0].length;
        var rowSize=initialState.length;
        for (var i=0;i<rowSize;i++){
        countVar=1;
         for (var j=0;j<colSize;j++){
            if(initialState[i][j]=='1' && initialState[i][j+1]=='1' ||initialState[i][j]=='0' && initialState[i][j+1]=='0' ){
               countVar=countVar+1;
                winningMessage();
                }
                else{
                countVar=1;}
         }}
         //Column Wise Execution
        countVar=1;
        for (var i=0;i<colSize;i++){
        countVar=1;
         for (var j=1;j<rowSize;j++){
            if(initialState[j-1][i]=='1' && initialState[j][i]=='1' ||initialState[j-1][i]=='0' && initialState[j][i]=='0' ){
               countVar=countVar+1;
               winningMessage();
               }
            else{
                countVar=1;}
         }}

         //Diagonal Execution
         countVar=1;
         for (var i=1;i<rowSize;i++)
         {
         if(initialState[i-1][i-1]=='1'&& initialState[i][i]||initialState[i-1][i-1]=='0'&& initialState[i][i]=='0')
         {
         countVar=countVar+1;
                winningMessage();}
                else{
                countVar=1;}
         }
         }


    function winningMessage(){
    if(countVar==streakCount){
    alert("winner");
        }
    }

	function updateDataFromInput(){
	    rowCount = document.getElementById("row-input").value;
	    colCount = document.getElementById("column-input").value;
	    streakCount = document.getElementById("streak-input").value;
	    updateMatrix();
	}
	function displayMarkX(element){
        let r = element.getAttribute("data-row");
        let c = element.getAttribute("data-column");
	    var comm=`<div class="column" data-row="${r}" data-column="${c}">X</div>`;
	    var idForElement=`rowcol${r}${c}`;
	    var dataOfInnerContent=document.getElementById(idForElement).textContent;
	    if (dataOfInnerContent == 'O'|| dataOfInnerContent == 'X'){
	        console.log("Invalid turn");
	        return false; }
	    else{
	        document.getElementById(idForElement).innerHTML=comm;
	        return true;}
	}

	function displayMarkO(element){
	    let r = element.getAttribute("data-row");
        let c = element.getAttribute("data-column");
	    var comm=`<div class="column" data-row="${r}" data-column="${c}">O</div>`;
	    var idForElement=`rowcol${r}${c}`;
	    var dataOfInnerContent=document.getElementById(idForElement).textContent;
	    if (dataOfInnerContent == 'O'|| dataOfInnerContent == 'X'){
	        console.log("Invalid turn");
	        return false; }
	    else{
	        document.getElementById(idForElement).innerHTML=comm;
	        return true;}
	}

    function onCellClickHandler(element){

        let r = element.getAttribute("data-row");
        let c = element.getAttribute("data-column");
        if(turn%2!=0){
        var bol=displayMarkO(element);
        if (bol==false){
        turn=turn-1; }
        initialState[r][c] = 0; }
        else{
        var bol=displayMarkX(element);
        if (bol==false){
        turn=turn-1;}
        initialState[r][c] =1;}
        winningMovement();
        turn=turn+1;
    }

	function renderUI(elementId){
	    console.log(">>>>initialState", initialState)
		document.getElementById("row-input").value = rowCount;
		document.getElementById("column-input").value = colCount;
		document.getElementById("streak-input").value = streakCount;

		var numCol = 0;
		var numRow = initialState.length;
		if(numRow !==0){
			numCol = initialState[0].length;
		}
		var box = '<div class="grid-box">'
		for (let i=0; i<numRow; i++){
			var row = `<div class="row">`
			for (let j=0; j<numCol; j++){
				var column = `<div class="column" id="rowcol${i}${j}" data-row=${i} onclick="tictac.onCellClickHandler(this)" data-column=${j}>${initialState[i][j]}</div>`
				row += column
			}
			row += '</div>'
			box += row
		}
		box += '</div>'
		console.log(box)
		document.getElementById(elementId).innerHTML = box;

	}

    function onSubmitHandler(event){
        event.preventDefault();
        console.log("form submitted.")
        updateDataFromInput();
        renderUI("tic-tac-container");
    }


	function initGame(elementId){
		console.log(elementId);
		updateMatrix();
		renderUI(elementId);
		document.getElementById("submit-button").addEventListener("click", onSubmitHandler);

	};

	return {
		'initGame':initGame,
		'onCellClickHandler': onCellClickHandler
	};
})();

