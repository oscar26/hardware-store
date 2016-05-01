package businessLogic.controllers.statuses;

import java.io.Serializable;

/**
 * Created by oscar on 10/04/16.
 */

public class GenericResponseStatus implements Serializable {

    private final static long serialVersionUID = 1L;

    private int statusCode;
    private String defaultMessage;

    public GenericResponseStatus(int statusCode, String defaultMessage) {
        this.statusCode = statusCode;
        this.defaultMessage = defaultMessage;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getDefaultMessage() {
        return defaultMessage;
    }

    public void setDefaultMessage(String defaultMessage) {
        this.defaultMessage = defaultMessage;
    }

}
