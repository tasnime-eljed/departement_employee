package com.example.departement_employee.restcontrollers;

import com.example.departement_employee.entities.Departement;
import com.example.departement_employee.repos.DepartementRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dep")
@CrossOrigin
@AllArgsConstructor
public class DepartementRESTController {

    private final DepartementRepository departementRepository;

    @GetMapping
    public List<Departement> getAllDepartements() {
        return departementRepository.findAll();
    }

    @GetMapping("/{id}")
    public Departement getDepartementById(@PathVariable("id") Long id) {
        return departementRepository.findById(id).get();
    }
}