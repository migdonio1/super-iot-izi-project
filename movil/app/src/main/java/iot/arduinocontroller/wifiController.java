package iot.arduinocontroller;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.widget.EditText;

import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;

import java.net.URISyntaxException;

public class wifiController extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wifi_controller);
        mSocket.connect();
    }

    private Socket mSocket;

    {
        try {
            mSocket = IO.socket("http://localhost:3000");
        } catch (URISyntaxException e) {
            Log.e("SOCKET IO", e.toString());
        }
    }

}
