package dataAccess.dao.imp;

import dataAccess.dao.IGenericDAO;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class GenericDAO<T> implements IGenericDAO<T> {
    
    private SessionFactory sessionFactory; 

    @Override
    public boolean save(T object) {
        Session session = getSession();
        boolean success = false;
        try {
            Transaction transaction = session.beginTransaction();
            session.saveOrUpdate(object);
            transaction.commit();
            success = true;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return success;
    }
    
    @Override
    public boolean delete(T object) {
        Session session = getSession();
        Transaction transaction = session.beginTransaction();
        boolean success = false;
        try {
            session.delete(object);
            success = true;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        transaction.commit();
        return success;
    }

    
    @Override
    public boolean update(T object) {
        Session session = getSession();
        boolean success = false;
        try {
            Transaction transaction = session.beginTransaction();
            session.saveOrUpdate(object);
            transaction.commit();
            success = true;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return success;
    }
    
    public Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}
