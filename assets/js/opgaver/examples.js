let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(text) {
    return text + 'flammer på hjælm'
}

console.log(addExtra);

function updateExtras() {
    let generatedText = myExtras.map(extra => `<p>${extra}</p>`).join('');
    document.getElementById('extras').innerHTML = generatedText;
  }



