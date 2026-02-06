document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".next-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const currentPage = button.closest(".page");
      const nextPageId = button.getAttribute("data-next");
      const nextPage = document.getElementById(nextPageId);

      if(currentPage) currentPage.style.display = "none";
      if(nextPage) nextPage.style.display = "block";
    });
  });

});
