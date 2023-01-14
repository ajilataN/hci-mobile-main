package com.example.androidtemplate;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity implements BottomNavigationView.OnNavigationItemSelectedListener  {

    BottomNavigationView bottomNavigationView;

    // Views to be injected
    HomeFragment homeFragment = new HomeFragment();
    AboutFragment aboutFragment = new AboutFragment();
    AddNovicaFragment addNovicaFragment = new AddNovicaFragment();
    NoviceFragment noviceFragment = new NoviceFragment();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        bottomNavigationView = findViewById(R.id.bottomNavigationView);
        bottomNavigationView.setOnNavigationItemSelectedListener(this);
        bottomNavigationView.setSelectedItemId(R.id.home);
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.home:
                getSupportFragmentManager().beginTransaction().replace(R.id.flFragment, homeFragment).commit();
                return true;

            case R.id.about:
                getSupportFragmentManager().beginTransaction().replace(R.id.flFragment, aboutFragment).commit();
                return true;

            case R.id.novice:
                getSupportFragmentManager().beginTransaction().replace(R.id.flFragment, noviceFragment).commit();
                return true;

            case R.id.addnovica:
                getSupportFragmentManager().beginTransaction().replace(R.id.flFragment, addNovicaFragment).commit();
                return true;
        }
        return false;
    }
}