import "../css/componente.css";
import webpacklogo from "../assets/webpack-logo.png";

export const saludar = () => {
  // Titulo
  const h1 = document.createElement("h1");
  h1.innerText = "Webpack Base";

  document.body.append(h1);

  // Imagen

  const img = document.createElement("img");
  img.src = webpacklogo;
  document.body.append(img);
};
