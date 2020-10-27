# Bots



Bots are the automation or the linkages between devices created by the user according to his/her needs. 

Under a bot collection in a single Home, there is a list of all the bots created/added by the user. The convention of naming the bots in DB is the combination of IF device MAC \(the device that will be observed for change\) and the Bot Name i.e, `'IF_device_MAC' + 'Bot_Name'`.

Each Bot document contains some information about the automation which includes:

* `active` that shows the status either the automation is enabled or disabled.
* `if` is the information about IF device \(under observation device\). It contains the MAC of that device and the information about actions or sensing.
* `then` contains the information about the second device that is actionable on the basis of first device. It also contains the device MAC and the info about the action to be performed.

![](../../../../../.gitbook/assets/image%20%2825%29.png)

