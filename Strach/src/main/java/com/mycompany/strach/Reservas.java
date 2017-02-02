/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.strach;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author javier
 */
@Entity
@Table(name = "reservas")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Reservas.findAll", query = "SELECT r FROM Reservas r"),
    @NamedQuery(name = "Reservas.findByNReserva", query = "SELECT r FROM Reservas r WHERE r.nReserva = :nReserva"),
    @NamedQuery(name = "Reservas.findByNombre", query = "SELECT r FROM Reservas r WHERE r.nombre = :nombre"),
    @NamedQuery(name = "Reservas.findByApellidos", query = "SELECT r FROM Reservas r WHERE r.apellidos = :apellidos"),
    @NamedQuery(name = "Reservas.findByTelefono", query = "SELECT r FROM Reservas r WHERE r.telefono = :telefono"),
    @NamedQuery(name = "Reservas.findByTarjeta", query = "SELECT r FROM Reservas r WHERE r.tarjeta = :tarjeta"),
    @NamedQuery(name = "Reservas.findByNVuelo", query = "SELECT r FROM Reservas r WHERE r.nVuelo = :nVuelo"),
    @NamedQuery(name = "Reservas.findByImporte", query = "SELECT r FROM Reservas r WHERE r.importe = :importe")})
public class Reservas implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "nReserva")
    private Integer nReserva;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "nombre")
    private String nombre;
    @Size(max = 255)
    @Column(name = "apellidos")
    private String apellidos;
    @Size(max = 25)
    @Column(name = "telefono")
    private String telefono;
    @Size(max = 255)
    @Column(name = "tarjeta")
    private String tarjeta;
    @Basic(optional = false)
    @NotNull
    @Column(name = "nVuelo")
    private int nVuelo;
    @Basic(optional = false)
    @NotNull
    @Column(name = "importe")
    private float importe;

    public Reservas() {
    }

    public Reservas(Integer nReserva) {
        this.nReserva = nReserva;
    }

    public Reservas(Integer nReserva, String nombre, int nVuelo, float importe) {
        this.nReserva = nReserva;
        this.nombre = nombre;
        this.nVuelo = nVuelo;
        this.importe = importe;
    }

    public Integer getNReserva() {
        return nReserva;
    }

    public void setNReserva(Integer nReserva) {
        this.nReserva = nReserva;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTarjeta() {
        return tarjeta;
    }

    public void setTarjeta(String tarjeta) {
        this.tarjeta = tarjeta;
    }

    public int getNVuelo() {
        return nVuelo;
    }

    public void setNVuelo(int nVuelo) {
        this.nVuelo = nVuelo;
    }

    public float getImporte() {
        return importe;
    }

    public void setImporte(float importe) {
        this.importe = importe;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nReserva != null ? nReserva.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Reservas)) {
            return false;
        }
        Reservas other = (Reservas) object;
        if ((this.nReserva == null && other.nReserva != null) || (this.nReserva != null && !this.nReserva.equals(other.nReserva))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.strach.Reservas[ nReserva=" + nReserva + " ]";
    }
    
}
