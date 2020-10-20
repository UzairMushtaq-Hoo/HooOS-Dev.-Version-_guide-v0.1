# Hardware Interface

A hardware adapter or interface is used to sniff specific protocol data on a specific frequency and channel, and inject data to the system via serially or through a network.

### Zigbee Hardware Adapter:

As we are using Zigbee2MQTT as a protocol parser, so Zigbee2MQTT supports the following adapters:

#### Texas Instruments CC2531

![CC2531](https://www.zigbee2mqtt.io/images/cc2531.jpg)

* USB connected Zigbee adapter with PCB antenna.
* Cheap but not very powerful \(+- $5\), may not be powerfull enough for larger networks \(20+ devices\).
* Limited range, ~30m line of sight
* Requires additional hardware to be flashed \(CC debugger and downloader cable\)
* Coordinator firmware: [Zigbee 1.2 \(recommended\)](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin) and [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin)
* Router firmware: [Zigbee 1.2](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/CC2531/bin), can be re-paired pressing the S2 button for 5 seconds.
* Can be bought on [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=cc2531)
* [How to flash with CC debugger](https://www.zigbee2mqtt.io/information/flashing_the_cc2531.html) or [alternative flashing methods](https://www.zigbee2mqtt.io/information/alternative_flashing_methods.html)

#### Slaesh’s CC2652RB stick

![slaesh&apos;s CC2652RB stick](https://www.zigbee2mqtt.io/images/slaeshs_cc2652rb_stick.jpg)

* USB connnected Zigbee adapter
* **Very powerful**, will easily handle networks of 100+ devices.
* Very good range \(due to external antenna, SMA female connector\)
* Can be bought on [Tindie](https://www.tindie.com/products/slaesh/cc2652-zigbee-coordinator-or-openthread-router/#product-reviews)
* Coordinator firmware: [Zigbee 3.0](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin) \(use **CC2652RB\_\*.zip**\)
* [Flashing guide](https://slae.sh/projects/cc2652/#flashing) \(requires no additional hardware to flash\)
* When migrating from another dongle \(e.g. CC2531\), make sure to modify your `pan_id` in your [configuration](https://www.zigbee2mqtt.io/information/configuration.html), otherwise Zigbee2MQTT won’t start.



