package dataAccess.dao.imp;

import dataAccess.dao.IAccountDAO;
import dataAccess.entities.Account;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */
public class AccountDAO extends GenericDAO<Account> implements IAccountDAO {

    public Account get(long id) {
        Session session = getSession();
        return session.get(Account.class, id);
    }

    public List<Account> getAll() {
        Session session = getSession();
        //noinspection JpaQlInspection
        return session.createQuery("FROM Account").list();
    }

    public Account getAccountByUsername(String username) {
        Session session = getSession();
        //noinspection JpaQlInspection
        return (Account)session.createQuery("FROM Account WHERE username = :username")
                .setParameter("username", username).uniqueResult();
    }

}
