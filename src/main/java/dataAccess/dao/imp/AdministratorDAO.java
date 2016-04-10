package dataAccess.dao.imp;

import dataAccess.dao.IAdministratorDAO;
import dataAccess.entities.Administrator;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public class AdministratorDAO extends GenericDAO<Administrator> implements IAdministratorDAO {

    public Administrator get(long id) {
        Session session = getSession();
        return session.get(Administrator.class, id);
    }

    public List<Administrator> getAll() {
        Session session = getSession();
        return session.createQuery("FROM Administrator").list();
    }

    public Administrator getAdministratorByUsername(String username) {
        Session session = getSession();
        return (Administrator)session.createQuery("FROM Administrator WHERE username = :username")
                .setParameter("username", username).uniqueResult();
    }

}
