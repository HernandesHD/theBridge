#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

// Set these to run example.
#define FIREBASE_HOST "thebridge-afca5.firebaseio.com"
#define FIREBASE_AUTH "KSZUwagxSeXd3CwaBKPXst5jtv7DwrHFdZy9K1ec"
#define WIFI_SSID "z3r0_D4y"
#define WIFI_PASSWORD "qazwsx@sha0256#cf22"

#define RELE D2

void setupPins() {
  pinMode(RELE, OUTPUT);
}

void setupWifi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("conectando");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(1000);
  }
  Serial.println();
  Serial.print("Conectado: ");
  Serial.println(WiFi.localIP());
}

void setupFirebase() {
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setBool("the_bridge/comando", false);
  if (Firebase.failed()) {
    Serial.print("Erro ao conectar ao firebase");
    Serial.println(Firebase.error());
    delay(2000);
    return;
  }
}

void setup() {
  Serial.begin(9600);
  setupPins();
  setupWifi();

  setupFirebase();

}

void loop() {
  // Verifica o valor da lampada no firebase
  bool statusTomada = Firebase.getBool("the_bridge/comando");
  if (Firebase.failed()) {
    Serial.print("Erro ao recuperar dados");
    Serial.println(Firebase.error());
    delay(1000);
  }
  digitalWrite(RELE, statusTomada ? LOW : HIGH);
  Serial.print("Status ponte: ");
  Serial.println(statusTomada);
  delay(1000);

}
