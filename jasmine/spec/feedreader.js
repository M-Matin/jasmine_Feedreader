/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    "use strict";
    describe('RSS Feeds', function() {
        /* This is our wq - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all feeds have URL', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url).not.toBe('');
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('feeds have name and name is not empty', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name).not.toBe('');
            }
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var hideMenu = $('body').hasClass('menu-hidden');

        it('menu is hidden by default', function() {
            expect(hideMenu).toEqual(true);
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu display when clicked and does it hide when clicked again.', function() {
            var menuIcon = $('.menu-icon-link');

            /* TODO: Write a test that ensures the menu changes
             * visibility when the menu icon is clicked. This test
             * should have two expectations: does the menu display when
             * clicked and does it hide when clicked again.
             */

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('there is at least a single .entry element within the .feed container', function(done) {
            var entryLength = $('.feed .entry')[0];
            expect(entryLength).toBeGreaterThan('');
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/

    describe('New Feed Selection', function() {
        var fisrtFeed, secondFeed;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done) {
            loadFeed(1, function() {
                fisrtFeed = $('.feed').html();
                loadFeed(2, function() {
                    done();
                });
            });
        });


        afterEach(function() {
            loadFeed(0);
        });


        it('new feed is loaded by the loadFeed function and the content actually changes.', function() {
            expect(fisrtFeed).toBeDefined();
            secondFeed = $('.feed').html();
            expect(secondFeed).toBeDefined();
            expect(fisrtFeed).not.toEqual(secondFeed);
        });
    });

}());
