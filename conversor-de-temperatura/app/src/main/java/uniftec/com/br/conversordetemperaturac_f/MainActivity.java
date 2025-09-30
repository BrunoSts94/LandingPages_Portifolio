package uniftec.com.br.conversordetemperaturac_f;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    //Declarar os objetos que foram feitos na activy
    private EditText editCelsius;
    private Button btnCalcular,btnLimpar;
    private TextView txtFahrenheit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editCelsius = (EditText) findViewById(R.id.edtCelsius);
        btnCalcular = (Button) findViewById(R.id.btnCalcular);
        btnLimpar = (Button) findViewById(R.id.btnLimpar);
        txtFahrenheit = (TextView) findViewById(R.id.txtFahrenheit);

        //Evento de cliques
        btnCalcular.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                float c, f;
                try {
                    c = Float.parseFloat(editCelsius.getText().toString());
                    f = (float) ((9 * c + 160) / 5);
                    txtFahrenheit.setText("Resultado: " + f + "Fahrenheit");
                } catch (Exception erro) {
                    Toast.makeText(MainActivity.this, "Voce digitou um valor inválido.",
                            Toast.LENGTH_LONG).show();
                }
            }
        });

        btnLimpar.setOnClickListener(new View.OnClickListener(){
        @Override
        public void onClick(View view) {
            editCelsius.setText("");
            txtFahrenheit.setText("Resultado:");
            editCelsius.requestFocus();
        }
    });
    }
}
