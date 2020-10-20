# Protocol Parser

A protocol parser is a tool or script that is being used to decrypt, parse and convert them in to a useable form to be understand by angieOS Core the data packets received from specified protocol like ZigBee, WiFi, ZWave, Bluetooth etc. The converted data is then publish in `json` through the Protocol Parser Client to the locally deployed mosquitto  MQTT broker. 

### [Zigbee2Mqtt](https://www.zigbee2mqtt.io/)

Zigbee2Mqtt allows to use Zigbee devices without the vendors gateway. It bridges events and allows you to control your Zigbee devices via MQTT. In this way you can integrate your Zigbee devices with whatever smart home infrastructure you are using.

#### Architecture:

 Zigbee2MQTT is made up of three modules, each developed in its own Github project. Starting from the hardware \(adapter\) and moving up; [zigbee-herdsman](https://github.com/koenkk/zigbee-herdsman) connects to your Zigbee adapter an makes an API available to the higher levels of the stack. For e.g. Texas Instruments hardware, zigbee-herdsman uses the [TI zStack monitoring and test API](https://github.com/koenkk/zigbee-herdsman/raw/master/docs/Z-Stack%20Monitor%20and%20Test%20API.pdf) to communicate with the adapter. 

![](../../.gitbook/assets/image%20%289%29.png)

 Zigbee-herdsman handles the core Zigbee communication. The module [zigbee-herdsman-converters](https://github.com/koenkk/zigbee-herdsman-converters) handles the mapping from individual device models to the Zigbee clusters they support. [Zigbee clusters](https://github.com/Koenkk/zigbee-herdsman/raw/master/docs/07-5123-06-zigbee-cluster-library-specification.pdf) are the layers of the Zigbee protocol on top of the base protocol that define things like how lights, sensors and switches talk to each other over the Zigbee network. Finally, the Zigbee2MQTT module drives zigbee-herdsman and maps the zigbee messages to MQTT messages. Zigbee2MQTT also keeps track of the state of the system. It uses a `database.db` file to store this state; a text file with a JSON database of connected devices and their capabilities.

