function modalOpen(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if(modalTimerId){
    clearInterval(modalTimerId)
  }
  
}

function modalClose(modalSelector){
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  
}


function modals (triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const ModalbtnClose = document.querySelector("[data-close]");
  

    modalTrigger.forEach((btn) => {
      btn.addEventListener("click",() => modalOpen(modalSelector, modalTimerId));
    });
  
    modal.addEventListener("click", function (event) {
      if (
        event.target === modal ||
        event.target.getAttribute("data-close") === ""
      ) {
          modalClose(modalSelector)
      }
    });
  
    ModalbtnClose.addEventListener("click", () => modalClose(modalSelector));
  
    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape" && modal.classList.contains('show')) {
        modalClose(modalSelector)
      }
    });
   
  
    function showModalByScroll() {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight
      ) {
        modalOpen(modalSelector, modalTimerId );
        window.removeEventListener("scroll", showModalByScroll);
      }
    }
  
    window.addEventListener("scroll", showModalByScroll);

    function BtnScrollTop() {
      const scrollBtn = document.querySelector(".btnFixedHead");
  
      scrollBtn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
      });
    }
  
    BtnScrollTop();
}


export default modals;

export {modalOpen}
export {modalClose}