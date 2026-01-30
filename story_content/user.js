function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dlR1Iogy6y":
        Script1();
        break;
      case "6rJWJbhPr7x":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer("nama");
var skor = player.GetVar("skorpoin");
var kkm = player.GetVar("kkmpoin");

}

function Script2()
{
  var player = GetPlayer("nama");
var skor = player.GetVar("skorpoin");
var kkm = player.GetVar("kkmpoin");

var csvContent = "Rekap "+nama+"\n";
csvContent += "Total,"+ skorpoin +","+ kkmpoin +" %\n";

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
link.setAttribute("download", "RekapData.csv");
document.body.appendChild(link);
link.click();

}

