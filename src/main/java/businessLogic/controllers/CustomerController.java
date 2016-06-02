package businessLogic.controllers;

import businessLogic.services.CustomerService;
import businessLogic.controllers.statuses.GenericResponseStatus;
import dataAccess.entities.Customer;
import dataAccess.entities.enumerations.CustomerIdType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by oscar on 10/04/16.
 */

@RestController
@RequestMapping(value = "/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Customer> retrieveAllCustomers() {
        System.out.println("Retrieving ALL customers");
        return customerService.getAllCustomers();
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> createCustomer(@RequestBody Customer customer) {
        System.out.println("Creating customer {" + customer.getUsername() + "}");

        if (customerService.isUsernameInUse(customer.getUsername())) {
            System.out.println(customer.getUsername() + " username already in use.");
            return new ResponseEntity<>(new GenericResponseStatus(1, "ERROR: username already in use"), HttpStatus.OK);
        } else if (customerService.isEmailInUse(customer.getEmail())) {
            System.out.println(customer.getEmail() + " email already in use.");
            return new ResponseEntity<>(new GenericResponseStatus(2, "ERROR: email already in use"), HttpStatus.OK);
        } else if (customerService.isCustomerIdInUse(customer.getCustomerId())) {
            System.out.println(customer.getCustomerId() + " customerId already in use");
            return new ResponseEntity<>(new GenericResponseStatus(3, "ERROR: customerId already in use"), HttpStatus.OK);
        }

        customerService.saveCustomer(customer);
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: user created"), HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    public ResponseEntity<GenericResponseStatus> updateCustomer(@RequestBody Customer customer) {
        System.out.println("Updating customer with id " + customer.getCustomerId());

        if (customerService.getByCustomerId(customer.getCustomerId()) == null) {
            System.out.println("Customer with id {" + customer.getCustomerId() + "} not found.");
            return new ResponseEntity<>(new GenericResponseStatus(1, "customer not found"), HttpStatus.OK);
        }

        customerService.updateCustomer(customer);
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: user updated"), HttpStatus.OK);
    }

    @RequestMapping(value = "/username/{username}", method = RequestMethod.GET)
    public Customer retrieveByUsername(@PathVariable String username) {
        System.out.println("Retrieving customer with username {" + username + "}");
        Customer customer = customerService.getByUsername(username);
        if (customer == null)
            return customerService.getByEmail(username);
        else
            return customer;
    }

    @RequestMapping(value = "/email/{email}", method = RequestMethod.GET)
    public Customer retrieveByEmail(@PathVariable String email) {
        System.out.println("Retrieving customer with email {" + email + "}");
        return customerService.getByEmail(email);
    }

    @RequestMapping(value = "/customerId/{id}", method = RequestMethod.GET)
    public Customer retrieveByCustomerId(@PathVariable long id) {
        System.out.println("Retrieving customer with customerId {" + id + "}");
        return customerService.getByCustomerId(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Customer> deleteCustomer(@PathVariable long id) {
        System.out.println("Deleting customer with id " + id);

        Customer customerToDelete = customerService.getById(id);
        if (customerToDelete == null) {
            System.out.println("Customer with id {" + id + "} not found.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        customerService.deleteCustomer(customerToDelete);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

}
