import {modalOpen, modalClose} from './modal';
import {postData} from '../service/services';

function forms(formSelector, modalTimerId){
    
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "spinner.svg",
    succse: "Спасибо! Скоро мы вами свяжемся",
    faliure: "Что-то пошла не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  

  function bindPostData(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.classList.add("statusStyle");
      form.append(statusMessage);


      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThankModals(message.succse);
          form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThankModals(message.faliure);
        });
    });
  }

  function showThankModals(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");

    modalOpen('.modal', modalTimerId );
    
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content"> 
          <div class="modal__close" data-close >&times;</div>
          <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.classList.add("show");
      thanksModal.classList.remove("hide");
      modalClose('.modal')
    }, 4000);
  }

}

export default forms;