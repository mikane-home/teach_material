window.onload = function() {
  for (let step = 1; step <= 20; step++) {
    let id = "number" + step;
    document.getElementById(id).style.opacity = "0";
  }
}

function clickBox(ele) {
  var id_value = ele.id;
  console.log(id_value);
  const number = document.getElementById(id_value);

  if(number.style.opacity=="0"){
    number.style.opacity = "1";
  }else {
    number.style.opacity = "0";
  }
}
