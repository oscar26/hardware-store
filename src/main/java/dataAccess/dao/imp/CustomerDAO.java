package dataAccess.dao.imp;

import dataAccess.dao.ICustomerDAO;
import dataAccess.entities.Customer;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class CustomerDAO extends GenericDAO<Customer> implements ICustomerDAO {

    public Customer get(long id) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Customer customer = session.get(Customer.class, id);
        transaction.commit();
        return customer;
    }

    public Customer getByUsername(String username) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Customer customer = (Customer)session.createQuery("FROM Customer WHERE username = :username")
                .setParameter("username", username).uniqueResult();
        transaction.commit();
        return customer;
    }

    public Customer getByEmail(String email) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Customer customer = (Customer)session.createQuery("FROM Customer WHERE email = :email")
                .setParameter("email", email).uniqueResult();
        transaction.commit();
        return customer;
    }

    public Customer getByCustomerId(Long customerId) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Customer customer = (Customer)session.createQuery("FROM Customer WHERE customerId = :customerId")
                .setParameter("customerId", customerId).uniqueResult();
        transaction.commit();
        return customer;
    }

    public List<Customer> getAll() {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        List<Customer> customers = session.createQuery("FROM Customer").list();
        transaction.commit();
        return customers;
    }

}
