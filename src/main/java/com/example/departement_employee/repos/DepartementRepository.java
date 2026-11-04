package com.example.departement_employee.repos;

import com.example.departement_employee.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "dep")
@CrossOrigin("http://localhost:4200/")
public interface DepartementRepository extends JpaRepository<Departement, Long> {
}