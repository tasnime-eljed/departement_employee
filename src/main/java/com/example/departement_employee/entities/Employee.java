package com.example.departement_employee.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmployee;

    private String nomComplet;

    private Double salaire;

    private Date dateEmbauche;

     @ManyToOne
     private Departement departement;

     /*
    public Employee() {
        super();
    }
    public Employee(String nomComplet, Double salaire, Date dateEmbauche) {
        super();
        this.nomComplet = nomComplet;
        this.salaire = salaire;
        this.dateEmbauche = dateEmbauche;
    }

    public Long getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(Long idEmployee) {
        this.idEmployee = idEmployee;
    }

    public String getNomComplet() {
        return nomComplet;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public Double getSalaire() {
        return salaire;
    }

    public void setSalaire(Double salaire) {
        this.salaire = salaire;
    }

    public Date getDateEmbauche() {
        return dateEmbauche;
    }

    public void setDateEmbauche(Date dateEmbauche) {
        this.dateEmbauche = dateEmbauche;
    }

    public Departement getDepartement() {
        return departement;
    }

    public void setDepartement(Departement departement) {
       this.departement = departement;
    }

    @Override
    public String toString() {
        return "Employee [idEmployee=" + idEmployee
                + ", nomComplet=" + nomComplet
                + ", salaire=" + salaire
                + ", dateEmbauche=" + dateEmbauche
                + "]";
    }*/

}