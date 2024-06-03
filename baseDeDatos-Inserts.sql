CREATE SCHEMA `blogautores` ;

USE `blogautores`	;

-- Creación de la tabla de autores
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    imagen VARCHAR(255)
);

-- Creación de la tabla de posts
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_creacion DATE NOT NULL,
    categoria VARCHAR(100),
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);

-- Inserción de datos en la tabla de autores
INSERT INTO autores (nombre, email, imagen) VALUES 
('Juan Pérez', 'juan.perez@example.com', 'juan.jpg'),
('María López', 'maria.lopez@example.com', 'maria.jpg'),
('Carlos García', 'carlos.garcia@example.com', 'carlos.jpg');

-- Inserción de datos en la tabla de posts
INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES
('Primer Post', 'Descripción del primer post', '2024-06-01', 'Tecnología', 1),
('Segundo Post', 'Descripción del segundo post', '2024-06-02', 'Ciencia', 2),
('Tercer Post', 'Descripción del tercer post', '2024-06-03', 'Arte', 3),
('Cuarto Post', 'Descripción del cuarto post', '2024-06-04', 'Tecnología', 1),
('Quinto Post', 'Descripción del quinto post', '2024-06-05', 'Ciencia', 2);
