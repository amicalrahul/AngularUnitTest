describe('omdb service', function() {
	var movieData = {"Search":[{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie"},{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","imdbID":"tt0080684","Type":"movie"},{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","imdbID":"tt0086190","Type":"movie"},{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","imdbID":"tt0120915","Type":"movie"},{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","imdbID":"tt0121766","Type":"movie"},{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","imdbID":"tt0121765","Type":"movie"},{"Title":"Star Wars: The Clone Wars","Year":"2008","imdbID":"tt1185834","Type":"movie"},{"Title":"Star Wars: The Clone Wars","Year":"2008–2015","imdbID":"tt0458290","Type":"series"},{"Title":"Star Wars: Clone Wars","Year":"2003–2005","imdbID":"tt0361243","Type":"series"},{"Title":"The Star Wars Holiday Special","Year":"1978","imdbID":"tt0193524","Type":"movie"}]};
	var movieDataById = {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 38 wins & 27 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg","Metascore":"92","imdbRating":"8.7","imdbVotes":"764377","imdbID":"tt0076759","Type":"movie","Response":"True"};
	var omdbApi = {};


	it('should return search movie data', function() {

// define module using mock.module here only
 // inject basically finds and instantiate the apis or services created in the module

		angular.mock.module(function($provide) {
			$provide.factory('omdbApi', function() {
				return {
					search: function(query) {
						return movieData;
					}
				}
			});
		});

		angular.mock.inject(function (_omdbApi_) {
			omdbApi = _omdbApi_;
		})
		expect(omdbApi.search('star wars')).toEqual(movieData);
	});

//if we remove the defination and creation of modules and services in each 
//unit test separately and want to use the same code for ech unit test then 
// beforeEach is used as shown below:
	// beforeEach(module('omdb'));

	// beforeEach(inject(function(_omdbApi_) {
	// 	omdbApi = _omdbApi_;
	// }));
	it('should return movie data by id', function() {

 // define module in service.js file
 // using its string alias in the mock.module function
 // inject basically finds and instantiate the apis or services created in the module
		angular.mock.module ('omdb');
		angular.mock.inject(function (_omdbApi_) {
			omdbApi = _omdbApi_;
		})
		expect(omdbApi.find('tt0076759')).toEqual(movieDataById);
	});
});