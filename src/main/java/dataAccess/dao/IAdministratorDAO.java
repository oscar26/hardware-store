package dataAccess.dao;

import dataAccess.entities.Administrator;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */

public interface IAdministratorDAO extends IGenericDAO<Administrator> {

    Administrator get(long id);
    List<Administrator> getAll();
    Administrator getAdministratorByUsername(String username);

}
