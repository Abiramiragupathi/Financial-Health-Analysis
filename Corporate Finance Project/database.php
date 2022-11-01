<!doctype html>  
<html>  
      <head>  
           <title> Test Page</title>  
      </head>  
      <body bgcolor="#7fad7b" style="font-family: monospace">
      <center>
	  <?php
	      $host="localhost";
$user="root";
$password="";
$connectob=mysqli_connect($host,$user,$password,"bankruptcy");


$a=$_GET['company'];
$c=$_GET['hide'];



$sql="INSERT INTO healthcondition (company_name, condition) VALUES ('$a','$c')";
if (mysqli_query($connectob,$sql))
  print("<h1>Applied Successfully inorder to verify your certificate use this number $m </h1>");
else{
	print("asdf");
}


mysqli_close($connectob)
?>
</center>
</body>
</html>
