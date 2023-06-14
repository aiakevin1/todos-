

//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyB_b0I1RI6QSah1iVDpp7kSJKqJWjhol6E",
      authDomain: "teste-de-aula-101.firebaseapp.com",
      databaseURL: "https://teste-de-aula-101-default-rtdb.firebaseio.com",
      projectId: "teste-de-aula-101",
      storageBucket: "teste-de-aula-101.appspot.com",
      messagingSenderId: "222409233866",
      appId: "1:222409233866:web:ae38ed863a008f4a46eb33"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}