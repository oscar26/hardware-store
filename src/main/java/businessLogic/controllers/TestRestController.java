package businessLogic.controllers;

import businessLogic.services.OrderBillService;
import dataAccess.entities.OrderBill;
import dataAccess.entities.enumerations.PaymentMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by oscar on 10/04/16.
 */

@RestController
public class TestRestController {

    @Autowired
    private OrderBillService orderBillService;

    @RequestMapping(value = "/orderBills", method = RequestMethod.GET, headers = "Accept=application/json")
    public List<OrderBill> getOrderBills() {
        List<OrderBill> orderBills = new ArrayList<>();
        orderBills.add(new OrderBill(PaymentMethod.CASH, new Date()));
        orderBills.add(new OrderBill(PaymentMethod.CHEQUE, new Date()));
        orderBills.add(new OrderBill(PaymentMethod.CREDIT_CARD, new Date()));
        orderBillService.saveOrderBill(orderBills.get(0));
        return orderBills;
    }

    public OrderBillService getOrderBillService() {
        return orderBillService;
    }

    public void setOrderBillService(OrderBillService orderBillService) {
        this.orderBillService = orderBillService;
    }
}
