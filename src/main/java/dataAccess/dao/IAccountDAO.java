package dataAccess.dao;

import dataAccess.entities.Account;

import java.util.List;

/**
 * Created by oscar on 9/04/16.
 */
public interface IAccountDAO extends IGenericDAO<Account> {

    Account get(long id);
    List<Account> getAll();
    Account getAccountByUsername(String username);

}
