DROP TABLE IF EXISTS `Opened`, `Menu`, `Venta` ; 

CREATE TABLE `Menu` (
  `id` bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `compound` varchar(255) NOT NULL,
  `fileLike` varchar(100) NOT NULL,
  `price` int NOT NULL
);

CREATE TABLE `Opened` (
  `day` varchar(50) PRIMARY KEY NOT NULL,
  `start` varchar(10) NOT NULL,
  `end` varchar(10) NOT NULL
);

CREATE TABLE `Venta` (
  `codPlato` bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fechaVenta` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `Menu` (`name`, `description`, `compound`,`fileLike` ,`price`) VALUES 
  ( 
    'Sillpancho', 
    'El silpancho es una comida popular boliviana de la ciudad de Cochabamba. Cuando se prepara correctamente, tiende a ser una comida abundante y satisfactoria con una diversidad de carbohidratos y grasas.', '1 porción arroz (graneado): 1 porción papa (Frita): 1 huevo: 1 carne (apanada): 1 porción Ensalada (Cebolla, Locoto, Tomate, Zanahoria)',
    '/static/products/silpancho.jpg',
    '35'
  ), 
  (
    'Pollo Broaster', 
    'description', 
    '1 porción arroz (graneado): 1 porción de fideo: 1 porción papa (Frita): 1 presa de pollo (Broaster)',
    '/static/products/polloBroaster.jpg',
    '20'
  ), 
  (
    'Pollo Espiedo', 
    'description', 
    '1 porción arroz (graneado): 1 porción de fideo: 1 porción papa (Frita): 1 presa de pollo (Espiedo)', 
    '/static/products/polloSpiedo.jpg',
    '20'
  ), 
  (
    'Chuleta', 
    'description', 
    '1 porción arroz (graneado): 1 porción papa (Frita): 1 carne (Chuleta) Milanesa', 
    '/static/products/chuleta.jpg',
    '25'
  ), 
  (
    'Milanesa', 
    'description', 
    '1 porción arroz (graneado): 1 porción papa (frita): 1 carne (Milanesa): 1 porción Ensalada (Tomate)',
    '/static/products/milanesa.jpg',
    '15'
  );

INSERT INTO `Opened` (`day`, `start`, `end`) VALUES 
  ('Lunes', '10:10', '21:00'),
  ('Miercoles', '10:10', '21:00'),
  ('Viernes', '10:10', '21:00'),
  ('Domingo', '9:10', '22:00');
