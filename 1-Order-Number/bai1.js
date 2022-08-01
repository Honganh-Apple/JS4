function showThuTu() {
    console.log("yes");


var soThuNhat=document.getElementById("txt-so-nhat").value * 1;
var soThuHai=document.getElementById("txt-so-hai").value * 1;
var soThuBa=document.getElementById("txt-so-ba").value * 1;


const soNhap = [soThuNhat, soThuHai, soThuBa];

document.getElementById("result").innerHTML = soNhap.sort();
}
