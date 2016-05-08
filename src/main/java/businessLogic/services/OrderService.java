package businessLogic.services;

import dataAccess.dao.IOrderDAO;
import dataAccess.entities.Order;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by oscar on 10/04/16.
 */

@Transactional
public class OrderService {

    private IOrderDAO orderDAO;

    public Order getById(long id) {
        return orderDAO.get(id);
    }

    public List<Order> getAllOrders() {
        return orderDAO.getAll();
    }

    public boolean saveOrder(Order order) {
        return orderDAO.save(order);
    }

    public boolean updateOrder(Order order) {
        return orderDAO.update(order);
    }

    public boolean deleteOrder(Order order) {
        return orderDAO.delete(order);
    }

    public IOrderDAO getOrderDAO() {
        return orderDAO;
    }

    public void setOrderDAO(IOrderDAO orderDAO) {
        this.orderDAO = orderDAO;
    }

}
