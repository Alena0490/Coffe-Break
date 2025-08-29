const letters = document.querySelectorAll(".letter");

letters.forEach((letter, index) => {
  const length = letter.getTotalLength();

   letter.style.transition = "none"; 

  letter.style.strokeDasharray = length + "px";
  letter.style.strokeDashoffset = length + "px";

 // přidáno – obal pro spuštění animace až po vykreslení výchozího stavu
    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transition = "stroke-dashoffset 1s ease-in-out";
                letter.style.strokeDashoffset = "0";
            }, index * 1000);
        });
    }, 50);

  console.log(`Letter ${index + 1}:`, letter, "Length:", length);
  setTimeout(() => {
  document.querySelector("footer").classList.add("show");
}, letters.length * 1000); 
});
