package dataAccess.dao;

import dataAccess.entities.Customer;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public interface ICustomerDAO extends IGenericDAO<Customer> {

    Customer get(long id);
    Customer getByUsername(String username);
    Customer getByEmail(String email);
    Customer getByCustomerId(Long customerId);
    List<Customer> getAll();

}
