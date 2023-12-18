let select = document.querySelector("#select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let email = document.querySelector(".email");
let resume = document.querySelector(".resume");
let enviar = document.querySelector(".enviar")
let tema = document.querySelector(".tema");


enviar.addEventListener ("click",(e) => {
  e.preventDefault();
  if (
    !emptyInput(nombre) &&
    !emptyInput(apellido) &&
    !emptyInput(email)
  )

  {
    Swal.fire({
      icon: "success",
      title: "Gracias por conteirte en un orador ",
      html: `<p>${nombre.value} ${apellido.value}</p>
      <p>Hemos enviado la informacion a tu email : ${email.value}</p>`,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./index.html";
      }
    });
  }
});



let total = (cantidad, categoria, div) => {
  if (categoria === "1") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.2}`;
  }

  if (categoria === "2") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.5}`;
  }

  if (categoria === "3") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.85}`;
  }
};

let emptyInput = (input) => {
  if (input.value === "") {
    input.style.borderColor = "red";
    return true;
  } else {
    input.style.borderColor = "green";
  }
};

select.addEventListener("change", (e) => {

  if (e.target.value === "Seleccione categoria") {
    divTotal.textContent = "Total a pagar: $";
  }
  total(cantidad.value, e.target.value, divTotal);
});

cantidad.addEventListener("input", (e) => {
  total(cantidad.value, select.value, divTotal);
});

resume.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !emptyInput(nombre) &&
    !emptyInput(apellido) &&
    !emptyInput(email) &&
    !emptyInput(cantidad)
  )
   {
    Swal.fire({
      icon: "success",
      title: "Gracias por realizar tu compra",
      html: `<p>${nombre.value} ${apellido.value}</p>
      <p>Hemos enviado la informacion a: ${email.value}</p>
      <p>${divTotal.textContent}</p>`,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./index.html";
      }
    });
  }
});

