class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    // metodos
    getFullName () {
        console.log(`Benas ${this.nombre} ${this.apellido}`)
    }

    addMascota (nuevaMascota) {
        this.mascotas.push(nuevaMascota)
    }

    countMascotas() {
        console.log(this.mascotas.length)
    }

    getMascotas() {
        console.log(this.mascotas)
    }
    addBook(nuevoLibro) {
        this.libros.push(nuevoLibro)
    }

    getBookNames() {
        this.libros.map((libro) => console.log(libro.nombre));
    }
}

// nuevo user

const user1 = new Usuario('Dante', 'Rossi', [{nombre: 'El Hobbit', autor: 'J.R.R. Tolkien'}], ['Lola', 'Piscis']);

// agregar datos al usuario

user1.addMascota(nuevaMascota = 'porota');

user1.addBook(nuevoLibro = {nombre: 'El Eternauta', autor: 'Héctor G. Oesterheld'});

// impresion de datos de usuario

user1.getFullName();

user1.countMascotas();

user1.getMascotas()

user1.getBookNames();