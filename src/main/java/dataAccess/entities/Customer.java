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

    @ElementCollection
    @CollectionTable(name = "addresses", joinColumns = @JoinColumn(name = "account_id"))
    @Column(name = "customer_addresses")
    private List<String> addresses;

    @ElementCollection
    @CollectionTable(name = "phone_numbers", joinColumns = @JoinColumn(name = "account_id"))
    @Column(name = "customer_phone_numbers")
    private List<String> phoneNumbers;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Order> placedOrders;

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

}
