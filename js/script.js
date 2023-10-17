let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};



// Sending email function
function sendMail(){
    var params = {

        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("Phone").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("message").value
    };

    const serviceID =  "service_oshwgdw";
    const templateID = "template_asxma76";

    emailjs
    .send(serviceID,templateID,params)
    .then(
        (res) =>{
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("Subject").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert('Your message send successfully')
     })
    .catch((err) => console.log(err))
};



