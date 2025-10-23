const productos = [
  { nombre: "Corpiño triangulo con coleta", precio: 8000, oferta: 9500, img: "./assets/img1.png" },
  { nombre: "Conjunto triangulo basico", precio: 15000, oferta: 18000, img: "./assets/img3.png" },
  { nombre: "Bombis less", precio: 3500, oferta: 5000, img: "./assets/img4.png" },
  { nombre: "Set c/ coleta blanco", precio: 18000, oferta: 19500, img: "./assets/img6.png" },
  { nombre: "Set c/ tira clasico", precio: 15000, oferta: 16500, img: "./assets/img7.png" },
  { nombre: "Set c/ tira rosa", precio: 15000, oferta: 17000, img: "./assets/img8.png" },
  { nombre: "Set de microtul negro", precio: 18000, oferta: 20000, img: "./assets/img9.png" },
  { nombre: "Bombis less pack x2", precio: 7500, oferta: 8500, img: "./assets/img11.png" },
  { nombre: "Set c/ coleta", precio: 18000, oferta: 19000, img: "./assets/img12.png" },
  { nombre: "Bombis less x2", precio: 7500, oferta: 8000, img: "./assets/img14.png" },
  { nombre: "Conjunto puntilla negro", precio: 18000, oferta: 19500, img: "./assets/img15.png" },
  { nombre: "Conjunto de 3 piezas", precio: 25000, oferta: 27000, img: "./assets/img16.png" },
  { nombre: "Set niña", precio: 12000, oferta: 13500, img: "./assets/img17.png" },
  { nombre: "Pack x3 bedetinas", precio: 12000, oferta: 13000, img: "./assets/img19.png" },
  { nombre: "Pack x3 bedetinas", precio: 12000, oferta: 13000, img: "./assets/img20.png" },
  { nombre: "Conjunto bordo combinado", precio: 15000, oferta: 16500, img: "./assets/img21.png" },
  { nombre: "Conjunto triangulo basico", precio: 15000, oferta: 16000, img: "./assets/img22.png" },
  { nombre: "Conjunto bordo combinado", precio: 15000, oferta: 16500, img: "./assets/img24.png" },
  { nombre: "conjunto negro clasico", precio: 15000, oferta: 16500, img: "./assets/img25.png" },
  { nombre: "conjunto negro clasico", precio: 15000, oferta: 16500, img: "./assets/img26.png" },
  { nombre: "Pack x3 bombis less", precio: 12000, oferta: 13000, img: "./assets/img28.png" },
  { nombre: "Bedetina azul", precio: 5500, oferta: 7000, img: "./assets/img29.png" },
  { nombre: "scrunchies de pelo", precio: 3000, oferta: 4500, img: "./assets/img30.png" },
  { nombre: "bedetina amarilla", precio: 5500, oferta: 7000, img: "./assets/img31.png" },
  { nombre: "Bombis less", precio: 3500, oferta: 5000, img: "./assets/img32.png" },
  { nombre: "Bombachas culotte", precio: 8000, oferta: 9500, img: "./assets/img33.png" },
  { nombre: "Bombachas culotte", precio: 8000, oferta: 9500, img: "./assets/img35.png" },
  { nombre: "set de 3 piezas", precio: 18000, oferta: 19500, img: "./assets/img38.png" },
];

const galeria = document.getElementById("galeria");

productos.forEach(({ nombre, precio, oferta, img, codigo, }) => {
  const producto = document.createElement("div");
  producto.classList.add("producto");

  producto.innerHTML = `
    <img src="${img}" alt="${nombre}" loading="lazy">
    <h2>${nombre}</h2>

    <div class="talles">
      <button>85</button>
      <button>90</button>
      <button>95</button>
      <button>100</button>
      <button>105</button>
      <button>110</button>
    </div>

    <div class="precios">
    <p class="precio">$${precio.toLocaleString()}</p>
    <p class="oferta">$${oferta.toLocaleString()}</p>
    </div>

    <button class="btn-agregar" data-nombre="${nombre}" data-precio="${precio}">
      Agregar al carrito
    </button>
  `;

  galeria.appendChild(producto);

  // Función para ampliar imágenes
const imagenes = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const cerrar = document.querySelector('.cerrar');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Cerrar con la X
cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

});

// Funcionalidad del carrito
const botonesAgregar = document.querySelectorAll('.btn-agregar');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');
const botonVaciar = document.getElementById('vaciar-carrito');
const botonConfirmar = document.getElementById('confirmar-pedido');
const botonAbrir = document.getElementById('abrir-carrito');
const carritoVentana = document.getElementById('carrito');
const cerrarCarrito = document.getElementById('cerrar-carrito');

let carrito = [];

// Actualizar carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      • ${item.nombre} <br> • Talle: ${item.talle} <br> • $${item.precio.toLocaleString('es-AR')}
      <button onclick="eliminarItem(${index})">X</button>
    `;
    listaCarrito.appendChild(li);
    total += item.precio;
  });

  totalElemento.textContent = `$${total.toLocaleString('es-AR')}`;
}

// Agregar producto al carrito
botonesAgregar.forEach(boton => {
  boton.addEventListener('click', e => {
    const nombre = e.target.dataset.nombre;
    const precio = parseFloat(e.target.dataset.precio);
    const codigo = e.target.dataset.codigo || 'Sin código';

    const productoContenedor = e.target.closest('.producto');
    const talleActivo = productoContenedor.querySelector('.talles button.active');
    const talle = talleActivo ? talleActivo.textContent : 'Sin talle';

    carrito.push({ nombre, precio, talle, codigo });
    actualizarCarrito();
  });
});

// Marcar talle activo
document.querySelectorAll('.talles button').forEach(boton => {
  boton.addEventListener('click', () => {
    const grupo = boton.parentElement;
    grupo.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
  });
});

// Eliminar item del carrito
function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Vaciar carrito
botonVaciar.addEventListener('click', () => {
  carrito = [];
  actualizarCarrito();
});

// Mostrar / ocultar carrito
botonAbrir.addEventListener('click', () => {
  carritoVentana.classList.toggle('oculto');
});

cerrarCarrito.addEventListener('click', () => {
  carritoVentana.classList.add('oculto');
});

// Ventana de confirmación
const ventanaConfirmacion = document.getElementById('ventana-confirmacion');
const cerrarConfirmacion = document.getElementById('cerrar-confirmacion');
const resumenPedido = document.getElementById('resumen-pedido');
const enviarPedido = document.getElementById('enviar-pedido');
const cancelarPedido = document.getElementById('cancelar-pedido');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

let formaPago = null;

// Función para mostrar mensajes tipo "alert" pero visuales
function mostrarMensaje(texto, tipo = 'info') {
  const msg = document.createElement('div');
  msg.classList.add('mensaje-confirmacion');

  if (tipo === 'error') msg.style.backgroundColor = '#dc3545'; // rojo
  if (tipo === 'aviso') msg.style.backgroundColor = '#ffc107'; // amarillo
  if (tipo === 'ok') msg.style.backgroundColor = '#28a745';    // verde

  msg.textContent = texto;
  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);
}

// Abrir ventana de confirmación
botonConfirmar.addEventListener('click', () => {
  if (carrito.length === 0) {
    mostrarMensaje('🚫 El carrito está vacío', 'error');
    return;
  }

  carritoVentana.classList.add('oculto');
  ventanaConfirmacion.classList.remove('oculto');

  resumenPedido.innerHTML = carrito.map(item =>
    `<p>• ${item.nombre} <br> • Talle ${item.talle} <br> • $${item.precio.toLocaleString('es-AR')}\n<br></p>`
  ).join('') + `<p><strong>Total: ${totalElemento.textContent}</strong></p>`;
});

// Seleccionar forma de pago
document.querySelectorAll('.pago-btn').forEach(boton => {
  boton.addEventListener('click', () => {
    document.querySelectorAll('.pago-btn').forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
    formaPago = boton.dataset.pago;
  });
});

// Enviar pedido a WhatsApp
enviarPedido.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();

  if (!nombre || !telefono || !formaPago) {
    mostrarMensaje('⚠️ Completá todos los campos y elegí una forma de pago', 'aviso');
    return;
  }

  let mensaje = `🛍️ *Nuevo pedido de ${nombre}*\n📞 ${telefono}\n\n`;
  carrito.forEach(item => {
    mensaje +=`• ${item.nombre} \n • Talle ${item.talle} \n • $${item.precio.toLocaleString('es-AR')}\n\n`;
  });
  mensaje += `\n💳 *Forma de pago:* ${formaPago}\n🚚 *Total:* ${totalElemento.textContent}`;

  const url = `https://wa.me/5491128506149?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');

  carrito = [];
  actualizarCarrito();
  ventanaConfirmacion.classList.add('oculto');

  // Mostrar mensaje de confirmación (div ya existente)
  mensajeConfirmacion.classList.remove('oculto');
  setTimeout(() => {
    mensajeConfirmacion.classList.add('oculto');
  }, 4000);
});

// Cancelar pedido
cancelarPedido.addEventListener('click', () => {
  ventanaConfirmacion.classList.add('oculto');
  carritoVentana.classList.remove('oculto');
});

// Cerrar ventana de confirmación
cerrarConfirmacion.addEventListener('click', () => {
  ventanaConfirmacion.classList.add('oculto');
});


