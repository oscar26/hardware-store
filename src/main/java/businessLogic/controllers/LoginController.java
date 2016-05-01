package businessLogic.controllers;

import businessLogic.controllers.requestWrappers.LoginRequest;
import businessLogic.services.CustomerService;
import businessLogic.controllers.statuses.GenericResponseStatus;
import dataAccess.entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by oscar on 15/04/16.
 */

@RestController
@RequestMapping(value = "/login")
public class LoginController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> doLogin(@RequestBody LoginRequest loginInfo) {
        System.out.println("Receiving login request with info: " + loginInfo);

        Customer customerToLogin = customerService.getByUsername(loginInfo.getUsername());

        if (customerToLogin == null) {
            customerToLogin = customerService.getByEmail(loginInfo.getUsername());
            if (customerToLogin == null)
                return new ResponseEntity<>(new GenericResponseStatus(1, "ERROR: User not found"), HttpStatus.OK);
        }

        if (!loginInfo.getPassword().equals(customerToLogin.getPassword()))
            return new ResponseEntity<>(new GenericResponseStatus(2, "ERROR: Password not correct"), HttpStatus.OK);
        else
            return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: successful login"), HttpStatus.OK);
    }

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }
}
