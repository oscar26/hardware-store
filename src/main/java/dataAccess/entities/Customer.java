package dataAccess.entities;

import dataAccess.entities.enumerations.CustomerIdType;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

@Entity
@Table(name = "customer")
public class Customer extends Account implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Column(name = "customer_id", unique = true)
    private long customerId;

    @NotNull
    @Column(name = "customer_id_type")
    private CustomerIdType customerIdType;

    @NotNull
    @Size(min = 1, max = 254)
    @Column(name = "customer_address")
    private String address;

    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "customer_phone_number")
    private String phoneNumber;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Order> placedOrders;

    public Customer() { }

    public Customer(String firstName, String lastName, String username, String password, String email, long customerId, CustomerIdType customerIdType, String address, String phoneNumber, List<Order> placedOrders) {
        super(firstName, lastName, username, password, email);
        this.customerId = customerId;
        this.customerIdType = customerIdType;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.placedOrders = placedOrders;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public CustomerIdType getCustomerIdType() {
        return customerIdType;
    }

    public void setCustomerIdType(CustomerIdType customerIdType) {
        this.customerIdType = customerIdType;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Order> getPlacedOrders() {
        return placedOrders;
    }

    public void setPlacedOrders(List<Order> placedOrders) {
        this.placedOrders = placedOrders;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Customer customer = (Customer) o;

        if (customerId != customer.customerId) return false;
        if (customerIdType != customer.customerIdType) return false;
        if (address != null ? !address.equals(customer.address) : customer.address != null) return false;
        if (phoneNumber != null ? !phoneNumber.equals(customer.phoneNumber) : customer.phoneNumber != null)
            return false;
        return placedOrders != null ? placedOrders.equals(customer.placedOrders) : customer.placedOrders == null;

    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (int) (customerId ^ (customerId >>> 32));
        result = 31 * result + (customerIdType != null ? customerIdType.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (phoneNumber != null ? phoneNumber.hashCode() : 0);
        result = 31 * result + (placedOrders != null ? placedOrders.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerIdType=" + customerIdType +
                ", address=" + address +
                ", phoneNumber=" + phoneNumber +
                ", placedOrders=" + placedOrders +
                '}';
    }
}
