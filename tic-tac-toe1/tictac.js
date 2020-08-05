var tictac = (function(){

	var initialState = []

	var rowCount = "3";
	var colCount = "3";
	var streakCount = "3";

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

    function onCellClickHandler(element){
        console.log("cell clicked", event);
        let r = element.getAttribute("data-row");
        let c = element.getAttribute("data-column");
        initialState[r][c] = 0
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
				var column = `<div class="column" data-row=${i} onclick="tictac.onCellClickHandler(this)" data-column=${j}>${initialState[i][j]}</div>`
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

