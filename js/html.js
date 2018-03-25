var a =[ [0,0,1,1,0,0,0,0,0,1,0,0],[0,0,1,1,1,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,0,0,1,1,1,0,0],[0,0,1,1,0,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,0,0],[0,0,1,0,0,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0],[0,1,1,1,1,1,1,1,0,0,0,0],[0,1,0,0,0,1,1,0,0,0,0,0],[0,1,0,0,0,0,1,0,0,0,0,0],[0,1,0,1,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0]];
// var incompleteGrid =[[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
// var incompleteGrid = new Array();

var incompleteGrid = [];
for(var x = 0; x < 14; x++){
    incompleteGrid[x] = [];    
    for(var y = 0; y < 12; y++){ 
        incompleteGrid[x][y] = "";    
    }    
}

// var incompleteGrid = new Array([]);
incompleteGrid[2][2] = 'P';
incompleteGrid[0][3] = 'B';
incompleteGrid[1][4] = 'D';
incompleteGrid[1][9] = 'E';
incompleteGrid[1][11] = 'A';
incompleteGrid[2][7] = 'L';
incompleteGrid[4][5] = 'G';
incompleteGrid[3][4] = 'V';
incompleteGrid[5][8] = 'E';
incompleteGrid[3][8] = 'A';
incompleteGrid[6][10] = 'T';
incompleteGrid[6][6] = 'R';
incompleteGrid[8][4] = 'T';
incompleteGrid[9][6] = 'I';
incompleteGrid[11][6] = 'U';
incompleteGrid[11][3] = 'M';
incompleteGrid[13][1] = 'T';
incompleteGrid[11][8] = 'T';
incompleteGrid[10][1] = 'R';
incompleteGrid[7][5] = 'A';
incompleteGrid[5][3] = 'N';
var str = "<table>";
var i,j;
for(i=0;i<14;i++)
{  str += "<tr>"
	for(j=0;j<12;j++)
	{   
		// alert("hola")
		if(a[i][j]==0)
			str += "<td id=\"cross\" class=\"enable\"></td>\n"
		else{
			if(incompleteGrid[i][j] !== '')
				str += "<td id=\"cross\" class=\"disable\"><input maxlength='1' name=\"hack\" value='"+incompleteGrid[i][j]+"' disable='disable' onchange='checkResponse()'></input></td>\n"
			   else
				str += "<td id=\"cross\"><input maxlength='1' name='"+toString(i) +","+toString(j)+"'></input></td>\n";
         
            }
         }
	str += "</tr>"

}

str += "</table>";

var answer = [["","","T","B","","","","","","H","",""],["","","U","U","D","","","E","M","E","T","A"],["C","A","P","T","I","O","N","L","L","A","",""],["","","N","T","V","","","B","A","D","",""],["I","O","","G","F","A","B","E","",""],["","","M","N","F","O","O","T","E","R","",""],["","","G","","","L","R","E","L","Y","T","S"],["","","","","","A","M","","","","",""],["","S","E","C","T","I","O","N","","","",""],["","C","","","","D","I","","","","",""],["","R","","","","","D","","","","",""],["","I","M","E","N","U","I","T","E","M",""],["","P","","","","","A","","","","",""],["","T","","","","","","","","","",""]];

var grid = document.getElementsByClassName('grid')[0];
grid.innerHTML = str;


var count = 0;

function checkResponse(id)
for(i=0;i<14;i++)
{
	count = i;
	for(j=0;j<12;j++)
	{
		var value = document.getElementsByName(toString(i)+","+toString(j))[count].value;
		console.log("Value is "+value);
		if(value== answer[i][j])
			alert("correct");

		++count;


	}
}




















