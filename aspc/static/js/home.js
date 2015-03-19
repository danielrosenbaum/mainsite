// ASPC namespace
var ASPC = ASPC || {};

/**
 * @module
 * @description Methods for the homepage widgets
 */
ASPC.home = function () {
	/**
	 * @private
	 */
	var my = {
		self: this
	};

	/**
	 * @public
	 * @description Aggregates the initialization for all the homepage widgets
	 */
	my.self.init = function () {
		ASPC.Events.init();
	};

	return my.self;
};

/**
 * @module
 * @description Methods for the Today's Events widget
 */
ASPC.events = function () {
	/**
	 * @private
	 */
	var my = {
		self: this
	};

	/**
	 * @public
	 * @description Binds the appropriate event handlers based on whether using desktop or mobile
	 */
	my.self.init = function () {
		// Bind listeners to the event_info elements to update the event description div when clicked
		if ($(window).width() > 767) { // Using the desktop site...
			$('.event_info').on('click', my.self.update_event_description);

			// Initializes the events_description panel
			$($('.event_info')[0]).trigger('click');
		}
		else { // Using the mobile site
			$('.event_info').on('click', my.self.go_to_event);
		}
	};

	/**
	 * @public
	 * @description Updates the event description with the deatils of the event that is active
	 */
	my.self.update_event_description = function (event) {
		// The event_info div that was clicked
		var event_info = $(event.currentTarget).children('aside');

		// Updates the events_description panel with the appropriate information
		if ($('.event_info').length < 2) {
			$('#events_description_title').html(event_info.children('h3').html());
			$('#events_description_host').html('');
			$('#events_description_location').html('');
			$('#events_description_description').html(event_info.children('p.description').html().slice(0, 50) + '... ' + event_info.children('p.more_link').html());
		}
		else {
			$('#events_description_title').html(event_info.children('h3').html());
			$('#events_description_host').html('<b>Host:</b> ' + event_info.children('p.host').html());
			$('#events_description_location').html('<b>Location:</b> ' + event_info.children('p.location').html());
			$('#events_description_more_link').html(event_info.children('p.more_link').html());

			// Checks the number of events today so as to know how much space is available to display long descriptions
			var description_text = event_info.children('p.description').html();
			switch ($('.event_info').length) {
				case 2:
					if (description_text.length > 150) {
						$('#events_description_description').html(description_text.slice(0, 150) + '...');
					}
					else {
						$('#events_description_description').html(description_text);
					}
					break;
				case 3:
					if (description_text.length > 300) {
						$('#events_description_description').html(description_text.slice(0, 300) + '...');
					}
					else {
						$('#events_description_description').html(description_text);
					}
					break;
				case 4:
					if (description_text.length > 450) {
						$('#events_description_description').html(description_text.slice(0, 450) + '...');
					}
					else {
						$('#events_description_description').html(description_text);
					}
					break
				default:
					$('#events_description_description').html(description_text);
					break;
			}
		}

		// Removes the active marker from the old event
		$('#events_list').find('li').removeClass('active');

		// Sets the new event as active
		event_info.parents('li').addClass('active');
	};

	/**
	 * @public
	 * @description Opens the full event page when an event is clicked (only on mobile)
	 */
	my.self.go_to_event = function (event) {
		// The event_info div that was clicked
		var event_info = $(event.currentTarget).children('aside');

		window.location.href = event_info.find('a').attr('href');
	};

	return my.self;
};

ASPC.Events = new ASPC.events();
ASPC.Home = new ASPC.home();

$('document').ready(ASPC.Home.init);