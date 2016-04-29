package businessLogic.services;

import dataAccess.dao.IItemDAO;
import dataAccess.entities.Item;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by oscar on 10/04/16.
 */

@Transactional
public class ItemService {

    private IItemDAO itemDAO;

    public Item getById(long id) {
        return itemDAO.get(id);
    }

    public List<Item> getAllItems() {
        return itemDAO.getAll();
    }

    public boolean saveItem(Item item) {
        return itemDAO.save(item);
    }

    public boolean updateItem(Item item) {
        return itemDAO.update(item);
    }

    public boolean deleteItem(Item item) {
        return itemDAO.delete(item);
    }

    public IItemDAO getItemDAO() {
        return itemDAO;
    }

    public void setItemDAO(IItemDAO itemDAO) {
        this.itemDAO = itemDAO;
    }

}
