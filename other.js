function submit_name()
{
	document.getElementById('name_text1').value=document.getElementById('name_text').value;
	document.getElementById('home').style.display="block";
	document.getElementById('name').style.display="none";
	pass_focus('name_text');
}
function submit_male()
{
	document.getElementById('card-male').style.display="inline";
	document.getElementById('gender').style.display="none";
	document.getElementById('name').style.display="block";
	pass_focus('name_text');
}
function submit_female()
{
	document.getElementById('card-female').style.display="inline";
	document.getElementById('gender').style.display="none";
	document.getElementById('name').style.display="block";
}
function submit_LG()
{
		document.getElementById('home').style.display="none";
		document.getElementById('my_game').style.display="block";
}

function pass_focus(pass_to)
{
	document.getElementById(pass_to).focus();
}
function display()
{
	document.getElementById('help').style.display="block";
	document.getElementById('home').style.display="none";
}