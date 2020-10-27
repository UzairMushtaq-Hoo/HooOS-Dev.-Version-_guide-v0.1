# Devices

Devices are the control-able and actionable end points. Every device has its specific and unique identifier, which is the MAC Address of the hardware in the `HEX` format. 

In the database under the `device` collection, all the devices are listed that have been integrated within a home. Moreover, all the information of device is included in each device document. This information includes some **generic** `Model, Description, Name, Vendor, Rooms, Owner` of the device and **technical** information which includes `fz, lastseen, favorite, powerSource`. 

* **Devices**
  * device-MAC
    * description:
    * favorite: true
    * floor: Floor\_Name
    * fz:
      * battery:
      * linkquality:
      * occupancy:
      * power:
      * voltage:
    * lastseen:
    * manufacturerName:
    * modelID:
    * name:
      * 0:
    * owner: Owner\_Name
    * powerSource:
    * room: Room\_Name
    * selected: true
    * vendor: Vender\_Name

Here, **fz** is the data, that a device sends to the angieOS which may include battery, power and many more items, **lastseen** is the data about the time at which last action/sense performed by the device and **favourite** keeps the info whether the device is added to favorites by the user or not. A sample device data in FireStore is shown below:

![](../../../../../.gitbook/assets/image%20%2823%29.png)

