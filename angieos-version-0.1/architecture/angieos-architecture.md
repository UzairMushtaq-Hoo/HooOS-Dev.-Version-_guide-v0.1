# angieOS Architecture

angieOS has several components. Each component is responsible for a specific task. 

![angieOS Architecture](../../.gitbook/assets/image%20%283%29.png)

* **angieOS Core:** is the main controller / driver for each other component.
* **Database:** Multiple databases are being used to store device statuses, Owners and Configuration settings.
* **MQTT Broker:** Locally deployed MQTT Broker running on local IP.
* **Protocol Parser:** A parser script/module to decrypt ZigBee, Wifi, Zwave packets data and publish them to MQTT broker. 
* **HW Interface:** A supported hardware adapter or interface to sniff specific protocol data and inject data to the system via serially or through a network.

