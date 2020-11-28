import tabs       from "./modules/Tabs";
import modal      from "./modules/modal";
import sliders from "./modules/sliders"
import timer      from "./modules/timer";
import cards      from "./modules/cards";
import calculate  from "./modules/calculate";
import forms      from "./modules/forms";
import {openModal} from './modules/modal';



window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout( () => openModal('.modal', modalTimerId), 50000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer('.timer', '2021-01-01');
  sliders({
    sliders: ".offer__slide",
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    filed: ".offer__slider-inner"


  })
  cards();
  calculate();
  forms("form", modalTimerId);

});
