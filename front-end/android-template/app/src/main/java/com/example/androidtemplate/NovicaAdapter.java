package com.example.androidtemplate;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentManager;

import java.util.ArrayList;

public class NovicaAdapter extends ArrayAdapter<Novica> {
    private ArrayList<Novica> noviceList;
    private Context mCtx;
    SingleNovicaFragment singleNovicaFragment;



    public NovicaAdapter(Context context, ArrayList<Novica> noviceList){
        super(context,R.layout.list_item, noviceList);
        this.noviceList = noviceList;
        this.mCtx = context;
    }


    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        ViewHolder holder;
        LayoutInflater inflater = LayoutInflater.from(mCtx);
        convertView = inflater.inflate(R.layout.list_item, null, true);
        holder = new ViewHolder();
        //getting text views
        holder.novicaTitleView = convertView.findViewById(R.id.novicaTitle);
        holder.novicaSlugView = convertView.findViewById(R.id.novicaSlug);

        convertView.setTag(holder);
        //Getting the tutorial for the specified position
        Novica novica = noviceList.get(position);
        String title = novica.getTitle();
        String slug = novica.getSlug();

        holder.novicaTitleView.setText(title);
        holder.novicaSlugView.setText(slug);

        return convertView;
    }

    static class ViewHolder {
        TextView novicaTitleView;
        TextView novicaSlugView;
    }

}
