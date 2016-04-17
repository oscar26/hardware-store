package dataAccess.dao.imp;

import dataAccess.dao.IAccountDAO;
import dataAccess.entities.Account;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */
public class AccountDAO extends GenericDAO<Account> implements IAccountDAO {

    public Account get(long id) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Account account = session.get(Account.class, id);
        transaction.commit();
        return account;
    }

    public List<Account> getAll() {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        List<Account> accounts = session.createQuery("FROM Account").list();
        transaction.commit();
        return accounts;
    }

    public Account getAccountByUsername(String username) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        Account account = (Account)session.createQuery("FROM Account WHERE username = :username")
                .setParameter("username", username).uniqueResult();
        transaction.commit();
        return account;
    }

}
