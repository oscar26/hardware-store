package dataAccess.dao.imp;

import dataAccess.dao.IOrderBillDAO;
import dataAccess.entities.OrderBill;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class OrderBillDAO extends GenericDAO<OrderBill> implements IOrderBillDAO {

    public OrderBill get(long id) {
        Session session = getSession();
        return session.get(OrderBill.class, id);
    }

    public List<OrderBill> getAll() {
        Session session = getSession();
        return session.createQuery("FROM OrderBill").list();
    }

}
