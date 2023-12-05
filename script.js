function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  
  //pegar a tag img
  const img = document.querySelector("#profile img")
    //substituir a imamgem
  if (html.classList.contains("light")){
//se tiver lightmode, adicionar a imagem light
 img.setAttribute("src", "./assets/avatar-light.png")
 img.setAttribute("alt","Foto de Lindolfo com com camiseta vermelha e óculos de grau com fundo bege" )
  } else {
    //se tiver sem lightmode, manter a imagem normal
  img.setAttribute("src" , "./assets/avatar.png")
  img.setAttribute("alt", "Foto de Lindolfo com com camiseta preta e óculos escuro com fundo bege")
}
}
