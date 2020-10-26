# angieOS Core

angieOS Core is the brain and collaborator of all services and other components. It is responsible for Home Control System as explained in Home Automation basic architecture. angieOS Core contains six main parts which make this possible:

* **Event Bus**: It allows the firing and listening of events, that keeps track of device status.
* **Device Identification**: Identification of devices through device name and model and comparing them to a local supported devices database. Moreover, Registration of devices under a specific room, floor, owner and a home or building
* **Services:**  
  * **WiFi** service controls the connection, status, enabling and disabling the WiFi service.
  * **Devices** service keeps tracks of all the devices integrated with the system including its name and belonging.
  * **Rooms** service keeps the record of all the rooms created under specific floor and owner.
  * **Floors** service allows user to add, remove multiple floors belonging to a specific owner.
  * **Sync DB** service use to check all the changes in both local DB and Cloud and keep them synchronized.
  * **Bots** allows the user to create automations by grouping different devices, device bindings, scheduling etc.
  * **MQTT Client,** To check the mqtt events on the Event Bus and to publish or change the device state/status.
*  **User Commands/Interface**: It allows user to sends commands or see device status.

![](../../../.gitbook/assets/image%20%2821%29.png)

