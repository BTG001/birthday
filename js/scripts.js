  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  function validate()
{
  var username = document.getElementById("uname");
  var email = document.getElementById("mail");
  var inputMonth = document.getElementById("month");
  var inputDate = document.getElementById("date");
  var inputYear = document.getElementById("year");
  var radio1 = document.getElementById("man").checked;
  var radio2 = document.getElementById("woman").checked;


  if(username.value == "" || email.value == "" || inputDate.value == "" || inputMonth.value == "" || inputYear.value == "")
{
  alert("No blank values allowed");
  return false;
}
  else if((inputMonth.value <= 0 || inputMonth.value > 12) || (inputMonth.value == 2 && inputDate.value > 29))
{
  alert("Enter a valid month");
  return false;
}
  else if(inputDate.value <=0 || inputDate.value > 31)
  {
    alert("Enter a valid date");
    return false;
  }
  else if(inputYear.value == "")
  {
    alert("Enter the Year");
    return false;
  }
  else if((radio1 == "") && (radio2 == ""))
  {
    alert("Select either male or female");
    return false
  }
  else
{
  true;
}
}
