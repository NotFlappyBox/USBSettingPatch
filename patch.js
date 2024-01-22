read = new FileReader;

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const file = event.target.files[0];
  read.readAsText(file);
});

function patch() {
  const data = JSON.parse(read.result);
  var usbS = {};
  usbS.items = [];
  for (let i of data.items) {
    let temp = {};
    temp.id = i.id;
    temp.uniqueId = i.uniqueId;
    temp.usbVer = "";
    usbS.items.push(temp);
  }
  console.log(usbS);
  downloadObjectAsJson(usbS, 'music_usbsetting')
}

function downloadObjectAsJson(exportObj, exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}