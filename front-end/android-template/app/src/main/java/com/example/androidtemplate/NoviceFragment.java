package com.example.androidtemplate;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class NoviceFragment extends Fragment {

    ListView noviceView;
    ArrayList<Novica> novicaList;
    public NoviceFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View contentView = inflater.inflate(R.layout.fragment_novice, container, false);
        noviceView = contentView.findViewById(R.id.noviceListView);
        novicaList = new ArrayList<>();
        fetchData();
        return contentView;
    }


    private void fetchData (){
        RequestQueue volleyQueue = Volley.newRequestQueue(getActivity().getApplicationContext());
            String url = "http://192.168.1.18:5999/novice"; // THIS LINE NEED TO BE CHANGED FOR THE ONE WHERE YOU SERVER IS RUNNING
        JsonArrayRequest jsonObjectRequest = new JsonArrayRequest(
                Request.Method.GET,
                url,
                null,
                new Response.Listener<JSONArray>() {
                    @Override
                    public void onResponse(JSONArray res) {
                        try {
                            for (int i = 0; i < res.length(); i++) {
                                //getting the json object of the particular index inside the array
                                JSONObject novicaObject = res.getJSONObject(i);

                                Novica novica = new Novica(
                                        novicaObject.getString("_id"),
                                        novicaObject.getString("title"),
                                        novicaObject.getString("slug"),
                                        novicaObject.getString("text"));

                                novicaList.add(novica);
                            }
                            NovicaAdapter adapter = new NovicaAdapter(getActivity().getApplicationContext(),novicaList);
                            noviceView.setAdapter(adapter);


                        } catch (JSONException e) {
                            e.printStackTrace();
                            Toast.makeText(getActivity().getApplicationContext(),
                                    "Error: " + e.getMessage(),
                                    Toast.LENGTH_LONG).show();
                        }
                    }
                }, new Response.ErrorListener() {

            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("VOLLEY ERROR", error.toString());
            }
        });

        volleyQueue.add(jsonObjectRequest);
    }

}