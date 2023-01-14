package com.example.androidtemplate;

public class Novica {
    private String _id;
    private String title;
    private String slug;
    private String text;

    public Novica(String _id, String title, String slug, String text){
        this.set_id(_id);
        this.setTitle(title);
        this.setSlug(slug);
        this.setText(text);
    }


    public String get_id() {
        return _id;
    }

    private void set_id(String _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    private void setTitle(String title) {
        this.title = title;
    }

    public String getSlug() {
        return slug;
    }

    private void setSlug(String slug) {
        this.slug = slug;
    }

    public String getText() {
        return text;
    }

    private void setText(String text) {
        this.text = text;
    }
}
