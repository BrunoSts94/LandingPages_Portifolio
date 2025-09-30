package uniftec.com.br.appcalculararearetangulo;

import androidx.appcompat.app.AppCompatActivity;

import android.content.res.Resources;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity  {

    private EditText edtbase;
    private EditText edtaltura;
    private TextView txtResultado;
    private Button btnCalcular;
    private Button btnLimpar;
    private Resources res;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edtbase = (EditText) findViewById(R.id.edtbase);
        edtaltura = (EditText) findViewById(R.id.edtaltura);
        txtResultado = (TextView) findViewById(R.id.txtResultado);
        btnCalcular = (Button) findViewById(R.id.btnCalcular);
        btnLimpar = (Button) findViewById(R.id.btnLimpar);
        res = getResources();

        btnCalcular.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                float base, altura, area;
                try {
                    base = Float.parseFloat(edtbase.getText().toString());
                    altura = Float.parseFloat(edtaltura.getText().toString());
                    area = (float) (base*altura);
                    txtResultado.setText(String.format(res.getString(R.string.textoResultado)) + "" + area);
                }catch (Exception erro)
                {
                    Toast.makeText(getApplicationContext(), String.format(res.getString(R.string.erroBase)),
                            Toast.LENGTH_LONG).show();
                }
            }
        });
        btnLimpar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtaltura.setText("");
                edtbase.setText("");
                txtResultado.setText(String.format(res.getString(R.string.Resultado)));
                edtaltura.requestFocus();
                edtbase.requestFocus();
            }
        });
    }
}