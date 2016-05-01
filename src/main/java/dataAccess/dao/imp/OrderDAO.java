package dataAccess.dao.imp;

import dataAccess.dao.IOrderDAO;
import dataAccess.entities.Order;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class OrderDAO extends GenericDAO<Order> implements IOrderDAO {

    public Order get(long id) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Order order = session.get(Order.class, id);
        transaction.commit();
        return order;
    }

    public List<Order> getAll() {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        List<Order> orders = session.createQuery("FROM Order").list();
        transaction.commit();
        return orders;
    }

}
