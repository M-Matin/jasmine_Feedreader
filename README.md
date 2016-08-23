# Test Driven Application with Jasmine

This is tiny project with Behavior-Driven JavaScript library [Jasmine](http://jasmine.github.io/2.2/introduction.html) and  I used jasmine for testing this application functions.

### This is my testing function in `jasmine/spec/feedreader.js`

```javascript
$(function() {

    "use strict";
    describe('RSS Feeds', function() {

        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('All feeds have URL', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url).not.toBe('');
            }
        });


        it('Feeds have name and name is not empty', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name).not.toBe('');
            }
        });

    });
```

```javascript

    describe('The menu', function() {
        var icon;

        beforeEach(function() {
            icon = $('.menu-icon-link');
        });



        it('Menu element is hidden by default.', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });



        it('Menu display when clicked and does it hide when clicked again.', function() {
            if ($("body").hasClass("menu-hidden")) {
                icon.click();

                expect($("body").hasClass("menu-hidden")).toBe(false);
            }

            if (!$("body").hasClass("menu-hidden")) {
                icon.click();

                expect($("body").hasClass("menu-hidden")).toBe(true);
            }
        });
    });
```
```javascript

    describe('Initial Entries', function() {
        var entries;

        beforeEach(function(done) {
            loadFeed(0, (function() {
                entries = $(".feed").html();
            }));

            done();
        });

        it('are present', function() {
            expect(entries).not.toBe(null);
        });
    });
```
```javascript

    describe('New Feed Selection', function() {
        var entries;

        beforeEach(function(done) {
            loadFeed(1, (function() {
                entries = $(".feed").html();
            }));

            done();
        });

        it('when a new feed is loaded content actually changes', function(done) {
            loadFeed(2, done);

            expect($(".feed").html()).not.toEqual(entries);
        });
    });
}());
```
