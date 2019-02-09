function checkUserName(){
	var user = $('#userName').val();
	if(user=='monirkhan'){
		$('#userError').text('');
		return true;
	
	}else{
		$('#userError').text('Your user name is "monirkhan"');		
		return false;
	}	
}
$('#userName').blur(function(){
	checkUserName()
});

$('#userName').keyup(function(){
	checkUserName()
});


//for password


function passwordCheck(){
	var password = $('#psd').val();
	if(password==12345 ){
		$('#psdError').text('');
		return true;
	}else{
		$('#psdError').text('Your password is"12345"');
		return false;
	}
}

$('#psd').blur(function(){
	passwordCheck();
});
$('#psd').keyup(function(){
	passwordCheck();
});






//for submit

$('#loginForm').submit(function(){
	user_error = false;
	password_error = false;


	user_error = checkUserName();
	password_error = passwordCheck();

	if(user_error && password_error){
		return true;
	}else{
		return false;
	}

})








//for comment 
$('#save').click(function(){
	var name = $('#comName').val();
	var content = $('#text').val();

	$('dl').append("<dt><h3>"+name+"</h3></dt> <br>"+"<dt><p> &nbsp; &nbsp; &nbsp;"+content+" </p></dt>"+"<hr>");
	
})






//for registration


