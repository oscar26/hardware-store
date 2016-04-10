package businessLogic.services;

import dataAccess.dao.IOrderBillDAO;
import dataAccess.entities.OrderBill;

import javax.transaction.Transactional;

/**
 * Created by oscar on 10/04/16.
 */

public class OrderBillService {

    private IOrderBillDAO orderBillDAO;

    @Transactional
    public boolean saveOrderBill(OrderBill orderBill) {
        return getOrderBillDAO().save(orderBill);
    }

    public IOrderBillDAO getOrderBillDAO() {
        return orderBillDAO;
    }

    public void setOrderBillDAO(IOrderBillDAO orderBillDAO) {
        this.orderBillDAO = orderBillDAO;
    }
}
