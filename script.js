console.log(
  "Img front ->",
  "https://media.istockphoto.com/id/166089307/es/foto/juego-de-tarjetas-de-corazones-con-cama-king.jpg?s=612x612&w=0&k=20&c=L8YXp2-jSVEDiyfhC8uJDzuOlSyXvyK4yp2_S0ErxAg="
);
console.log(
  "Img back ->",
  "https://www.rawpixel.com/image/8920381/png-elements-collage"
);
console.log("Based in ->", "https://youtu.be/qrd5Z_XS7Nc?si=vD1AttJBDWbWW0mp");


const d = document;

d.addEventListener("click", e => {
  if (e.target.matches(".container")) {
    e.target.classList.toggle("activo");
  }
})