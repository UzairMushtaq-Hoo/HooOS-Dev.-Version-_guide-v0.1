# MQTT Broker

An open source MQTT broker [Eclipse Mosquitto™](https://mosquitto.org/) is deployed locally within the OS to keep the maximum up-time and no dependency on internet.

A minimum of two MQTT clients are connected to the broker including:

* angieOS Core Client
* Protocol Parser Client

### angieOS Core Client:

It connects to the broker running on static local IP address through Web Sockets, which allows the client to listen to the continuous stream of data published/received or event being performed.

### Protocol Parser Client:

This client talks with the broker host over TCP connection, details will be covered in next section.

