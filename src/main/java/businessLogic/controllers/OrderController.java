package businessLogic.controllers;

import businessLogic.controllers.requestWrappers.OrderRequest;
import businessLogic.controllers.statuses.GenericResponseStatus;
import businessLogic.services.CustomerService;
import businessLogic.services.MailService;
import businessLogic.services.SpreadSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
    }

    @RequestMapping(value = "/furniture", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processFurnitureOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println(orderRequest);
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
    }

    @RequestMapping(value = "/shoes", method = RequestMethod.POST)
    public ResponseEntity<GenericResponseStatus> processShoesOrder(@RequestBody OrderRequest orderRequest) {
        return new ResponseEntity<>(new GenericResponseStatus(0, "SUCCESS: order correctly processed."), HttpStatus.OK);
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
