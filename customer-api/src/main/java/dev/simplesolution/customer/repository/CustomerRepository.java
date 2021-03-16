package dev.simplesolution.customer.repository;

import org.springframework.data.repository.CrudRepository;

import dev.simplesolution.customer.entity.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
