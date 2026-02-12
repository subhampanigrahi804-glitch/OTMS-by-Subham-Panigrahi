function login(){
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if(user === "admin" && pass === "1234"){
    localStorage.setItem("adminLoggedIn","true");

    error.style.color="lightgreen";
    error.innerText="Login Successful! Redirecting...";

    setTimeout(()=>{
      window.location.href="dashboard.html";
    },1000);

  }else{
    error.innerText="Invalid Username or Password!";
  }
}
