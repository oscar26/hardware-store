package businessLogic.controllers.requestWrappers;

import java.util.List;

/**
 * Created by oscar on 7/05/16.
 */
public class OrderRequest {

    private String username;
    private List<String> properties;
    private List<String> values;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getProperties() {
        return properties;
    }

    public void setProperties(List<String> properties) {
        this.properties = properties;
    }

    public List<String> getValues() {
        return values;
    }

    public void setValues(List<String> values) {
        this.values = values;
    }

    @Override
    public String toString() {
        return "OrderRequest{" +
                "username='" + username + '\'' +
                ", properties=" + properties +
                ", values=" + values +
                '}';
    }
}
