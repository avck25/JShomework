package com.example.avck25.tipcalculator;

import android.icu.text.NumberFormat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button calculate = (Button) findViewById(R.id.calculate);
        final EditText totalBill = (EditText)findViewById(R.id.totalBill);
        final EditText percentage = (EditText)findViewById(R.id.percentage);
        final TextView amountToTip = (TextView) findViewById(R.id.amountToTip);

        calculate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String percentageToString = percentage.getText().toString();
                String totalBillToString  = totalBill.getText().toString();
                if(percentageToString != "" && totalBillToString != "") {
                    Float actualPercent = Float.parseFloat(percentageToString) / 100;
                    Float tip = Float.parseFloat(totalBill.getText().toString()) * actualPercent;
                    amountToTip.setText(NumberFormat.getCurrencyInstance().format(tip));
                } else {
                    Toast.makeText(MainActivity.this, "must have a total and a percentage", Toast.LENGTH_SHORT).show();
                }

            }
        });
    }
}


