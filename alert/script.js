let dugme = document.getElementById("dugme") ; 

dugme.addEventListener("click", () =>{


    let datum = new Date() ; 

    let tekst = `trenutno vreme  i datum :
                 ${datum}`;
    alert(tekst) ; 
});