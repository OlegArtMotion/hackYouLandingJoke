//when button clicked, change the name of the button to "you have hacked"


bodymovin.loadAnimation({
  container: document.getElementById("icon1"),
  path: "assets/lottie/icon1.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});
bodymovin.loadAnimation({
  container: document.getElementById("icon2"),
  path: "assets/lottie/icon2.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

bodymovin.loadAnimation({
  container: document.getElementById("icon3"),
  path: "assets/lottie/icon3.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

bodymovin.loadAnimation({
  container: document.getElementById("icon4"),
  path: "assets/lottie/icon4.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

bodymovin.loadAnimation({
  container: document.getElementById("icon5"),
  path: "assets/lottie/icon5.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

bodymovin.loadAnimation({
  container: document.getElementById("icon6"),
  path: "assets/lottie/icon6.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

bodymovin.loadAnimation({
  container: document.getElementById("icon7"),
  path: "assets/lottie/icon7.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

bodymovin.loadAnimation({
  container: document.getElementById("icon8"),
  path: "assets/lottie/icon8.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});
bodymovin.loadAnimation({
  container: document.getElementById("logo"),
  path: "assets/lottie/LogoMain.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});
bodymovin.loadAnimation({
  container: document.getElementById("logo2"),
  path: "./LogoMain.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});


const changeButtonText = () => {
    document.querySelector("h1").innerText = "Sorry dude...";
    document.querySelector("p").innerHTML = "You have been hacked!<br> ZU HA HA HA ";
    document.querySelector("p").style.fontSize = "100px";
    document.querySelector("p").style.margin = "20px";
    document.querySelector("p").style.color = "#00ff00";
    document.querySelector("p").style.lineHeight = "1.2";
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("button").innerHTML = "Pay 1 BTC to unlock";
    document.getElementById("button").style.fontSize = "20px";
    document.querySelector("h1").style.color = "#00ff00";
    

    bodymovin.loadAnimation({
      container: document.querySelector("#oleg"),
      path: "assets/lottie/Oleg.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    
    });
    
    document.querySelector("#oleg").classList.add("slava");
    document.querySelector("#oleg").style.width = "100%";
    
  }
  
  document.getElementById("button").addEventListener("click", changeButtonText);
    