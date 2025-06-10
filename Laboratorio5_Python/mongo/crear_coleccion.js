use laboratorio5;

db.createCollection("Estudiantes");

db.Estudiantes.insertMany([
    { nombre: "Juan", edad: 20, ciudad: "Bogotá" },
    { nombre: "Ana", edad: 22, ciudad: "Medellín" },
    { nombre: "Luis", edad: 19, ciudad: "Cali" },
    { nombre: "Pedro", edad: 25, ciudad: "Barranquilla" },
    { nombre: "Maria", edad: 18, ciudad: "Cartagena" }
]);
