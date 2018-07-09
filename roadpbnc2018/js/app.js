var button = document.getElementById('submitbutton');
button.addEventListener('click', lol);
function lol(){
var TeamNameValue = document.getElementById("teamname").value;
var PhoneValue = document.getElementById("phone").value;
var Name1 = document.getElementById("name1").value;
var Name2 = document.getElementById("name2").value;
var Name3 = document.getElementById("name3").value;
var Name4 = document.getElementById("name4").value;
var Name5 = document.getElementById("name5").value;
window.location = "whatsapp://send?phone=62895617480512&text=Pendaftaran%0ANama%20Tim%3A" + teamnamevalue.value + "%0ANomor Telepon%3A" + phonevalue.value + "%0ANama Pemain 1%3A" + name1.value"%0ANama Pemain 2%3A" + name2.value"%0ANama Pemain 3%3A" + name3.value"%0ANama Pemain 4%3A" + name4.value"%0ANama Pemain 5%3A" + name5.value;

}