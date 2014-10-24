package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by casey on 14-10-24.
 */


@Entity
public class User extends Model {

    @Id
    public String id;
    public String name;


}
