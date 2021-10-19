function getName(){
    const nameF = document.getElementById("firstName").value;
    const nameL = document.getElementById("lastName").value;
    document.getElementById("thanksMessage").innerHTML = `<p>Thank you ${nameF} ${nameL} for contacting me!</p>`;
}
