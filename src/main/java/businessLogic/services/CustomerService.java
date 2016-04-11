package businessLogic.services;

import dataAccess.dao.ICustomerDAO;
import dataAccess.entities.Customer;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by oscar on 10/04/16.
 */

@Transactional
public class CustomerService {

    private ICustomerDAO customerDAO;

    public boolean isUsernameInUse(String username) {
        return customerDAO.getByUsername(username) != null;
    }

    public boolean isEmailInUse(String email) {
        return customerDAO.getByEmail(email) != null;
    }

    public boolean isCustomerIdInUse(long customerId) {
        return customerDAO.getByCustomerId(customerId) != null;
    }

    public Customer getById(long id) {
        return customerDAO.get(id);
    }

    public Customer getByUsername(String username) {
        return customerDAO.getByUsername(username);
    }

    public Customer getByEmail(String email) {
        return customerDAO.getByEmail(email);
    }

    public Customer getByCustomerId(long customerId) {
        return customerDAO.getByCustomerId(customerId);
    }

    public List<Customer> getAllCustomers() {
        return customerDAO.getAll();
    }

    public boolean saveCustomer(Customer customer) {
        return customerDAO.save(customer);
    }

    public boolean updateCustomer(Customer customer) {
        return customerDAO.update(customer);
    }

    public boolean deleteCustomer(Customer customer) {
        return customerDAO.delete(customer);
    }

    public ICustomerDAO getCustomerDAO() {
        return customerDAO;
    }

    public void setCustomerDAO(ICustomerDAO customerDAO) {
        this.customerDAO = customerDAO;
    }

}
