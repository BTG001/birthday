function validate()
{
  var username = document.getElementById("uname");
  var email = document.getElementById("mail");


if(username.value == "" || email.value == "")
{
  alert("No blank values allowed");
  return false;
}
else
{
  true;
}
}