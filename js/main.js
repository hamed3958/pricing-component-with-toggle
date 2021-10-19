
    function ShowHideDiv(tog) {
        var an = document.getElementsByClassName('annually');
        var mo = document.getElementsByClassName('monthly');

        
        for(var i=0; i< an.length; i++){
            an[i].style.display = tog.checked ? "block" : "none";
            mo[i].style.display = tog.checked ? "none" : "block" ;
        }
    }
