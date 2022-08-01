function fullHouse() {

var aiDay=document.getElementById("txt-ai-day").value;
console.log(aiDay);
var result = aiDay;

if (aiDay == "M") {
    document.getElementById("result").innerHTML =  `<h1>Chao me</h1>`;

} else if (aiDay == "B") {
    document.getElementById("result").innerHTML =  `<h1>Chao bo</h1>`;

} else if (aiDay == "A") {
    document.getElementById("result").innerHTML =  `<h1>Chao anh</h1>`;
} else {
    document.getElementById("result").innerHTML =  `<h1>Chao em</h1>`;
}
}



/*
switch(aiDay) {
    case "M": {
    document.getElementById(result).innerHTML = ` Hello Me`;
    break;
    }
    case "B": {
        document.getElementById(result).innerHTML = ` Hello Bo`;
        break;
        }
}
   

}*/





document.getElementById("diemTong").onclick = function() {
    //var diemChuan = document.getElementById("txt-diem-chuan").value*1;
    var diemMon1 = document.getElementById("txt-mon-1").value*1;
    var diemMon2 = document.getElementById("txt-mon-2").value*1;
    var diemMon3 = document.getElementById("txt-mon-3").value*1;
    var diemKhuVuc = document.getElementById("txt-khu-vuc").value*1;
    var diemDoiTuong = document.getElementById("txt-doi-tuong").value*1;
    
    var tongDiem3 = diemMon1 + diemMon2+ diemMon3 +diemDoiTuong+diemKhuVuc;

    document.getElementById("diemTongm").value = tongDiem3;


    /*
var diemChuan = document.getElementById("txt-diem-chuan").value*1;


if (tongDiem < diemChuan); {
    document.getElementById("result").innerHTML =
    `Ban da rot `;
} else (tongDiem >= diemChuan) {
    document.getElementById("result").innerHTML =
    `Ban da dau`;
}

*/
}