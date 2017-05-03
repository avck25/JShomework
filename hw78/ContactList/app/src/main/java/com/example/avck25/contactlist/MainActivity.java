package com.example.avck25.contactlist;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final ArrayList<String> contacts = new ArrayList<>();

        ListView theList = (ListView)findViewById(R.id.theList);
        final EditText contact = (EditText) findViewById(R.id.contact);
        Button addContact = (Button)findViewById(R.id.addButton);

        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, contacts);
        theList.setAdapter(adapter);

        addContact.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String addedContact = contact.getText().toString();
                if(!addedContact.isEmpty()) {
                    adapter.add(addedContact);
                    contact.setText("");
                }
            }
        });



    }
}
