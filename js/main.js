
function toggleMode(){
    const html = document.documentElement;

    // Método 1:

    // if(html.classList.contains("lightTheme")){
    //     html.classList.remove("lightTheme");
    // }else{
    //     html.classList.add("lightTheme");
    // }

    // Método 2:
    setTimeout(function() {
        html.classList.toggle("lightTheme");
    }, 200);
  
}