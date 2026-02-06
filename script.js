document.addEventListener("DOMContentLoaded", () => {

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");

  // Next button: intro → photos
  document.getElementById("next1").addEventListener("click", ()=>{
    page1.style.display = "none";
    page2.style.display = "block";
  });

  // Next button: photos → final note
  document.getElementById("next2").addEventListener("click", ()=>{
    page2.style.display = "none";
    page3.style.display = "block";
  });

});
