package dataAccess.dao;

public interface IGenericDAO<T> {
    
    boolean save(T object);
    boolean update(T object);
	boolean delete(T object);
        
}
