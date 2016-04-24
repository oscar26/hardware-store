package dataAccess.dao.imp;

import dataAccess.dao.IAdministratorDAO;
import dataAccess.entities.Administrator;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class AdministratorDAO extends GenericDAO<Administrator> implements IAdministratorDAO {

    public Administrator get(long id) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Administrator administrator = session.get(Administrator.class, id);
        transaction.commit();
        return administrator;
    }

    public List<Administrator> getAll() {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        List<Administrator> administrators = session.createQuery("FROM Administrator").list();
        transaction.commit();
        return administrators;
    }

    public Administrator getAdministratorByUsername(String username) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Administrator administrator = (Administrator)session.createQuery("FROM Administrator WHERE username = :username")
                .setParameter("username", username).uniqueResult();
        transaction.commit();
        return administrator;
    }

}
