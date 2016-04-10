package dataAccess.dao.imp;

import dataAccess.dao.IItemDAO;
import dataAccess.entities.Item;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class ItemDAO extends GenericDAO<Item> implements IItemDAO {

    public Item get(long id) {
        Session session = getSession();
        return session.get(Item.class, id);
    }

    public List<Item> getAll() {
        Session session = getSession();
        return session.createQuery("FROM Item").list();
    }

}
