document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        navItems.forEach(function(item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  
    var precioTotal = 0;
    var productosAgregados = [];
  
    function agregarAlCarrito(precio, producto) {
      precioTotal += precio;
      productosAgregados.push(producto);
      actualizarPrecioTotal();
    }
  
    function actualizarPrecioTotal() {
      var precioTotalElemento = document.getElementById('precio-total');
      precioTotalElemento.textContent = '$' + precioTotal.toFixed(2);
  
      var productosCarritoElemento = document.getElementById('productos-carrito');
      productosCarritoElemento.innerHTML = '';
  
      productosAgregados.forEach(function(producto) {
        var li = document.createElement('li');
        li.textContent = producto;
        productosCarritoElemento.appendChild(li);
      });
    }
  
    var botonesAgregar = document.querySelectorAll('.producto button');
    botonesAgregar.forEach(function(botonAgregar) {
      botonAgregar.addEventListener('click', function() {
        var precioProducto = parseFloat(this.parentNode.querySelector('p:last-of-type').textContent.replace('Precio: $', ''));
        var producto = this.parentNode.querySelector('h3').textContent;
        agregarAlCarrito(precioProducto, producto);
        this.textContent = 'Agregado';
        this.disabled = true;
      });
    });
  
    var imagenesProductos = document.querySelectorAll('.producto img');
    imagenesProductos.forEach(function(imagenProducto) {
      imagenProducto.addEventListener('click', function() {
        var productoSeleccionado = this.parentNode;
        var imagenesProducto = productoSeleccionado.querySelectorAll('img');
        imagenesProducto.forEach(function(imagen) {
          if (imagen !== imagenProducto) {
            imagen.style.display = 'none';
          } else {
            imagen.style.display = 'block';
          }
        });
      });
    });
  
    var botonDescuento = document.getElementById('aplicar-descuento');
    botonDescuento.addEventListener('click', function() {
      var codigoDescuento = document.getElementById('codigo-descuento').value;
      if (codigoDescuento === 'FREEZAHINOS') {
        var descuento = precioTotal * 0.35;
        precioTotal -= descuento;
        actualizarPrecioTotal();
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto) {
        const productoImagenes = producto.querySelectorAll(".producto-imagenes img");
        const prevArrow = producto.querySelector(".prev-arrow");
        const nextArrow = producto.querySelector(".next-arrow");
        let imageIndex = 0;

        // Función para mostrar la imagen actual y ocultar las demás
        function mostrarImagen(index) {
            productoImagenes.forEach(function(imagen) {
                imagen.style.display = "none";
            });
            productoImagenes[index].style.display = "block";
        }

        // Función para cambiar a la imagen anterior
        function imagenAnterior() {
            imageIndex--;
            if (imageIndex < 0) {
                imageIndex = productoImagenes.length - 1;
            }
            mostrarImagen(imageIndex);
        }

        // Función para cambiar a la siguiente imagen
        function imagenSiguiente() {
            imageIndex++;
            if (imageIndex >= productoImagenes.length) {
                imageIndex = 0;
            }
            mostrarImagen(imageIndex);
        }

        // Mostrar la primera imagen al cargar la página
        mostrarImagen(imageIndex);

        // Event listeners para las flechas
        prevArrow.addEventListener("click", imagenAnterior);
        nextArrow.addEventListener("click", imagenSiguiente);
    });
});

