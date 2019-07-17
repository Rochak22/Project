
function checkpwd()
{
    var password=document.getElementById("pwd1").value;
    var cpassword=document.getElementById("cpwd").value;

    if(cpassword !== password)
    {
        window.alert("Please Write same Password");
        document.getElementById("cpwd").value = "";
    }
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // ...
  } else {
    // User is signed out.
    
    // ...
  }
});

function signup()
{
    var userEmail1=document.getElementById("email1").value;
    var userPassword1=document.getElementById("pwd1").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail1, userPassword1).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " + errorMessage);
      });
}

function login()
{
    var userEmail=document.getElementById("email").value;
    var userPassword=document.getElementById("pwd").value;

    

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function () {
        // Sign-In Successful.
        window.location.replace("logged.html");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error : " + errorMessage);
      });

}

function logout()
{
   firebase.auth().signOut().then(function () {
    // Sign-out successful.
    window.location.replace("main.html");
}).catch(function (error) {
    // An error happened.
    alert(error);
})
}




