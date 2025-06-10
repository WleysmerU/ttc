// Consultar todos los documentos
db.Estudiantes.find();

// Filtrar estudiantes por ciudad
db.Estudiantes.find({ ciudad: "Medellín" });

// Consultar estudiantes mayores de 20 años
db.Estudiantes.find({ edad: { $gt: 20 } });
