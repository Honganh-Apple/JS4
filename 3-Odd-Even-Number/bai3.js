/*function soChanLe() {
var soThuNhat = document.getElementById("txt-so-nhat").value*1;
var soThuHai = document.getElementById("txt-so-hai").value*1;
var soThuBa = document.getElementById("txt-so-ba").value*1;

console.log({soThuNhat, soThuHai, soThuBa});


if (soThuNhat % 2 == 0) {
    document.getElementById("result").innerHTML = `<p> ${soThuNhat} la so chan </p>`;

} else {
    document.getElementById("result").innerHTML = `<p> ${soThuNhat} la so le </p>`;
 
}
}*/
/*

function soChanLe() {
    var soThuNhat = document.getElementById("txt-so-nhat").value*1;
    var soThuHai = document.getElementById("txt-so-hai").value*1;
    var soThuBa = document.getElementById("txt-so-ba").value*1;
    
    console.log({soThuNhat, soThuHai, soThuBa});

    var countSoChan = 0;
    if (soThuNhat % 2 == 0) {
        countSoChan++;
    }
    if (soThuHai % 2 == 0) {
        countSoChan++;
    }
    if (soThuBa % 2 == 0) {
        countSoChan++;
    }

    document.getElementById("result").innerHTML =
    "Co" + countSoChan + "so chan ," + ( 3- countSoChan) + "so le";
}
*/

document.getElementById("demChanLe").onclick
= function() {
    var soThuNhat = document.getElementById("txt-so-nhat").value*1;
    var soThuHai = document.getElementById("txt-so-hai").value*1;
    var soThuBa = document.getElementById("txt-so-ba").value*1;
    
    var countSoChan = 0;
    if (soThuNhat % 2 == 0) {
        countSoChan++;
    }
    if (soThuHai % 2 == 0) {
        countSoChan++;
    }
    if (soThuBa % 2 == 0) {
        countSoChan++;
    }
    var countSoLe = 3-countSoChan;
    document.getElementById("result").innerHTML =
    `Even:  ${countSoChan} , Odd: ${countSoLe} so le`;
}