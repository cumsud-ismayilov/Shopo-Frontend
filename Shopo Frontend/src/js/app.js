
const item = document.querySelector(".united");
const list  = document.querySelector(".open-list");
if(item){
  item.addEventListener("click",()=>{
    
       list.classList.toggle("openactive")

    })
}

const Usdopen =document.querySelector(".american");
const Usdlist =document.querySelector(".usdlist");
if (Usdopen) {
  Usdopen.addEventListener("click",()=>{
    Usdlist.classList.toggle("usdactive")
  })
}





const Banglaopen =document.querySelector(".bangla");
const Bnglist = document.querySelector(".banglalist");
if (Banglaopen) {
  Banglaopen.addEventListener("click",()=>{
   Bnglist.classList.toggle("banglaactive")

  })
}



const Openmiddle = document.querySelector(".middleopen");
 const CloseMenu = document.querySelector(".middleclose");
const MiddleList = document.querySelector(".middlelist");

if (Openmiddle) {
  Openmiddle.addEventListener("click",()=>{
    MiddleList.classList.toggle("middleactive")
  })
}


// if (Openmiddle) {
//   Openmiddle.addEventListener("click",()=>{
//     MiddleList.classList.add("categoriactive")
   
//   })
// }
// if (CloseMenu) {
//   CloseMenu.addEventListener("click",()=>{
//    MiddleList.classList.remove("categoriactive")
//     console.log("sla");
//   })
// }







const Navbar = document.querySelector(".envato");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar) {
      Navbar.classList.add("actice-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("actice-nav");
    }
  }
});






const Modal = document.getElementById("modal");
const Close = document.querySelector(".closebutton")
window.addEventListener("load", () => {
  setTimeout(() => {
    if (Modal) {
      Modal.style.display = "block";
    }
    if(Close){
      Close.addEventListener("click",()=>{
           console.log("salam");
        Modal.style.display = "none"

      })
    }

  }, 200);
});




const CateOpen = document.querySelector(".cateopen");
const CateList = document.querySelector(".catelist");
const CateClose = document.querySelector(".cateclose");
if (CateOpen) {
  CateOpen.addEventListener("click",()=>{
    CateList.classList.add("categoriactive")
   
  })
}
if (CateClose) {
  CateClose.addEventListener("click",()=>{
   CateList.classList.remove("categoriactive")
    console.log("sla");
  })
}
















