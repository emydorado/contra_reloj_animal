int trgPin = 8;
int echoPin = 7;

int trgPin2 = 13;
int echoPin2 = 12;

int pingTravelTime2;
int pingTravelTime;

void setup() {
  pinMode(trgPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(trgPin2, OUTPUT);
  pinMode(echoPin2, INPUT);

  Serial.begin(9600); // Solo una vez
}

void loop() {
  // Sensor 1
  digitalWrite(trgPin, LOW);
  delayMicroseconds(2); // Asegura estabilidad
  digitalWrite(trgPin, HIGH);
  delayMicroseconds(10); // Genera pulso
  digitalWrite(trgPin, LOW);

  pingTravelTime = pulseIn(echoPin, HIGH, 100000); // Timeout 100 ms

  // Sensor 2
  digitalWrite(trgPin2, LOW);
  delayMicroseconds(1);
  digitalWrite(trgPin2, HIGH);
  delayMicroseconds(1);
  digitalWrite(trgPin2, LOW);

  pingTravelTime2 = pulseIn(echoPin2, HIGH, 100000);

  // Verificación de rangos
  if (pingTravelTime <=7500 && pingTravelTime >= 300) {
    Serial.println("PASO SENSOR 1");
  }

  if (pingTravelTime2 <= 7500 && pingTravelTime2 >= 300) {
    Serial.println("PASO SENSOR 2");
  }

  delay(100); // Pausa para evitar saturación del monitor
}
