package com.example.avck25.lasthomework;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class displayText extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_text);

        Bundle bundle = getIntent().getExtras();
        if (bundle == null) {
            return;
        }
        String theText = bundle.getString("theText");

        TextView textView2 = (TextView)findViewById(R.id.textView2);

        textView2.setText(theText);
    }
}
