package businessLogic.controllers;

import businessLogic.controllers.requestWrappers.OrderRequest;
import businessLogic.controllers.statuses.GenericResponseStatus;
import businessLogic.services.CustomerService;
import businessLogic.services.MailService;
import businessLogic.services.SpreadsheetService;
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
    private SpreadsheetService spreadsheetService;

    @Autowired
    private MailService mailService;

    @RequestMapping(value = "/houses", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processHousesOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println("Houses request received");
        boolean success = mailService.sendEmail(
                spreadsheetService.generateExcelFile(mergeProperties(orderRequest), mergeValues(orderRequest)),
                "omdej@unal.edu.co",
                "[HOUSES] Asunto",
                "Cuerpo del mensaje"
        );
        if (success)
            return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
        else
            return new ResponseEntity<>(new GenericResponseStatus(1, "ERROR: email sending failed."), HttpStatus.OK);
    }

    @RequestMapping(value = "/furniture", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processFurnitureOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println("Furniture request received");
        boolean success = mailService.sendEmail(
                spreadsheetService.generateExcelFile(mergeProperties(orderRequest), mergeValues(orderRequest)),
                "jmuebles@outlook.com",
                "[FURNITURE] Asunto",
                "Cuerpo del mensaje"
        );
        if (success)
            return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
        else
            return new ResponseEntity<>(new GenericResponseStatus(1, "ERROR: email sending failed."), HttpStatus.OK);
    }

    @RequestMapping(value = "/shoes", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processShoesOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println("Shoes request received");
        boolean success = mailService.sendEmail(
                spreadsheetService.generateExcelFile(mergeProperties(orderRequest), mergeValues(orderRequest)),
                "la.zapatteria.online@gmail.com",
                "[SHOES] Asunto",
                "Cuerpo del mensaje"
        );
        if (success)
            return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
        else
            return new ResponseEntity<>(new GenericResponseStatus(1, "ERROR: email sending failed."), HttpStatus.OK);
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

    public SpreadsheetService getSpreadsheetService() {
        return spreadsheetService;
    }

    public void setSpreadsheetService(SpreadsheetService spreadsheetService) {
        this.spreadsheetService = spreadsheetService;
    }

    public MailService getMailService() {
        return mailService;
    }

    public void setMailService(MailService mailService) {
        this.mailService = mailService;
    }
}
