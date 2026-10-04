package com.example.departement_employee.repos;

import com.example.departement_employee.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.departement_employee.entities.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;

@RepositoryRestResource(path = "rest")

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByNomComplet(String nom);

    List<Employee> findByNomCompletContains(String nom);

    @Query("select e from Employee e where e.nomComplet like %?1% and e.salaire > ?2")
    List<Employee> findByNomSalaire(String nom, Double salaire);


    @Query("SELECT e FROM Employee e WHERE e.nomComplet LIKE %:nom% AND e.salaire > :salaire")
    List<Employee> findByNomSalaire2(
            @Param("nom") String nom,
            @Param("salaire") Double salaire
    );

    @Query("select e from Employee e where e.departement = ?1")
    List<Employee> findByDepartement(Departement departement);

    List<Employee> findByDepartementIdDepartement(Long id);

    List<Employee> findByOrderByNomCompletAsc();

    @Query("select e from Employee e order by e.nomComplet ASC, e.salaire DESC")
    List<Employee> trierEmployeesNomsSalaires();

}
