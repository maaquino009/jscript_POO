// 1. Definición de la clase Libro
class Libro {
  constructor(titulo, editorial, autor, descripcion, edicion, precio) {
    // 2. Propiedades del libro
    this.titulo = titulo;
    this.editorial = editorial;
    this.autor = autor;
    this.descripcion = descripcion;
    this.edicion = edicion;
    this.precio = precio;
  }

  // 3. Método para devolver el contenido HTML del libro
  mostrarInformacion() {
    return `
      <div class="libro">
        <h2>${this.titulo}</h2>
        <p><strong>Editorial:</strong> ${this.editorial}</p>
        <p><strong>Autor:</strong> ${this.autor}</p>
        <p><strong>Descripción:</strong> ${this.descripcion}</p>
        <p><strong>Edición:</strong> ${this.edicion}</p>
        <p><strong>Precio:</strong> Q${this.precio.toFixed(2)}</p>
      </div>
    `;
  }
}

// 4. Crear una lista (arreglo) de objetos Libro
const libros = [
  new Libro("El Principito", "Emecé Editores", "Antoine de Saint-Exupéry", "Una historia poética y filosófica sobre un niño de otro planeta.", "3ra", 85.50),
  new Libro("Cien Años de Soledad", "Editorial Sudamericana", "Gabriel García Márquez", "La historia épica de la familia Buendía en Macondo.", "1ra", 120.00),
  new Libro("1984", "Secker & Warburg", "George Orwell", "Una novela distópica sobre un régimen totalitario.", "2da", 95.00),
  new Libro("Don Quijote de la Mancha", "Francisco de Robles", "Miguel de Cervantes", "Las aventuras de un caballero loco y su escudero.", "Edición Clásica", 150.25),
  new Libro("El Alquimista", "HarperCollins", "Paulo Coelho", "Un viaje de autodescubrimiento lleno de enseñanzas.", "5ta", 89.90)
];

// 5. Seleccionar el contenedor donde se mostrarán los libros
const contenedor = document.getElementById("contenedor-libros");

// 6. Recorrer cada libro y agregar su HTML al contenedor
libros.forEach(libro => {
  contenedor.innerHTML += libro.mostrarInformacion();
});
