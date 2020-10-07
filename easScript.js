let div = document.querySelector('#container');
let oneBox = 0;
let size = 16;

let buttonPress = document.querySelector('#submit');
buttonPress.addEventListener('click', creation);
//function to create grids
function creation() {
    document.querySelector('#container').textContent = ''; //resets the grid to default(0/null)
    let inputField = document.querySelector('#textBox').value;
    size = +inputField; //gets the input by user and creates nxn divs(grids)
    if (size > 100) return;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            oneBox = document.createElement('div');
            oneBox.id = 'boxes';
            oneBox.style.width = `${660/size}` + 'px';
            oneBox.style.height = `${660/size}` + 'px'
            oneBox.style.background = 'linear-gradient(45deg, rgba(223,223,223,1), rgba(255,255,255,1))';
            // oneBox.style.border = '1px dotted #ededed';
            div.appendChild(oneBox);
        }
    }

    //funtion to generate random numbers from 0 to 255
    function random() {
        let color = [];
        for (let count = 0; count <= 255; count++) {
            color[count] = count;
        }
        let number = color[Math.floor(Math.random() * 255)];
        return +number;
    }
    //function to return random color
    function colorChange() {
        this.style.background = `rgb(${random()}, ${random()}, ${random()})`
    }
    let selectedBox = document.querySelectorAll('#boxes');
    selectedBox.forEach((div) => {
        div.addEventListener('mouseover', colorChange);
    });
}