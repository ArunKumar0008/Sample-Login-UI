function opentab(tabName) {
    const tabs = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';

    const buttons = document.querySelectorAll('.tab button');
    buttons.forEach(button => {
        button.style.background = 'transparent';
        button.style.color = 'black';
    });

    const activeButton = document.querySelector(`button[onclick="opentab('${tabName}')"]`);
    if (activeButton) {
        activeButton.style.background = 'linear-gradient(to right, rgb(0, 0, 136), rgb(77, 77, 238))';
        activeButton.style.color = 'white';
    }
}
function signup(){
alert('Signup Sucessfull')
}
function login(){
alert('Login Sucessfull')
}