function sliders ({container, sliders, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, filed}){
  const slides = document.querySelectorAll(sliders),
  slide = document.querySelector(container),
  prev = document.querySelector(prevArrow),
  next = document.querySelector(nextArrow),
  total = document.querySelector(totalCounter),
  current = document.querySelector(currentCounter),
  sliderWrapper = document.querySelector(wrapper),
  slidesFiled = document.querySelector(filed),
  width = window.getComputedStyle(sliderWrapper).width;
  let sliderIndex = 1;
  let offset = 0;
  
  console.log(offset);
  
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${sliderIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = sliderIndex;
  }
  
  slidesFiled.style.width = 100 * slides.length + "%";
  slidesFiled.style.display = "flex";
  slidesFiled.style.transition = "0.5s all";
  
  sliderWrapper.style.overflow = "hidden";
  
  slides.forEach((slide) => {
    slide.style.width = width;
  });
  
  slide.style.position = "relative";
  
  const indicators = document.createElement("ol"),
    dots = [];
  
  indicators.classList.add("carousel-indicator");
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slide.append(indicators);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }
  
  function deletNotDigits(str) {
    return +str.replace(/\D/g, "");
  }
  
  function sliderShowLeng() {
    if (slides.length < 10) {
      current.textContent = `0${sliderIndex}`;
    } else {
      current.textContent = sliderIndex;
    }
  }
  
  function dotsShow() {
    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    dots[sliderIndex - 1].style.opacity = 1;
  }
  function sliderFiled() {
    slidesFiled.style.transform = `translate(-${offset}px)`;
  }
  
  next.addEventListener("click", () => {
    if (offset == deletNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deletNotDigits(width);
    }
  
    sliderFiled();
  
    if (sliderIndex == slides.length) {
      sliderIndex = 1;
    } else {
      sliderIndex++;
    }
    sliderShowLeng();
    dotsShow();
  });
  
  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset -= deletNotDigits(width);
    } else {
      offset += deletNotDigits(width);
    }
  
    sliderFiled();
  
    if (sliderIndex == 1) {
      sliderIndex = slides.length;
    } else {
      sliderIndex--;
    }
  
    sliderShowLeng();
    dotsShow();
  });
  
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
  
      sliderIndex = slideTo;
      offset = deletNotDigits(width) * (slideTo - 1);
      sliderFiled();
  
      sliderShowLeng();
      dotsShow();
    });
  });
  
  
}

export default sliders;