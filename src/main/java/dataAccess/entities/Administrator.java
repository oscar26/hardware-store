package dataAccess.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by oscar on 9/04/16.
 */

@Entity
@Table(name = "administrator")
public class Administrator extends Account implements Serializable {

    private static final long serialVersionUID = 1L;

}
