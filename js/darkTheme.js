function makeDark(){
    const linksFromHead = document.head.querySelectorAll("link");

    linksFromHead[1].href = "./styles/css/main/css";
}