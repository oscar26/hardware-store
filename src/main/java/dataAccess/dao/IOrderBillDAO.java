package dataAccess.dao;

import dataAccess.entities.OrderBill;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public interface IOrderBillDAO extends IGenericDAO<OrderBill> {

    OrderBill get(long id);
    List<OrderBill> getAll();

}
