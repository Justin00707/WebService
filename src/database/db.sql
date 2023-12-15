-- Create a new database named 'wow'
CREATE DATABASE wow;

-- Select the 'wow' database to use
USE wow;

-- Create a table named 'Auteurs' for storing authors information
CREATE TABLE Auteurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  biographie TEXT
);

-- Create a table named 'Livres' for storing books information
CREATE TABLE Livres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  auteurId INT,
  annee YEAR,
  genre VARCHAR(100),
  FOREIGN KEY (auteurId) REFERENCES Auteurs(id)
);

-- Create a table named 'Utilisateurs' for storing users information
CREATE TABLE Utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  motDePasse VARCHAR(255) NOT NULL,
  role ENUM('admin', 'utilisateur') NOT NULL
);
