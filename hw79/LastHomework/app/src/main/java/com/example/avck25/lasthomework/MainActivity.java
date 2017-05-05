package com.example.avck25.lasthomework;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        final EditText displayText = (EditText)findViewById(R.id.displayText);
        Button theButton = (Button) findViewById(R.id.button);

        theButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String theText = displayText.getText().toString();
                Intent intent = new Intent(MainActivity.this, displayText.class);
                intent.putExtra("theText", theText);
                startActivity(intent);


            }
        });
    }
}
