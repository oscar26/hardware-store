package dataAccess.dao.imp;

import dataAccess.dao.IOrderDAO;
import dataAccess.entities.Order;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class OrderDAO extends GenericDAO<Order> implements IOrderDAO {

    public Order get(long id) {
        Session session = getSession();
        return session.get(Order.class, id);
    }

    public List<Order> getAll() {
        Session session = getSession();
        return session.createQuery("FROM Order").list();
    }

}
