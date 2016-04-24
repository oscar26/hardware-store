package dataAccess.dao.imp;

import dataAccess.dao.IItemDAO;
import dataAccess.entities.Item;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class ItemDAO extends GenericDAO<Item> implements IItemDAO {

    public Item get(long id) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Item item = session.get(Item.class, id);
        transaction.commit();
        return item;
    }

    public List<Item> getAll() {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        List<Item> items = session.createQuery("FROM Item").list();
        transaction.commit();
        return items;
    }

}
