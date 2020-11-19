var count = 1;
function counter()
{
	if(count>=3)
	{
		document.getElementById('submit').style.display="none";
		document.getElementById('rest').style.display="inline";
		document.getElementById('values').style.display="block";
		document.getElementById('home').style.display="block";
		document.getElementById('score_content').style.display="block";
		document.getElementById('win').style.display="block";
		document.getElementById('win').name="red";
		document.getElementById('win').value="You Lose";
		document.getElementById('breaks').style.display="none";
		document.getElementById('breaks_end').style.display="none";
		document.getElementById('my_game').style.display="none";
	}else
	{
		count++;
	}
}

/*
function reset_all()
{
	count = 1;
	document.getElementById('one').value="";
	document.getElementById('two').value="";
	document.getElementById('three').value="";
	document.getElementById('four').value="";
	captcha();
	document.getElementById('a1').value="";
	document.getElementById('a1').name="skyblue";
	document.getElementById('a2').value="";
	document.getElementById('a2').name="skyblue";
	document.getElementById('a3').value="";
	document.getElementById('a3').name="skyblue";
	document.getElementById('a4').value="";
	document.getElementById('a4').name="skyblue";
	document.getElementById('b1').value="";
	document.getElementById('b1').name="skyblue";
	document.getElementById('b2').value="";
	document.getElementById('b2').name="skyblue";
	document.getElementById('b3').value="";
	document.getElementById('b3').name="skyblue";
	document.getElementById('b4').value="";
	document.getElementById('b4').name="skyblue";
	document.getElementById('c1').value="";
	document.getElementById('c1').name="skyblue";
	document.getElementById('c2').value="";
	document.getElementById('c2').name="skyblue";
	document.getElementById('c3').value="";
	document.getElementById('c3').name="skyblue";
	document.getElementById('c4').value="";
	document.getElementById('c4').name="skyblue";
	chance();
	document.getElementById('submit').style.display="inline";
	document.getElementById('rest').style.display="none";
	document.getElementById('values').style.display="none";
}*/
function go_home()
{
	document.getElementById('my_game').style.display="none";
	document.getElementById('home').style.display="block";
}
function chance()
{
	if(count==1){document.getElementById('chances').value="3";}else 
	if(count==2){document.getElementById('chances').value="2";}else
	if(count==3){document.getElementById('chances').value="1";}else
	if(count==4){document.getElementById('chances').value="0";}
}
function reset_input()
{
	document.getElementById('one').value="";
	document.getElementById('two').value="";
	document.getElementById('three').value="";
	document.getElementById('four').value="";
}
function submit()
{
	
	if(document.getElementById('one').value=="" || document.getElementById('two').value=="" || document.getElementById('three').value=="" || document.getElementById('four').value=="")
	{
		alert("Fill The Boxes and Try");
	}	else
	{
	if(document.getElementById('pass_one').value==document.getElementById('one').value&&document.getElementById('pass_two').value==document.getElementById('two').value&&document.getElementById('pass_three').value==document.getElementById('three').value&&document.getElementById('pass_four').value==document.getElementById('four').value)
	{
		document.getElementById('home').style.display="block";
		document.getElementById('score_content').style.display="block";
		document.getElementById('win').style.display="block";
		document.getElementById('win').name="green";
		document.getElementById('win').value="You Won";
		document.getElementById('my_game').style.display="none";
		document.getElementById('submit').style.display="none";
		document.getElementById('rest').style.display="inline";
		reset_all();
	}else
	{
		if(count==1)
		{
		document.getElementById('a1').value=document.getElementById('one').value;	
		document.getElementById('a2').value=document.getElementById('two').value;
		document.getElementById('a3').value=document.getElementById('three').value;
		document.getElementById('a4').value=document.getElementById('four').value;
		//color for a1
		if(document.getElementById('one').value==document.getElementById('pass_one').value)
		{
			document.getElementById('a1').name="green";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_two').value)
		{
			document.getElementById('a1').name="orange";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_three').value)
		{
			document.getElementById('a1').name="orange";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_four').value)
		{
			document.getElementById('a1').name="orange";
		}else
		{
			document.getElementById('a1').name="red";
		}
		
		//color for a2
		if(document.getElementById('two').value==document.getElementById('pass_two').value)
		{
			document.getElementById('a2').name="green";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_one').value)
		{
			document.getElementById('a2').name="orange";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_three').value)
		{
			document.getElementById('a2').name="orange";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_four').value)
		{
			document.getElementById('a2').name="orange";
		}else
		{
			document.getElementById('a2').name="red";
		}
		
		//color for a3
		if(document.getElementById('three').value==document.getElementById('pass_three').value)
		{
			document.getElementById('a3').name="green";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_one').value)
		{
			document.getElementById('a3').name="orange";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_two').value)
		{
			document.getElementById('a3').name="orange";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_four').value)
		{
			document.getElementById('a3').name="orange";
		}else
		{
			document.getElementById('a3').name="red";
		}
		
		//color for a4
		if(document.getElementById('four').value==document.getElementById('pass_four').value)
		{
			document.getElementById('a4').name="green";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_one').value)
		{
			document.getElementById('a4').name="orange";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_two').value)
		{
			document.getElementById('a4').name="orange";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_three').value)
		{
			document.getElementById('a4').name="orange";
		}else
		{
			document.getElementById('a4').name="red";
		}
		}else if(count==2){
			
		document.getElementById('b1').value=document.getElementById('one').value;	
		document.getElementById('b2').value=document.getElementById('two').value;
		document.getElementById('b3').value=document.getElementById('three').value;
		document.getElementById('b4').value=document.getElementById('four').value;
		//color for b1
		if(document.getElementById('one').value==document.getElementById('pass_one').value)
		{
			document.getElementById('b1').name="green";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_two').value)
		{
			document.getElementById('b1').name="orange";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_three').value)
		{
			document.getElementById('b1').name="orange";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_four').value)
		{
			document.getElementById('b1').name="orange";
		}else
		{
			document.getElementById('b1').name="red";
		}
		
		//color for b2
		if(document.getElementById('two').value==document.getElementById('pass_two').value)
		{
			document.getElementById('b2').name="green";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_one').value)
		{
			document.getElementById('b2').name="orange";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_three').value)
		{
			document.getElementById('b2').name="orange";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_four').value)
		{
			document.getElementById('b2').name="orange";
		}else
		{
			document.getElementById('b2').name="red";
		}
		
		//color for b3
		if(document.getElementById('three').value==document.getElementById('pass_three').value)
		{
			document.getElementById('b3').name="green";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_one').value)
		{
			document.getElementById('b3').name="orange";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_two').value)
		{
			document.getElementById('b3').name="orange";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_four').value)
		{
			document.getElementById('b3').name="orange";
		}else
		{
			document.getElementById('b3').name="red";
		}
		
		//color for b4
		if(document.getElementById('four').value==document.getElementById('pass_four').value)
		{
			document.getElementById('b4').name="green";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_one').value)
		{
			document.getElementById('b4').name="orange";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_two').value)
		{
			document.getElementById('b4').name="orange";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_three').value)
		{
			document.getElementById('b4').name="orange";
		}else
		{
			document.getElementById('b4').name="red";
		}
		
		}else if(count==3){
			
		document.getElementById('c1').value=document.getElementById('one').value;	
		document.getElementById('c2').value=document.getElementById('two').value;
		document.getElementById('c3').value=document.getElementById('three').value;
		document.getElementById('c4').value=document.getElementById('four').value;
		//color for c1
		if(document.getElementById('one').value==document.getElementById('pass_one').value)
		{
			document.getElementById('c1').name="green";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_two').value)
		{
			document.getElementById('c1').name="orange";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_three').value)
		{
			document.getElementById('c1').name="orange";
		}else
		if(document.getElementById('one').value==document.getElementById('pass_four').value)
		{
			document.getElementById('c1').name="orange";
		}else
		{
			document.getElementById('c1').name="red";
		}
		
		//color for c2
		if(document.getElementById('two').value==document.getElementById('pass_two').value)
		{
			document.getElementById('c2').name="green";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_one').value)
		{
			document.getElementById('c2').name="orange";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_three').value)
		{
			document.getElementById('c2').name="orange";
		}else
		if(document.getElementById('two').value==document.getElementById('pass_four').value)
		{
			document.getElementById('c2').name="orange";
		}else
		{
			document.getElementById('c2').name="red";
		}
		
		//color for c3
		if(document.getElementById('three').value==document.getElementById('pass_three').value)
		{
			document.getElementById('c3').name="green";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_one').value)
		{
			document.getElementById('c3').name="orange";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_two').value)
		{
			document.getElementById('c3').name="orange";
		}else
		if(document.getElementById('three').value==document.getElementById('pass_four').value)
		{
			document.getElementById('c3').name="orange";
		}else
		{
			document.getElementById('c3').name="red";
		}
		
		//color for c4
		if(document.getElementById('four').value==document.getElementById('pass_four').value)
		{
			document.getElementById('c4').name="green";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_one').value)
		{
			document.getElementById('c4').name="orange";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_two').value)
		{
			document.getElementById('c4').name="orange";
		}else
		if(document.getElementById('four').value==document.getElementById('pass_three').value)
		{
			document.getElementById('c4').name="orange";
		}else
		{
			document.getElementById('c4').name="red";
		}
		
		}
	}
	
	
	reset_input();
	counter();
	chance();
	
	}
}


function captcha(){
                     var alpha = new Array('1','2','3','4','5','6','7','8','9','0');
                     var i;
                     for (i=0;i<6;i++){
                       var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                      }
                    var code1 = a ;
					  var code2 = b ;
					    var code3 = c ;
						  var code4 = d ;
					if(a==b||a==c||a==d||b==c|b==d||c==d)
					{
						captcha();
					}else{
                    document.getElementById("pass_one").value = code1;
					document.getElementById("pass_two").value = code2;
					document.getElementById("pass_three").value = code3;
					document.getElementById("pass_four").value = code4;
					}
                  }