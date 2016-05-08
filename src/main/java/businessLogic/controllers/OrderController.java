package businessLogic.controllers;

import businessLogic.controllers.requestWrappers.OrderRequest;
import businessLogic.controllers.statuses.GenericResponseStatus;
import businessLogic.services.CustomerService;
import businessLogic.services.MailService;
import businessLogic.services.SpreadSheetService;
import dataAccess.entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by oscar on 7/05/16.
 */

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private SpreadSheetService spreadSheetService;

    @Autowired
    private MailService mailService;

    @RequestMapping(value = "/houses", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processHousesOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println("Houses request");
        System.out.println(orderRequest);
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
    }

    @RequestMapping(value = "/furniture", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processFurnitureOrder(@RequestBody OrderRequest orderRequest) {
        List<String> mergedProperties = mergeProperties(orderRequest);
        List<String> mergedValues = mergeValues(orderRequest);
        // Create xls
        // Send email. Check if successful or not.
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
    }

    @RequestMapping(value = "/shoes", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processShoesOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println("Shoes request");
        System.out.println(orderRequest);
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
    }

    private List<String> mergeProperties(OrderRequest orderRequest) {
        List<String> mergedProperties = new ArrayList<>();
        mergedProperties.add("nombres");
        mergedProperties.add("apellidos");
        mergedProperties.add("email");
        mergedProperties.add("documento_identidad");
        mergedProperties.add("direccion");
        mergedProperties.add("telefono");
        mergedProperties.add("separador"); // Delimiter
        mergedProperties.addAll(orderRequest.getProperties());
        return mergedProperties;
    }

    private List<String> mergeValues(OrderRequest orderRequest) {
        Customer customer = customerService.getByUsername(orderRequest.getUsername());
        List<String> mergedValues = new ArrayList<>();
        mergedValues.add(customer.getFirstName());
        mergedValues.add(customer.getLastName());
        mergedValues.add(customer.getEmail());
        mergedValues.add(Long.toString(customer.getCustomerId()));
        mergedValues.add(customer.getAddress());
        mergedValues.add(customer.getPhoneNumber());
        mergedValues.add(""); // Delimiter
        mergedValues.addAll(orderRequest.getValues());
        return mergedValues;
    }

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    public SpreadSheetService getSpreadSheetService() {
        return spreadSheetService;
    }

    public void setSpreadSheetService(SpreadSheetService spreadSheetService) {
        this.spreadSheetService = spreadSheetService;
    }

    public MailService getMailService() {
        return mailService;
    }

    public void setMailService(MailService mailService) {
        this.mailService = mailService;
    }
}
