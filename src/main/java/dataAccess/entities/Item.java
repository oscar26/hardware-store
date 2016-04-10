package dataAccess.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

@Entity
@Table(name = "item")
public class Item implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long itemId;

    @Column(name = "item_name")
    @Size(min = 1, max = 100)
    private String name;

    @Column(name = "item_entity_name")
    @Size(min = 1, max = 100)
    private String entityName;

    @Column(name = "item_height")
    private double height;

    @Column(name = "item_width")
    private double width;

    @Column(name = "item_depth")
    private double depth;

    @Column(name = "item_weight")
    private double weight;

    @Column(name = "item_colour")
    @Size(min = 1, max = 50)
    private String colour;

    @Column(name = "item_quantity")
    private long quantity;

    @Column(name = "item_price")
    private double price;

    @Column(name = "item_additional_info")
    @Size(min = 0, max = 3000)
    private String additionalInfo;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Item> requiredItems;

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEntityName() {
        return entityName;
    }

    public void setEntityName(String entityName) {
        this.entityName = entityName;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getDepth() {
        return depth;
    }

    public void setDepth(double depth) {
        this.depth = depth;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public List<Item> getRequiredItems() {
        return requiredItems;
    }

    public void setRequiredItems(List<Item> requiredItems) {
        this.requiredItems = requiredItems;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item item = (Item) o;

        if (itemId != item.itemId) return false;
        if (Double.compare(item.height, height) != 0) return false;
        if (Double.compare(item.width, width) != 0) return false;
        if (Double.compare(item.depth, depth) != 0) return false;
        if (Double.compare(item.weight, weight) != 0) return false;
        if (quantity != item.quantity) return false;
        if (Double.compare(item.price, price) != 0) return false;
        if (name != null ? !name.equals(item.name) : item.name != null) return false;
        if (entityName != null ? !entityName.equals(item.entityName) : item.entityName != null) return false;
        if (colour != null ? !colour.equals(item.colour) : item.colour != null) return false;
        if (additionalInfo != null ? !additionalInfo.equals(item.additionalInfo) : item.additionalInfo != null)
            return false;
        return requiredItems != null ? requiredItems.equals(item.requiredItems) : item.requiredItems == null;

    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = (int) (itemId ^ (itemId >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (entityName != null ? entityName.hashCode() : 0);
        temp = Double.doubleToLongBits(height);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(width);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(depth);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(weight);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (colour != null ? colour.hashCode() : 0);
        result = 31 * result + (int) (quantity ^ (quantity >>> 32));
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (additionalInfo != null ? additionalInfo.hashCode() : 0);
        result = 31 * result + (requiredItems != null ? requiredItems.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Item{" +
                "itemId=" + itemId +
                ", name='" + name + '\'' +
                ", entityName='" + entityName + '\'' +
                ", height=" + height +
                ", width=" + width +
                ", depth=" + depth +
                ", weight=" + weight +
                ", colour='" + colour + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", requiredItems=" + requiredItems +
                '}';
    }
}
