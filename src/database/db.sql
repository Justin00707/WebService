USE b00zxs2ee3avwueqlute;

CREATE TABLE Auteurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  biographie TEXT
);

ALTER TABLE Livres
ADD COLUMN createdAt DATETIME,
ADD COLUMN updatedAt DATETIME;

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

-- Inserting three books
-- Replace the auteurId with valid author IDs from your Auteurs table
INSERT INTO Livres (titre, auteurId, annee, genre, createdAt, updatedAt) VALUES
('Le Premier Livre', 1, 2021, 'Fiction', NOW(), NOW()),
('Le Deuxième Livre', 2, 2020, 'Science-fiction', NOW(), NOW()),
('Le Troisième Livre', 3, 2019, 'Biographie', NOW(), NOW());
