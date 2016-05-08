package dataAccess.entities;

import dataAccess.entities.enumerations.PaymentMethod;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by oscar on 9/04/16.
 */

@Entity
@Table(name = "order_bill")
public class OrderBill implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "order_bill_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderBillId;

    @Column(name = "order_bill_payment_method")
    private PaymentMethod paymentMethod;

    @Column(name = "order_bill_payment_date")
    private Date paymentDate;

    public long getOrderBillId() {
        return orderBillId;
    }

    public void setOrderBillId(long orderBillId) {
        this.orderBillId = orderBillId;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public OrderBill() { }

    public OrderBill(PaymentMethod paymentMethod, Date paymentDate) {
        this.paymentMethod = paymentMethod;
        this.paymentDate = paymentDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderBill orderBill = (OrderBill) o;

        if (orderBillId != orderBill.orderBillId) return false;
        if (paymentMethod != orderBill.paymentMethod) return false;
        return paymentDate != null ? paymentDate.equals(orderBill.paymentDate) : orderBill.paymentDate == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (orderBillId ^ (orderBillId >>> 32));
        result = 31 * result + (paymentMethod != null ? paymentMethod.hashCode() : 0);
        result = 31 * result + (paymentDate != null ? paymentDate.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "OrderBill{" +
                "orderBillId=" + orderBillId +
                ", paymentMethod=" + paymentMethod +
                ", paymentDate=" + paymentDate +
                '}';
    }
}
