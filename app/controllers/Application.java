package controllers;

import models.Repo;
import play.db.ebean.Model;
import play.mvc.*;
import play.data.Form;

import views.html.*;

import java.util.List;

import static play.libs.Json.toJson;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }
    public static Result history() {
        return ok(history.render());
    }

    public static Result addRepo(){
        Repo repo = Form.form(Repo.class).bindFromRequest().get();
        repo.save();
        return redirect(routes.Application.index());
    }
    public static Result getRepos(){
        List users;
        users = new Model.Finder(String.class, Repo.class).all();
        return ok(toJson(users));

    }
}
