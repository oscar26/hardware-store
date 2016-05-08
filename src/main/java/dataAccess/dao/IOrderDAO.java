package dataAccess.dao;

import dataAccess.entities.Order;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public interface IOrderDAO extends IGenericDAO<Order> {

    Order get(long id);
    List<Order> getAll();

}
