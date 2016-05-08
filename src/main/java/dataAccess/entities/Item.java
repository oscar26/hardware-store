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

    @Column(name = "item_info")
    @Size(min = 0, max = 5000)
    private String info;

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

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Item() { }

    public Item(String name, String entityName,String info) {
        this.name = name;
        this.entityName = entityName;
        this.info = info;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item item = (Item) o;

        if (getItemId() != item.getItemId()) return false;
        if (getName() != null ? !getName().equals(item.getName()) : item.getName() != null) return false;
        if (getEntityName() != null ? !getEntityName().equals(item.getEntityName()) : item.getEntityName() != null)
            return false;
        return getInfo() != null ? getInfo().equals(item.getInfo()) : item.getInfo() == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (getItemId() ^ (getItemId() >>> 32));
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        result = 31 * result + (getEntityName() != null ? getEntityName().hashCode() : 0);
        result = 31 * result + (getInfo() != null ? getInfo().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Item{" +
                "itemId=" + itemId +
                ", name='" + name + '\'' +
                ", entityName='" + entityName + '\'' +
                ", info='" + info + '\'' +
                '}';
    }
}
