/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

/**
 * Events Global
 */
const EVENTS = {};


/**
 * Events for ScrollContainer
 */
EVENTS.scrollContainer = {
	updateMeta: 'scrollContainer:updateMeta',
};


/**
 * Events for ScrollItem
 */
EVENTS.scrollItem = {
	eventName: 'scrollItem:eventName'
};


/**
 * Events for Logo
 */
EVENTS.logo = {
	eventName: 'logo:eventName'
};


/**
 * Events for Navigation
 */
EVENTS.navigation = {
	eventName: 'navigation:eventName'
};


/**
 * Events for Pagination
 */
EVENTS.pagination = {
	eventName: 'pagination:eventName'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;
