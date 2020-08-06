var tictac = (function(){

	var initialState = []

	var rowCount = "3";
	var colCount = "3";
	var streakCount = "3";
	var turn=0;
	var ids=[];
	var a=0;

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
	    console.log(dataOfInnerContent);
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
	    console.log(dataOfInnerContent);
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
        if(turn%2!=0)
        {
        var bol=displayMarkX(element);
        if (bol==false){
        turn=turn-1;
        }
        initialState[r][c] = 0;
        }
        else
        {
        var bol=displayMarkO(element);
        if (bol==false){
        turn=turn-1;
        }
        initialState[r][c] =1;
        }
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

