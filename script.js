let brewData = {};

const loginLoad = () => {
    if(localStorage.getItem('userEmail')){
        document.getElementById('local-storage-message').innerText = "Welcome Back " +localStorage.getItem('userEmail');
    }
    userEmail = sessionStorage.getItem('userEmail');
    userPassword = sessionStorage.getItem('userPassword');
    if(userEmail == 'akash@cmpe273.com' || userPassword == 'admin'){
        window.location.href="./list.html";
        // console.log('login please');   
    }
}

const breweryData = () => {
    userEmail = sessionStorage.getItem('userEmail');
    userPassword = sessionStorage.getItem('userPassword');
    if(userEmail != 'akash@cmpe273.com' || userPassword != 'admin'){
        window.location.href="./index.html";
        console.log('login please');   
    }
    getLocationCoords();
    document.getElementById("userEmail").innerHTML = "Hello " + userEmail +",";
    fetch('https://api.openbrewerydb.org/breweries').then(resp => {
        return resp.json();
    }).then(data => {
        brewData = data;
        listItemsFunc();
    }).catch(err => {
        console.log(err);
    });
}
const getLocationCoords = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var positionInfo = "Your current position is at (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            document.getElementById("location").innerHTML = positionInfo;
        });
    } else {
        document.getElementById("location").innerHTML = "Browser Doesn't Support the Location";
    }
}
const listItemsFunc = () => {
    let filteredData = brewData.map(bd => {
            return `
            <li class="box-element" style="display: block">
                <h1>Name : ${bd.name} </h1>
                <p>Id : ${bd.obdb_id} , (${bd.id}) </p>
                <p>Status : ${bd.brewery_type} </p>
                <p>Location : ${bd.city}, ${bd.state} , ${bd.postal_code} </p>
            </li>
            `;
    }).join("");
    document.querySelector('#brewery-list').insertAdjacentHTML("beforebegin", filteredData);
}

const searchFunc = () => {
    let searchKeyTerm, ul, li, a, i, txtValue;
    let searchTerm =  document.getElementById('search-brewery');
    searchKeyTerm = searchTerm.value.toUpperCase();
    ul = document.getElementById("breweryListUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h1")[0];
        txtValue = a.textContent;
        console.log("a");
        if (txtValue.toUpperCase().indexOf(searchKeyTerm) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

const logoutMe = () => {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userPassword');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    window.location.href="./index.html";
}
const getLoggedIn = () => {
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;
    sessionStorage.setItem("userEmail", userEmail);
    sessionStorage.setItem("userPassword", userPassword);
    localStorage.setItem('userEmail', 'akash@cmpe273.com');
    localStorage.setItem('userPassword', 'admin');
    if(userEmail == 'akash@cmpe273.com' && userPassword=='admin'){
        window.location.href="./list.html";
        console.log("ch");
    }else{
        alert('Incorrect User Email/Password');
    }
}