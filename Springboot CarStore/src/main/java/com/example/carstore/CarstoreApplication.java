package com.example.carstore;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import com.example.carstore.domain.Car;
import com.example.carstore.domain.CarRepository;


@SpringBootApplication
public class CarstoreApplication {

    private static final Logger log = LoggerFactory.getLogger(CarstoreApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(CarstoreApplication.class, args);
    }

    @Bean
    public CommandLineRunner carstore(CarRepository repository) {
        return args -> {

            repository.save(new Car("Toyota", "4Runner", 2018));
            repository.save(new Car("Nissan", "Altima", 2015));
            repository.save(new Car("Toyota", "Camry", 2010));
            repository.save(new Car("Mercedes", "Benz", 2000));


            // read all Gusts
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (Car car : repository.findAll()) {
                log.info(car.toString());
            }
            log.info("");

            repository.findById(1L)
                    .ifPresent(car -> {
                        log.info("Customer found with findById(1L):");
                        log.info("-------------------------------");
                        log.info(car.toString());
                        log.info("");
                    });

        };
    }



}