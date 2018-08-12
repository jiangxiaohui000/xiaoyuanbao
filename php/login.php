<?php 
$username = $_POST['username'];
$password = $_POST['password'];
// var loginList = [
	// {'name':'jiang','word':'123456'},
	// {'name':'xiaohui','word':'234567'},
	// {'name':'diannao','word':'345678'}
// ];
// for(i in loginList){
	// if($username == loginList[i].name && $password == loginList[i].word){
		// echo 1;
	// }else{
		// echo 0;
	// }
// }

if($username == "jiang" && $password == "123456"){
	echo 1;
}else{
	echo 2;
};

?>
