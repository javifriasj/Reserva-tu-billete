-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema vuelos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vuelos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vuelos` DEFAULT CHARACTER SET latin1 ;
USE `vuelos` ;

-- -----------------------------------------------------
-- Table `vuelos`.`aerolinea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vuelos`.`aerolinea` (
  `codigo` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vuelos`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vuelos`.`ciudad` (
  `codCiudad` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `pais` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`codCiudad`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vuelos`.`aeropuerto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vuelos`.`aeropuerto` (
  `codigo` VARCHAR(5) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `categoria` INT(11) NOT NULL,
  `codCiudad` INT(11) NOT NULL,
  `ciudad_codCiudad` INT(11) NOT NULL,
  PRIMARY KEY (`codigo`, `ciudad_codCiudad`),
  INDEX `fk_aeropuerto_ciudad1_idx` (`ciudad_codCiudad` ASC),
  CONSTRAINT `fk_aeropuerto_ciudad1`
    FOREIGN KEY (`ciudad_codCiudad`)
    REFERENCES `vuelos`.`ciudad` (`codCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vuelos`.`vueloGenerico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vuelos`.`vueloGenerico` (
  `nVuelo` INT(11) NOT NULL AUTO_INCREMENT,
  `horaSalida` VARCHAR(255) NOT NULL,
  `horaLlegada` VARCHAR(255) NOT NULL,
  `precio` FLOAT(11,2) NOT NULL,
  `capacidad` INT(11) NOT NULL,
  `codOrigen` VARCHAR(5) NOT NULL,
  `codDestino` VARCHAR(5) NOT NULL,
  `codAerolinea` VARCHAR(50) NOT NULL,
  `aeropuerto_codigo` VARCHAR(5) NOT NULL,
  `aeropuerto_codigo1` VARCHAR(5) NOT NULL,
  `aerolinea_codigo` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`nVuelo`, `aeropuerto_codigo`, `aeropuerto_codigo1`, `aerolinea_codigo`),
  INDEX `fk_vueloGenerico_aeropuerto1_idx` (`aeropuerto_codigo` ASC),
  INDEX `fk_vueloGenerico_aeropuerto2_idx` (`aeropuerto_codigo1` ASC),
  INDEX `fk_vueloGenerico_aerolinea1_idx` (`aerolinea_codigo` ASC),
  CONSTRAINT `fk_vueloGenerico_aeropuerto1`
    FOREIGN KEY (`aeropuerto_codigo`)
    REFERENCES `vuelos`.`aeropuerto` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vueloGenerico_aeropuerto2`
    FOREIGN KEY (`aeropuerto_codigo1`)
    REFERENCES `vuelos`.`aeropuerto` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vueloGenerico_aerolinea1`
    FOREIGN KEY (`aerolinea_codigo`)
    REFERENCES `vuelos`.`aerolinea` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vuelos`.`vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vuelos`.`vuelo` (
  `idVuelo` INT(11) NOT NULL AUTO_INCREMENT,
  `nVuelo` INT(11) NOT NULL,
  `fecha` VARCHAR(255) NOT NULL,
  `plazasLibres` INT(11) NOT NULL,
  `vueloGenerico_nVuelo` INT(11) NOT NULL,
  PRIMARY KEY (`idVuelo`, `vueloGenerico_nVuelo`),
  INDEX `fk_vuelo_vueloGenerico1_idx` (`vueloGenerico_nVuelo` ASC),
  CONSTRAINT `fk_vuelo_vueloGenerico1`
    FOREIGN KEY (`vueloGenerico_nVuelo`)
    REFERENCES `vuelos`.`vueloGenerico` (`nVuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vuelos`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vuelos`.`reservas` (
  `nReserva` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `apellidos` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` VARCHAR(25) NULL DEFAULT NULL,
  `tarjeta` VARCHAR(255) NULL DEFAULT NULL,
  `nVuelo` INT(11) NOT NULL,
  `importe` FLOAT(11,2) NOT NULL,
  `vuelo_idVuelo` INT(11) NOT NULL,
  PRIMARY KEY (`nReserva`, `vuelo_idVuelo`),
  INDEX `fk_reservas_vuelo_idx` (`vuelo_idVuelo` ASC),
  CONSTRAINT `fk_reservas_vuelo`
    FOREIGN KEY (`vuelo_idVuelo`)
    REFERENCES `vuelos`.`vuelo` (`idVuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
