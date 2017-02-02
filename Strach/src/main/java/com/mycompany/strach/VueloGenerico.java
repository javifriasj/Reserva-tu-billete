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
@Table(name = "vueloGenerico")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "VueloGenerico.findAll", query = "SELECT v FROM VueloGenerico v"),
    @NamedQuery(name = "VueloGenerico.findByNVuelo", query = "SELECT v FROM VueloGenerico v WHERE v.nVuelo = :nVuelo"),
    @NamedQuery(name = "VueloGenerico.findByHoraSalida", query = "SELECT v FROM VueloGenerico v WHERE v.horaSalida = :horaSalida"),
    @NamedQuery(name = "VueloGenerico.findByHoraLlegada", query = "SELECT v FROM VueloGenerico v WHERE v.horaLlegada = :horaLlegada"),
    @NamedQuery(name = "VueloGenerico.findByPrecio", query = "SELECT v FROM VueloGenerico v WHERE v.precio = :precio"),
    @NamedQuery(name = "VueloGenerico.findByCapacidad", query = "SELECT v FROM VueloGenerico v WHERE v.capacidad = :capacidad"),
    @NamedQuery(name = "VueloGenerico.findByCodOrigen", query = "SELECT v FROM VueloGenerico v WHERE v.codOrigen = :codOrigen"),
    @NamedQuery(name = "VueloGenerico.findByCodDestino", query = "SELECT v FROM VueloGenerico v WHERE v.codDestino = :codDestino"),
    @NamedQuery(name = "VueloGenerico.findByCodAerolinea", query = "SELECT v FROM VueloGenerico v WHERE v.codAerolinea = :codAerolinea")})
public class VueloGenerico implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "nVuelo")
    private Integer nVuelo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "horaSalida")
    private String horaSalida;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "horaLlegada")
    private String horaLlegada;
    @Basic(optional = false)
    @NotNull
    @Column(name = "precio")
    private float precio;
    @Basic(optional = false)
    @NotNull
    @Column(name = "capacidad")
    private int capacidad;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 5)
    @Column(name = "codOrigen")
    private String codOrigen;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 5)
    @Column(name = "codDestino")
    private String codDestino;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "codAerolinea")
    private String codAerolinea;

    public VueloGenerico() {
    }

    public VueloGenerico(Integer nVuelo) {
        this.nVuelo = nVuelo;
    }

    public VueloGenerico(Integer nVuelo, String horaSalida, String horaLlegada, float precio, int capacidad, String codOrigen, String codDestino, String codAerolinea) {
        this.nVuelo = nVuelo;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.precio = precio;
        this.capacidad = capacidad;
        this.codOrigen = codOrigen;
        this.codDestino = codDestino;
        this.codAerolinea = codAerolinea;
    }

    public Integer getNVuelo() {
        return nVuelo;
    }

    public void setNVuelo(Integer nVuelo) {
        this.nVuelo = nVuelo;
    }

    public String getHoraSalida() {
        return horaSalida;
    }

    public void setHoraSalida(String horaSalida) {
        this.horaSalida = horaSalida;
    }

    public String getHoraLlegada() {
        return horaLlegada;
    }

    public void setHoraLlegada(String horaLlegada) {
        this.horaLlegada = horaLlegada;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public String getCodOrigen() {
        return codOrigen;
    }

    public void setCodOrigen(String codOrigen) {
        this.codOrigen = codOrigen;
    }

    public String getCodDestino() {
        return codDestino;
    }

    public void setCodDestino(String codDestino) {
        this.codDestino = codDestino;
    }

    public String getCodAerolinea() {
        return codAerolinea;
    }

    public void setCodAerolinea(String codAerolinea) {
        this.codAerolinea = codAerolinea;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nVuelo != null ? nVuelo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof VueloGenerico)) {
            return false;
        }
        VueloGenerico other = (VueloGenerico) object;
        if ((this.nVuelo == null && other.nVuelo != null) || (this.nVuelo != null && !this.nVuelo.equals(other.nVuelo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.strach.VueloGenerico[ nVuelo=" + nVuelo + " ]";
    }
    
}
