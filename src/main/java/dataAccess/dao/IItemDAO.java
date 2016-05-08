package dataAccess.dao;

import dataAccess.entities.Item;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public interface IItemDAO extends IGenericDAO<Item> {

    Item get(long id);
    List<Item> getAll();

}
