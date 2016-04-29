package dataAccess.dao.imp;

import dataAccess.dao.IOrderBillDAO;
import dataAccess.entities.OrderBill;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class OrderBillDAO extends GenericDAO<OrderBill> implements IOrderBillDAO {

    public OrderBill get(long id) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        OrderBill orderBill = session.get(OrderBill.class, id);
        transaction.commit();
        return orderBill;
    }

    public List<OrderBill> getAll() {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        List<OrderBill> orderBills = session.createQuery("FROM OrderBill").list();
        transaction.commit();
        return orderBills;
    }

}
