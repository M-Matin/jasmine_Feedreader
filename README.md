# Test Driven Application with Jasmine

This is tiny project with Behavior-Driven JavaScript library [Jasmine](http://jasmine.github.io/2.2/introduction.html) and  I used jasmine for testing this application functions.

### Run the project
Click the following link to see demo https://m-matin.github.io/jasmine_Feedreader

### Run locally
Open your favorite terminal emulator and run
 `git clone https://github.com/M-Matin/jasmine_Feedreader.git`
 open dowloaded folder and run `index.html`

### This is my testing function in `jasmine/spec/feedreader.js`

```javascript
$(function() {


    "use strict";
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('all feeds have URL', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url).not.toBe('');
            }
        });

        it('feeds have name and name is not empty', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name).not.toBe('');
            }
        });

    });



    describe('The menu', function() {
        var hideMenu = $('body').hasClass('menu-hidden');

        it('menu is hidden by default', function() {
            expect(hideMenu).toEqual(true);
        });

        it('menu display when clicked and does it hide when clicked again.', function() {
            var menuIcon = $('.menu-icon-link');



            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });


    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('there is at least a single .entry element within the .feed container.', function() {
            var entryLength = $('.entry').length;
            expect(entryLength).toBeGreaterThan(0);
        });
    });





    describe('New Feed Selection', function() {
        var fisrtFeed, secondFeed;

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
```

### result
![result](https://github.com/M-Matin/jasmine_Feedreader/blob/master/result.png?raw=true)
