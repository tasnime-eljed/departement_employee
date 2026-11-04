package com.example.departement_employee.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Departement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDepartement;

    private String nomDepartement;

    private String descriptionDepartement;

    @JsonIgnore
    @OneToMany(mappedBy = "departement")
    @ToString.Exclude
    private List<Employee> employees;




    /*
    public Departement() {
    }

    public Departement(String nomDepartement, String descriptionDepartement, List<Employee> employees) {
        super();
        this.nomDepartement = nomDepartement;
        this.descriptionDepartement = descriptionDepartement;
        this.employees = employees;
    }

    public Long getIdDepartement() {
        return idDepartement;
    }

    public void setIdDepartement(Long idDepartement) {
        this.idDepartement = idDepartement;
    }

    public String getNomDepartement() {
        return nomDepartement;
    }

    public void setNomDepartement(String nomDepartement) {
        this.nomDepartement = nomDepartement;
    }

    public String getDescriptionDepartement() {
        return descriptionDepartement;
    }

    public void setDescriptionDepartement(String descriptionDepartement) {
        this.descriptionDepartement = descriptionDepartement;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }*/


}