# Database

Two types of databases are being used to keep the system up and working under certain conditions including:

* No Internet Access Condition \(i.e. Local Network\)
* Realtime Status Updates
* Remote Access or Mobile App Sync

Databases used are:

* \*\*\*\*[**MongoDB**](https://www.mongodb.com/)**:** No SQL Data used to store Home, Owners and Devices data locally to improve the quality and latency issues. Moreover, it is accessible without internet and let the OS keep running standalone without any issues.

![](../../../.gitbook/assets/image%20%285%29.png)

* \*\*\*\*[**Firebase**](https://firebase.google.com/)**:** Firebase Realtime No SQL database is used to communicate with the angieOS from remote locations with mobile apps and it keeps the data synchronized among all the systems. Each angieOS is marked as a new home in database.

![](../../../.gitbook/assets/image%20%2818%29.png)



