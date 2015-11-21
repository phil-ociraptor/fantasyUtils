// DraftingUI        http://basketball.fantasysports.yahoo.com/nba/82282/8/startactiveplayers?date=2015-11-04&crumb=Ufvg4JhrAQq
// 					 startPlayersForMonth('http://basketball.fantasysports.yahoo.com/nba/82282/8/startactiveplayers', 'Ufvg4JhrAQq', 2015, 12)

// The Daryl Moreys: http://basketball.fantasysports.yahoo.com/nba/137792/3/startactiveplayers?date=2015-11-01&crumb=Ufvg4JhrAQq
// 					 startPlayersForMonth('http://basketball.fantasysports.yahoo.com/nba/137792/3/startactiveplayers', 'Ufvg4JhrAQq', 2015, 12)

//TODO: To truly genealize, add support for request headers and cookies, also parameterize
// league id and team id

/**
 * A method to fire off startactiveplayers request to the Yahoo Fantasy Basketball API
 * To use, one must be logged in to their Yahoo sports account.
 *
 * Easiest way to use is to:
 * 1) copy+paste all functions into the browser's console.
 * 2) Open up the network tab to see all requests.
 * 3) Manually press start active players.
 * 4) Take note of the url of the request and the crumb
 * 5) Pass url, crumb and a year and month of your choosing to startPlayersForMonth
 * 6) Sit back and relax because you just started your players for an entire month
 *
 * Don't forget to run this script after every roster change. Also, make sure that
 * you start your best players on days when 10+ players have games.
 *
 * @param {string} url   - the start players url. For example:
 * 						   http://basketball.fantasysports.yahoo.com/nba/82282/8/startactiveplayers
 * @param {string} crumb - the crumb query parameter (find it in the network call)
 * @param {number} year  - the year of the month you want
 * @param {number} month - the month you want to start players for
 */
function startPlayersForMonth(url, crumb, year, month) {
	for (var day = 0; day < 32; day++) {
		startPlayersOn(url, crumb, formatDate(year, month, day));
	}
	var requestUrl = url + '?' +  + '&' + 'date='
}

/* Public Helper Methods */

function formatDate(year, month, day) {
	var twoDigitDay = day < 10 ? '0' + day : day;
	var twoDigitMonth = month < 10 ? '0' + month : month;
	return [year, twoDigitMonth, twoDigitDay].join('-');
}

function startPlayersOn(url, crumb, date) {
	var crumbParam = 'crumb=' + crumb;
	var dateParam = 'date=' + date;
	var urlWithParams = url + '?' + dateParam + '&' + crumbParam;
	var apiRequest = new XMLHttpRequest();

	apiRequest.open('GET', urlWithParams);
	apiRequest.send();
}