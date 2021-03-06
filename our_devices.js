    
    {
        zigbeeModel: ['One_Way_In-Wall_Switch'],
        model: 'SLC620-1',
        vendor: 'Owon',
        description: 'Zigbee One_Way_In_Wall_Switch',
        supports: 'on/off',
        fromZigbee: [fz.on_off],
        toZigbee: [tz.on_off],
    },
    
    {
        zigbeeModel: ['Two_Way_In-Wall_Switch'],
        model: 'SLC620-2',
        vendor: 'Owon',
        description: 'Two_Way_In-Wall_Switch',
        supports: 'on/off',
        fromZigbee: [fz.on_off],
        toZigbee: [tz.on_off],
        endpoint: (device) => {
            return {'top': 16, 'bottom': 17};
        },
        meta: {configureKey: 1, multiEndpoint: true},
        configure: async (device, coordinatorEndpoint) => {
            await bind(device.getEndpoint(16), coordinatorEndpoint, ['genOnOff']);
            await bind(device.getEndpoint(17), coordinatorEndpoint, ['genOnOff']);
        },
    },

    {
        zigbeeModel: ['Three_Way_In-Wall_Switch'],
        model: 'SLC620-3',
        vendor: 'Owon',
        description: 'Three_Way_In-Wall_Switch',
        supports: 'on/off',
        fromZigbee: [fz.on_off],
        toZigbee: [tz.on_off],
        endpoint: (device) => {
            return {'top': 16, 'center': 17, 'bottom': 18};
        },
        meta: {configureKey: 1, multiEndpoint: true},
        configure: async (device, coordinatorEndpoint) => {
            for (const ID of [16, 17, 18]) {
                const endpoint = device.getEndpoint(ID);
                await bind(endpoint, coordinatorEndpoint, ['genOnOff']);
                await configureReporting.onOff(endpoint);
            }
        },
    },
    
        // Circuit Breakers
    {
        zigbeeModel: ['CB432'],
        model: 'CB432',
        vendor: 'OWON',
        description: '32A/63A Power Circuit Breaker',
        supports: 'on/off, power measurement',
        fromZigbee: [fz.on_off, fz.metering_power],
        toZigbee: [tz.on_off],
        meta: {configureKey: 1},
        configure: async (device, coordinatorEndpoint) => {
            const endpoint = device.getEndpoint(1);
            await bind(endpoint, coordinatorEndpoint, ['genOnOff', 'seMetering']);
            await configureReporting.onOff(endpoint);
            await readMeteringPowerConverterAttributes(endpoint);
            await configureReporting.instantaneousDemand(endpoint);
        },
    },

    {
        zigbeeModel: ['lumi.switch.n3acn3'],
        model: 'QBKG26LM',
        vendor: 'Xiaomi',
        description: 'Aqara D1 3 gang smart wall switch (with neutral wire)',
        supports: 'on/off',
        fromZigbee:[fz.on_off, fz.QBKG25LM_click, fz.xiaomi_operation_mode_opple, fz.xiaomi_power, fz.xiaomi_power_from_basic],
        toZigbee: [tz.on_off, tz.xiaomi_switch_operation_mode, tz.xiaomi_switch_power_outage_memory, tz.xiaomi_switch_do_not_disturb],
        meta: {configureKey: 1, multiEndpoint: true},
        endpoint: (device) => {
            return {'left': 1, 'center': 2, 'right': 3, 'system': 1};
        },
        configure: async (device, coordinatorEndpoint) => {
            await bind(device.getEndpoint(1), coordinatorEndpoint, ['genOnOff']);
            await bind(device.getEndpoint(2), coordinatorEndpoint, ['genOnOff']);
            await bind(device.getEndpoint(3), coordinatorEndpoint, ['genOnOff']);
            await configureReporting.onOff(device.getEndpoint(1));
            await configureReporting.onOff(device.getEndpoint(2));
            await configureReporting.onOff(device.getEndpoint(3));
        },
        onEvent: xiaomi.prevent_reset,
},
    
        //~ {
        //~ zigbeeModel: ['CB432'],
        //~ model: 'Din_rail_63',
        //~ vendor: 'Owon',
        //~ description: 'Power Circuit Breaker',
        //~ supports: 'on/off',
        //~ fromZigbee: [fz.on_off],
        //~ toZigbee: [tz.on_off],
    //~ },

    {
        zigbeeModel: ['lumi.switch.n3acn3'],
        model: 'QBKG26LM',
        vendor: 'Xiaomi',
        description: 'Aqara D1 3 gang smart wall switch (with neutral wire)',
        supports: 'on/off, action',
        fromZigbee: [fz.on_off, fz.QBKG25LM_click, fz.xiaomi_operation_mode_opple],
        toZigbee: [tz.on_off, tz.xiaomi_switch_operation_mode],
        meta: {multiEndpoint: true},
        endpoint: (device) => {
            return {'left': 1, 'center': 2, 'right': 3};
        },
        onEvent: xiaomi.prevent_reset,
    },
    
    //~ {
        //~ zigbeeModel: ['owvfni3\u0000', 'owvfni3', 'aabybja'],
        //~ fingerprint: [{modelID: 'TS0601', manufacturerName: '_TZE200_5zbp6j0u'}],
        //~ model: 'TS0601_curtain',
        //~ vendor: 'TuYa',
        //~ description: 'Curtain motor',
        //~ whiteLabel: [
            //~ {vendor: 'Yushun', model: 'YS-MT750'},
            //~ {vendor: 'Zemismart', model: 'ZM79E-DT'},
            //~ {vendor: 'Binthen', model: 'BCM100D'},
        //~ ],
        //~ supports: 'open, close, stop, position',
        //~ fromZigbee: [fz.tuya_curtain, fz.ignore_basic_report],
        //~ toZigbee: [tz.tuya_curtain_control, tz.tuya_curtain_options],
    //~ },
    
        {
        zigbeeModel: ['SingleSocket50AU', 'wsp404', 'WSP402', 'WSP406'],
        model: 'AU-A1ZBPIAB',
        vendor: 'Aurora Lighting',
        description: 'Power plug Zigbee EU',
        supports: 'on/off, power measurements',
        fromZigbee: [fz.identify, fz.on_off, fz.electrical_measurement_power],
        toZigbee: [tz.on_off],
        meta: {configureKey: 1},
        configure: async (device, coordinatorEndpoint) => {
            const endpoint = device.getEndpoint(1);
            await bind(endpoint, coordinatorEndpoint, ['genIdentify', 'genOnOff', 'haElectricalMeasurement']);
            await configureReporting.onOff(endpoint);
        },
    },
    
    {
        zigbeeModel: [
            'SMOK_V16',
            'b5db59bfd81e4f1f95dc57fdbba17931',
            '98293058552c49f38ad0748541ee96ba',
            'SMOK_YDLV10',
            'SmokeSensor-EM',
            'FB56-SMF02HM1.4',
            'SmokeSensor-EF-3.0'
        ],
        model: 'HS1SA-M',
        vendor: 'HEIMAN',
        description: 'Smoke detector',
        supports: 'smoke',
        fromZigbee: [
            fz.heiman_smoke,
            fz.battery,
            fz.heiman_smoke_enrolled,

        ],
        toZigbee: [],
        meta: {configureKey: 1},
        configure: async (device, coordinatorEndpoint) => {
            const endpoint = device.getEndpoint(1);
            await bind(endpoint, coordinatorEndpoint, ['genPowerCfg']);
            await configureReporting.batteryPercentageRemaining(endpoint);
        },
    },
	
	{
        zigbeeModel: ['TS0601'],
        model: 'TS0601',
        vendor: 'White-labeled',
        description: 'Zigbee AC dimmer',
        supports: 'on/off, brightness',
        fromZigbee: [fz.tuya_dimmer, fz.ignore_basic_report],
        toZigbee: [tz.tuya_dimmer_state, tz.uzi_dimmer_control],
        meta: {configureKey: 1},
        configure: async (device, coordinatorEndpoint) => {
            const endpoint = device.getEndpoint(1);
            await bind(endpoint, coordinatorEndpoint, ['genOnOff', 'genLevelCtrl']);
        },
    },

    
        {
        zigbeeModel: ['SLC601'],
        model: 'SLC601-E',
        vendor: 'OWON',
        description: 'Remote Relay ',
        supports: 'on/off',
        fromZigbee: [fz.on_off],
        toZigbee: [tz.on_off],
        meta: {configureKey: 1},
        configure: async (device, coordinatorEndpoint) => {
            const endpoint = device.getEndpoint(1);
            await bind(endpoint, coordinatorEndpoint, ['genOnOff']);
            await configureReporting.onOff(endpoint);
        },
    },
	    
    {
        zigbeeModel: ['FNB56-ZCW39GD1.0'],
        model: 'HGZB-06A',
        vendor: 'Nue / 3A',
        description: 'Smart 7W E27 light bulb',
        extend: generic.light_onoff_brightness_colortemp_colorxy,
    },	    

{
        zigbeeModel: ['WarningDevice', 'WarningDevice-EF-3.0', 'SRHMP-I1'],
        model: 'HS2WD-E',
        vendor: 'HEIMAN',
        description: 'Smart siren',
        supports: 'warning',
        fromZigbee: [fz.battery],
        toZigbee: [tz.warning],
        meta: {disableDefaultResponse: true, configureKey: 1},
        configure: async (device, coordinatorEndpoint) => {
            const endpoint = device.getEndpoint(1);
            await bind(endpoint, coordinatorEndpoint, ['genPowerCfg']);
            await configureReporting.batteryPercentageRemaining(endpoint);
        },
    },    

//Owon Touch 3-GANG
    {
        zigbeeModel: [''],
        model: 'SLC628-3',
        description: 'Owon Touch 3-GANG',
        supports: 'on/off',
        fromZigbee: [fz.on_off],
        toZigbee: [tz.on_off],
        meta: {multiEndpoint: true, configureKey: 1},
        endpoint: (device) => {
            return {'left': 18, 'center': 17, 'right': 16};
        },
        configure: async (device, coordinatorEndpoint) => {
            const endpoint1 = device.getEndpoint(18);
            await bind(endpoint1, coordinatorEndpoint, ['genOnOff']);
            await configureReporting.onOff(endpoint1);
            const endpoint2 = device.getEndpoint(17);
            await bind(endpoint2, coordinatorEndpoint, ['genOnOff']);
            await configureReporting.onOff(endpoint2);
	    const endpoint3 = device.getEndpoint(16);
            await bind(endpoint2, coordinatorEndpoint, ['genOnOff']);
            await configureReporting.onOff(endpoint3);
        },
    },
