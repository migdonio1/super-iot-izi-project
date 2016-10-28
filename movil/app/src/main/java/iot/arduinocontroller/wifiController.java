package iot.arduinocontroller;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.URISyntaxException;

public class wifiController extends AppCompatActivity {

    private Socket mSocket;
    private Button button;
    private int status = 0;
    public JSONObject data;

    {
        try {
            mSocket = IO.socket("http://192.168.0.13:3000");
            Log.d("socket", mSocket.toString());
            Log.d("socket", "Conexion exitosa");
        } catch (URISyntaxException e) {}
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wifi_controller);

        button = (Button) findViewById(R.id.button);

        mSocket.connect();
    }

    public void onClickToggleButton(View v) throws JSONException {
        data = new JSONObject();

        if(status == 0) {
            data.put("data", "1");
            Log.d("socket", data.toString());
            mSocket.emit("toggleLedDemo",data);
            button.setText("Encendido");
            status = 1;
        } else if(status == 1) {
            data.put("data", "0");
            Log.d("socket", data.toString());
            mSocket.emit("toggleLedDemo",data);
            button.setText("Apagado");
            status = 0;
        } else {
            Log.d("socket", "valor incorrecto");
        }
    }
}
