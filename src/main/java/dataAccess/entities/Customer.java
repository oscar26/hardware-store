package dataAccess.entities;

import dataAccess.entities.enumerations.CustomerIdType;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
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

    @ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name = "addresses", joinColumns = @JoinColumn(name = "account_id"))
    @Column(name = "customer_addresses")
    private List<String> addresses;

    @ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name = "phone_numbers", joinColumns = @JoinColumn(name = "account_id"))
    @Column(name = "customer_phone_numbers")
    private List<String> phoneNumbers;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Order> placedOrders;

    public Customer() { }

    public Customer(String firstName, String lastName, String username, String password, String email, long customerId,
                    CustomerIdType customerIdType, List<String> addresses, List<String> phoneNumbers, List<Order> placedOrders) {
        super(firstName, lastName, username, password, email);
        this.customerId = customerId;
        this.customerIdType = customerIdType;
        this.addresses = addresses;
        this.phoneNumbers = phoneNumbers;
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

    public List<String> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<String> addresses) {
        this.addresses = addresses;
    }

    public List<String> getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(List<String> phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
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
        if (addresses != null ? !addresses.equals(customer.addresses) : customer.addresses != null) return false;
        if (phoneNumbers != null ? !phoneNumbers.equals(customer.phoneNumbers) : customer.phoneNumbers != null)
            return false;
        return placedOrders != null ? placedOrders.equals(customer.placedOrders) : customer.placedOrders == null;

    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (int) (customerId ^ (customerId >>> 32));
        result = 31 * result + (customerIdType != null ? customerIdType.hashCode() : 0);
        result = 31 * result + (addresses != null ? addresses.hashCode() : 0);
        result = 31 * result + (phoneNumbers != null ? phoneNumbers.hashCode() : 0);
        result = 31 * result + (placedOrders != null ? placedOrders.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerIdType=" + customerIdType +
                ", addresses=" + addresses +
                ", phoneNumbers=" + phoneNumbers +
                ", placedOrders=" + placedOrders +
                '}';
    }
}
