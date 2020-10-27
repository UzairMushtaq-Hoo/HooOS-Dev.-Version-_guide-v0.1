# FireStore Database Structure



**Cloud Firestore** is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud Platform products, including Cloud Functions.

Let's start with angieOS DB Structure, the main collection in the database is `Home` , all the information of Floors, Rooms, Owners, Devices and other info in that specific Home is stored in a structured way.

First of all, have a glance on the overall structure of whole DB structure below:

### **Home**

* Floors

  > Floor\_Name
  >
  >
  >
  > * Floor
  >   * 0: 'Floor\_Name'
  >   * 1: 'Floor\_Identifier'

* Rooms
  * Floor\_Name
    * Owner\_Name,Room\_Type: true
* Owners
  * Owner\_Name
    * name: 'Owner\_Name'
* Devices
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
* Bots
  * deviceMAC+Bot-Name
    * active:
      * deactivate
    * if:
      * 0: 'device-MAC'
      * 1:contact
      * 2:true
    * then:
      * 0: 'device-MAC'
      * 1:contact
      * 2:true

