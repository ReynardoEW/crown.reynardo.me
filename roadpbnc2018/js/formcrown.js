
function lol(){
var teamnamevalue = document.getElementById("teamname").value;
var phonevalue = document.getElementById("phone").value;
var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;
var name3 = document.getElementById("name3").value;
var name4 = document.getElementById("name4").value;
var name5 = document.getElementById("name5").value;
window.location = "whatsapp\:\/\/send?phone=62895617480512&text=Pendaftaran%0ANama%20Tim%3A" + teamnamevalue + "%0ANomor Telepon%3A" + phonevalue + "%0ANama Pemain 1%3A" + name1 + "%0ANama Pemain 2%3A" + name2 +"%0ANama Pemain 3%3A" + name3 + "%0ANama Pemain 4%3A" + name4 + "%0ANama Pemain 5%3A" + name5;
console.log(name1);
}