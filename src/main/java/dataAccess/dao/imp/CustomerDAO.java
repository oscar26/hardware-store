package dataAccess.dao.imp;

import dataAccess.dao.ICustomerDAO;
import dataAccess.entities.Customer;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class CustomerDAO extends GenericDAO<Customer> implements ICustomerDAO {

    public Customer get(long id) {
        Session session = getSession();
        return session.get(Customer.class, id);
    }

    public Customer getByUsername(String username) {
        Session session = getSession();
        return (Customer)session.createQuery("FROM Customer WHERE username = :username")
                .setParameter("username", username).uniqueResult();
    }

    public Customer getByEmail(String email) {
        Session session = getSession();
        return (Customer)session.createQuery("FROM Customer WHERE email = :email")
                .setParameter("email", email).uniqueResult();
    }

    public Customer getByCustomerId(Long customerId) {
        Session session = getSession();
        return (Customer)session.createQuery("FROM Customer WHERE customerId = :customerId")
                .setParameter("customerId", customerId).uniqueResult();
    }

    public List<Customer> getAll() {
        Session session = getSession();
        return session.createQuery("FROM Customer").list();
    }

}
