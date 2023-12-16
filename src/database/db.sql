USE b00zxs2ee3avwueqlute;

CREATE TABLE Auteurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  biographie TEXT
);


CREATE TABLE Livres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  auteurId INT,
  annee YEAR,
  genre VARCHAR(100),
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (auteurId) REFERENCES Auteurs(id)
);

CREATE TABLE Utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  motDePasse VARCHAR(255) NOT NULL,
  role ENUM('admin', 'utilisateur') NOT NULL
);


