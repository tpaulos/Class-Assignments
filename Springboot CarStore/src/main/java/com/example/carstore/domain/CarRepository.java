package com.example.carstore.domain;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CarRepository extends CrudRepository<Car, Long> {

    List<Car> findByMake(String make);
}
