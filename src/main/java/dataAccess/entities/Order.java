package dataAccess.entities;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

@Entity
@Table(name = "\"order\"")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderId;

    @Column(name = "order_total_value")
    private double totalValue;

    @Column(name = "order_shipping_address")
    @Size(min = 1, max = 500)
    private String shippingAddress;

    @Column(name = "order_shipping_date")
    private Date shippingDate;

    @Column(name = "order_shipping_cost")
    private double shippingCost;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Item> items;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "order_bill_id")
    private OrderBill bill;

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public Date getShippingDate() {
        return shippingDate;
    }

    public void setShippingDate(Date shippingDate) {
        this.shippingDate = shippingDate;
    }

    public double getShippingCost() {
        return shippingCost;
    }

    public void setShippingCost(double shippingCost) {
        this.shippingCost = shippingCost;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public OrderBill getBill() {
        return bill;
    }

    public void setBill(OrderBill bill) {
        this.bill = bill;
    }

    public Order() { }

    public Order(double totalValue, String shippingAddress, Date shippingDate, double shippingCost, List<Item> items, OrderBill bill) {
        this.totalValue = totalValue;
        this.shippingAddress = shippingAddress;
        this.shippingDate = shippingDate;
        this.shippingCost = shippingCost;
        this.items = items;
        this.bill = bill;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Order order = (Order) o;

        if (orderId != order.orderId) return false;
        if (Double.compare(order.totalValue, totalValue) != 0) return false;
        if (Double.compare(order.shippingCost, shippingCost) != 0) return false;
        if (shippingAddress != null ? !shippingAddress.equals(order.shippingAddress) : order.shippingAddress != null)
            return false;
        if (shippingDate != null ? !shippingDate.equals(order.shippingDate) : order.shippingDate != null) return false;
        if (items != null ? !items.equals(order.items) : order.items != null) return false;
        return bill != null ? bill.equals(order.bill) : order.bill == null;

    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = (int) (orderId ^ (orderId >>> 32));
        temp = Double.doubleToLongBits(totalValue);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (shippingAddress != null ? shippingAddress.hashCode() : 0);
        result = 31 * result + (shippingDate != null ? shippingDate.hashCode() : 0);
        temp = Double.doubleToLongBits(shippingCost);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (items != null ? items.hashCode() : 0);
        result = 31 * result + (bill != null ? bill.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", totalValue=" + totalValue +
                ", shippingAddress='" + shippingAddress + '\'' +
                ", shippingDate=" + shippingDate +
                ", shippingCost=" + shippingCost +
                ", items=" + items +
                ", bill=" + bill +
                '}';
    }
}
