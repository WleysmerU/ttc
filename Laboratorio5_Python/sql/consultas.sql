USE laboratorio5;

-- Consultar todos los registros
SELECT * FROM Estudiantes;

-- Filtrar estudiantes por ciudad
SELECT * FROM Estudiantes WHERE ciudad = 'Medellín';

-- Consultar estudiantes mayores de 20 años
SELECT * FROM Estudiantes WHERE edad > 20;

-- Contar el número de estudiantes por ciudad
SELECT ciudad, COUNT(*) AS total_estudiantes FROM Estudiantes GROUP BY ciudad;

-- Consultar el estudiante más joven
SELECT * FROM Estudiantes ORDER BY edad ASC LIMIT 1;

-- Consultar el estudiante más viejo
SELECT * FROM Estudiantes ORDER BY edad DESC LIMIT 1;

