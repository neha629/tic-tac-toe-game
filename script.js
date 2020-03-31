var r = document.querySelector('#b');
var n = document.querySelector('#new');
var squares = document.querySelectorAll('#board td');
var move = 0;
var x_wins = 0;
var o_wins = 0;
function clearAll(){
    move = 0;
	for (var i = 0; i < squares.length; i++) {
	 	squares[i].textContent = "";
	 } 
}
r.addEventListener("click",clearAll);
n.addEventListener("click",function(){
	clearAll();
	x_wins = 0;
	o_wins = 0;
	update_scores(x_wins,o_wins);
})
function win(curr_mark)
{
	var hc,vc,rtolc = 0,ltorc = 0;
	for (var i = 0; i < 3; i++) {
		hc = vc = 0;
		for (var j = 0; j < 3; j++) {
			if(this.squares[i * 3 + j].innerHTML == curr_mark)
			{
				hc++;
			}
			if(this.squares[j * 3 + i].innerHTML == curr_mark)
			{
				vc++;
			}
			if(hc==3 || vc==3)
			{
				return true;
			}
		}	
		    if(this.squares[i * 3 + i].innerHTML == curr_mark)
			{
				rtolc++;
			}
		    if(this.squares[2 * (i+1) ].innerHTML == curr_mark)
			{
				ltorc++;
			}	
	}
	if(ltorc==3 || rtolc==3)
	{
		return true;
	}
	return false;
}
function mark(){
	move++;
	if(this.textContent == "")
	{
		if(move%2==1)
		{
			this.textContent = "X";
			if(win("X"))
			{
				alert("X has won");
				x_wins++;
				update_scores(x_wins,o_wins);
			}
		}
		else
		{
			this.textContent = "0";
			if(win("0"))
			{
				alert("0 has won");
				o_wins++;
				update_scores(x_wins,o_wins);
			}
		}
	}
	if(move == 9 && !(win("X")||win("0")))
	{
		alert("MATCH DRAW");
	}
}
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click',mark);
}

function update_scores(x_wins,o_wins)
{
	document.querySelector('#p1').innerHTML = x_wins;
	document.querySelector('#p2').innerHTML = o_wins;
}
