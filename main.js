function calcArea() {

  const i = document.querySelector('#bas').value
  const j = document.querySelector('#hei').value
  const ans = parseInt(i)*parseInt(j) 
  document.querySelector('#display-area-good').innerHTML = "The area of rectangle is: "+ans
}

