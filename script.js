const toggleMode = ()=>{
        let toggleImg = document.getElementById('toggle-img');
        let navbar = document.getElementById('navbar');
        let navbarMobile = document.getElementById('navbar-mobile');

        if(document.body.style.backgroundColor=='rgb(10, 19, 51)'){
            document.body.style.backgroundColor = 'rgb(156 173 233)';
            document.body.setAttribute('style','color: black !important;background-color: rgb(170 178 203);');
            toggleImg.src = 'dark-mode.png'
            navbar.style.backgroundColor = 'rgb(119 133 185)'
            navbarMobile.style.backgroundColor = 'rgb(119 133 185)'
        }
        else{
            document.body.style.backgroundColor = 'rgb(10, 19, 51)';
            document.body.style.color = 'white';
            toggleImg.src = 'light-mode.png';
            navbar.style.backgroundColor = '#14235e'
            navbarMobile.style.backgroundColor = '#14235e'
        }
   
}