package com.facebook.reactnative.demo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;

public class MainActivity extends Activity implements OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.btn_helloworld).setOnClickListener(this);
        findViewById(R.id.btn_ui_explorer).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        Intent intent = null;
        switch (v.getId()) {
        case R.id.btn_helloworld:
            intent = new Intent(this, HelloWorld.class);
            startActivity(intent);
            break;
        case R.id.btn_ui_explorer:
            intent = new Intent(this, UIExplorerActivity.class);
            startActivity(intent);
            break;

        default:
            break;
        }
    }
}
