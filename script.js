var arak = [];

//A tömb kialakítása

function osszead() {
  var tetelSzorzat = hozzaAd();
  arak.push(tetelSzorzat);
  var osszesen = 0;

  for (let i = 0; i < arak.length; i++) {
    osszesen += arak[i];
  }
  document.getElementById("valami").innerHTML = "Összesen: " + osszesen + " Ft";

  console.log(arak);
  console.log(tetelSzorzat);
  console.log(osszesen);
}

function torol() {
  var mezok = document.getElementById("ulNev");
  var mezok = document.getElementById("ulDarab");
  var mezok = document.getElementById("ulAr");
  mezok.innerHTML = "";

  location.reload();
}

function hozzaAd() {
  // Az értékek beolvasása html-ből

  const tetelN = document.getElementById("nev").value;
  const tetelSz = document.getElementById("darabSzam").value;
  const tetelA = document.getElementById("tetelAra").value;


  // új tétel/név hozzáadása a listához

  var ujLiNev = document.createElement("li");
  var ujTetelNev = document.createTextNode(tetelN);
  ujLiNev.appendChild(ujTetelNev);
  const hovaUlNev = document.getElementById("ulNev");
  hovaUlNev.appendChild(ujLiNev);
  
  // darabszám kiírása
  var ujLiDarab = document.createElement("li");
  var ujTetelDarab = document.createTextNode(tetelSz);
  ujLiDarab.appendChild(ujTetelDarab);
  const hovaUlDarab = document.getElementById("ulDarab");
  hovaUlDarab.appendChild(ujLiDarab);
  
  // ár kiírása 
  var ujLiAr = document.createElement("li");
  var ujTetelAr = document.createTextNode(tetelA);
  ujLiAr.appendChild(ujTetelAr);
  const hovaUlAr = document.getElementById("ulAr");
  hovaUlAr.appendChild(ujLiAr);





  // táblázat, táblázat sorainak kiírása, a bevitt értékekkel
/*
  var table = document.createElement("table");
  for (var i = 1; i < 2; i++) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var text1 = document.createTextNode(tetelN);
    var text2 = document.createTextNode(tetelSz);
    var text3 = document.createTextNode(tetelA);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);
    document.getElementById("tab").appendChild(table);
  }*/

  // törlés gomb soronként - w3s szerint
  var szovegem = document.getElementsByTagName("tr");
  var i;
  for (i = 0; i < szovegem.length; i++) {
    var span = document.createElement("span");
    var txt = document.createElement("button");
    span.className = "close";
    span.appendChild(txt);
    szovegem[i].appendChild(span);
  }
  // a gomb megnyomása eltünteti a sort
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  // darab és ár szorzata, vagyis egy tétel ára

  var szorzat = tetelSz * tetelA;
  if (szorzat != 0) {
    return szorzat;
  }
}
