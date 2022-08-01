loaiTamGiac = function (a, b, c) {
    if (a == b && b== c && a==c) {
      return "tam giac deu";
    } else if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      if (a == b || a == c || b == c) {
        return "tam giac vuong can";
      } else {
        return "tam giac vuong";
      }
    } else if (a == a || b == b || c == c) {
      return "tam giac can";
    } else {
      return "tam giac";
    }
  };
  
  document.getElementById("doanTamGiac").onclick = function () {
   
    var kieuTamGiac = "";
  
    var canh1 = document.getElementById("txt-canh-1").value * 1;
   
    var canh2 = document.getElementById("txt-canh-2").value * 1;
    
    var canh3 = document.getElementById("txt-canh-3").value * 1;
   
  
    kieuTamGiac = loaiTamGiac(canh1, canh2, canh3);
    document.getElementById("result").innerHTML =
      "Day la " + kieuTamGiac;
  };
  