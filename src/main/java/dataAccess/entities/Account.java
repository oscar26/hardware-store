package dataAccess.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "account")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Account implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "account_id")
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long accountId;

    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "account_first_name")
    private String firstName;

    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "account_last_name")
    private String lastName;

    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "account_username", unique = true)
    private String username;

    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "account_password")
    private String password;

    @NotNull
    @Size(min = 1, max = 254)
    @Column(name = "account_email", unique = true)
    private String email;

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
