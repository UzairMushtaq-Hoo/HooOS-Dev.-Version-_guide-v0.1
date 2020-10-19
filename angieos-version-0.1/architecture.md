# Architecture

### Home Automation Brief Introduction

Before we dive into the angieOS architecture, let's get a clear overview of the home automation landscape as a whole. This way, we can show how the different parts of angieOS fit into the picture.

![Home Automation Architecture](../.gitbook/assets/image%20%281%29.png)

### angieOS Architecture

angieOS has several components. Each component is responsible for a specific task. 

![](../.gitbook/assets/image%20%283%29.png)

* **angieOS Core:** is the driver for each other component.
* **Database:** Multiple databases are being used to store device statuses, Owners and Configuration settings.
* **MQTT Broker:** Locally deployed MQTT Broker running on local IP.
* **Protocol Parser:** A parser script/module to decrypt ZigBee, Wifi, Zwave packets data and publish them to MQTT broker. 
* **HW Interface:** A supported hardware adapter or interface to sniff specific protocol data and inject data to the system via serially or through a network.

