//const { default: config } = require("../eslint.config.mjs");

/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: "12",
	units: "imperial",

	modules: [
		{
			module: "clock",
			position: "top_left",
			config: {
				timeZone:"America/New_York"
			}
		},
		{
			module: "clock",
			position: "top_left",
			header: "India",
			config: {
				timezone: "Asia/Kolkata"
			}
		},  
        {
			module: "calendar",
			header: "Birthdays",
			position: "top_center",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000, // Weekly fetch
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/pinehillalexa%40gmail.com/private-d66054581dafbbcf78d5fb2424fba15e/basic.ics"
                    }
				]
                
			}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_right",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000, // Weekly fetch
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			
    		module: "MMM-MonthlyCalendar",
    		position: "top_center",
    		config: { // See "Configuration options" for more information.
      			//can change the view//
    		}
		},
		{
			module: "weather",
			position: "bottom_left",
			config: {
				type: "current",
                weatherProvider: "openmetro",
				locationID: "5096699"
			}
		}
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openmeteo",
		// 		type: "forecast",
				
		// 	}
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
