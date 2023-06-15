const toggleMode = ()=>{
        let toggleImg = document.getElementById('toggle-img');
        let toggleBtn = document.getElementById('toggle-btn');
        let toggleBtn1 = document.getElementById('toggle-btn-1');
        let toggleImgMobile = document.getElementById('toggle-img-mobile');
        let navbar = document.getElementById('navbar');
        let navbarMobile = document.getElementById('navbar-mobile');
        let lightText = document.getElementsByClassName('light-text');

        if(document.body.style.backgroundColor=='rgb(10, 19, 51)'){
            // document.body.style.backgroundColor = 'rgb(156 173 233)';
            document.body.setAttribute('style','color: black !important;background-color: rgb(233 233 233);');
            toggleImg.src = 'dark-mode.png'
            toggleBtn.style.border = '1px solid black';
            toggleBtn1.style.border = '1px solid black';
            toggleImgMobile.src = 'dark-mode.png'
            navbar.style.backgroundColor = 'rgb(201 201 203)'
            navbarMobile.style.backgroundColor = 'rgb(201 201 203)';
            for(let i=0;i<lightText.length;i++){
                lightText[i].style.color= 'black';
            }
        }
        else{
            document.body.style.backgroundColor = 'rgb(10, 19, 51)';
            document.body.style.color = 'white';
            toggleImg.src = 'light-mode.png';
            toggleBtn.style.border = '1px solid white';
            toggleBtn1.style.border = '1px solid white';
            toggleImgMobile.src = 'light-mode.png';
            navbar.style.backgroundColor = '#14235e'
            navbarMobile.style.backgroundColor = '#14235e'
            for(let i=0;i<lightText.length;i++){
                lightText[i].style.color= 'white';
            }
        }
   
}