DROP TABLE IF EXISTS `Opened`, `Menu`, `Venta` ; 

CREATE TABLE `Menu` (
  `id` bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
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
  `name` varchar(50) NOT NULL,
  `fechaVenta` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `Menu` (`name`, `description`, `compound`,`fileLike` ,`price`) VALUES 
  ( 'Silpancho', 'El silpancho es una comida popular boliviana de la ciudad de Cochabamba. Cuando se prepara correctamente, tiende a ser una comida abundante y satisfactoria con una diversidad de carbohidratos y grasas.', '1 porción arroz (graneado): 1 porción papa (Frita): 1 huevo: 1 carne (apanada): 1 porción Ensalada (Cebolla, Locoto, Tomate, Zanahoria)', '/static/products/silpancho.jpg', '35'), 
  ( 'Pollo Broaster', 'El empanado añade una corteza exterior crujiente que evita la pérdida de los jugos pero también absorbe la grasa usada al freír. Lo que distingue al pollo frito de otras frituras de pollo es que habitualmente se corta por las articulaciones, dejando los huesos y la piel intactos. La piel crujiente bien condimentada, sin exceso de grasa, es el rasgo distintivo de un pollo bien frito.', '1 porción arroz (graneado): 1 porción de fideo: 1 porción papa (Frita): 1 presa de pollo (Broaster)', '/static/products/polloBroaster.jpg', '20'), 
  ( 'Pollo Espiedo', 'El término espiedo, spiedo o espeto se utiliza alternativamente tanto para describir una variedad de pincho o espetón como para referirse a la técnica culinaria en la que este utensilio se utiliza para asar alimentos, generalmente haciéndolos girar frente, debajo o sobre la fuente de calor.', '1 porción arroz (graneado): 1 porción de fideo: 1 porción papa (Frita): 1 presa de pollo (Espiedo)', '/static/products/polloSpiedo.jpg', '20'), 
  ( 'Chuleta', 'Una chuleta es un corte de la carne situada justo encima de la costilla de un animal, ya sea vacuno, cerdo, cordero o carnero. En general cada chuleta se corta con la sección de costilla que la acompaña (como en el chuletón de buey), e incluso a veces, además de con la costilla, una parte de la vértebra correspondiente', '1 porción arroz (graneado): 1 porción papa (Frita): 1 carne (Chuleta) Milanesa', '/static/products/chuleta.jpg', '25'), 
  ( 'Milanesa', 'Corte delgado de milanesa. Cocción recomendada parrilla, horno o sartén. Granjas con sello de calidad Pork Colombia. Cerdos alimentados naturalmente, con una dieta 100% vegetariana, sin hormonas.', '1 porción arroz (graneado): 1 porción papa (frita): 1 carne (Milanesa): 1 porción Ensalada (Tomate)', '/static/products/milanesa.jpg', '15');

INSERT INTO `Opened` (`day`, `start`, `end`) VALUES 
  ('Lunes', '10:10', '21:00'),
  ('Miercoles', '10:10', '21:00'),
  ('Viernes', '10:10', '21:00'),
  ('Domingo', '9:10', '22:00');

INSERT INTO `Venta` (`name`, `fechaVenta`) VALUES 
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Chuleta', '2021-12-28 21:03:00'),
  ('Silpancho', '2021-12-28 21:03:00'),
  ('Silpancho', '2021-12-28 21:03:00'),
  ('Silpancho', '2021-12-28 21:03:00'),
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Pollo Broaster', '2021-12-27 21:03:00'),
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Silpancho', '2021-12-27 21:03:00'),
  ('Milanesa', '2021-12-27 21:03:00'),
  ('Milanesa', '2021-12-27 21:03:00'),
  ('Milanesa', '2021-12-27 21:03:00'),
  ('Milanesa', '2021-12-27 21:03:00'),
  ('Milanesa', '2021-12-21 21:03:00'),
  ('Milanesa', '2021-12-21 21:03:00'),
  ('Milanesa', '2021-12-21 21:03:00'),
  ('Silpancho', '2021-12-21 21:03:00'),
  ('Silpancho', '2021-12-21 21:03:00'),
  ('Silpancho', '2021-12-21 21:03:00'),
  ('Silpancho', '2021-12-21 21:03:00'),
  ('Pique', '2021-12-27 21:03:00'),
  ('Pique', '2021-12-27 21:03:00'),
  ('Pique', '2021-12-27 21:03:00'),
  ('Pique', '2021-12-27 21:03:00'),
  ('Pollo Espiedo', '2021-12-27 21:03:00'),
  ('Pollo Espiedo', '2021-12-27 21:03:00'),
  ('Pollo Espiedo', '2021-12-27 21:03:00');
