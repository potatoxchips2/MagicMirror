/*
 * Default Modules List
 * Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.
 */
const defaultModules = ["alert", "calendar", "clock", "compliments",]
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
