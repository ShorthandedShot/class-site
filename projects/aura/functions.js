/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 20000,
	//gap in pixels between the tickers
	gap: 40,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: false,
  startVisible: true
});

$('.marquee2').marquee({
	//duration in milliseconds of the marquee
	duration: 40000,
	//gap in pixels between the tickers
	gap: 40,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'right',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: false,
  startVisible: true
});
