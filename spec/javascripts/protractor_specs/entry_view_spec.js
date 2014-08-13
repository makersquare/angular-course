describe('Entry View Spec', function() {
    it('should be able to find the rails test server', function(done) {
        browser.get('/#/');
        expect(browser.getTitle()).toEqual('Mks Angular Course');

        // types into input
        var newEntrymodel = by.model('newEntry.name')

        element(newEntrymodel).sendKeys('hello');

        expect(element(newEntrymodel).getAttribute('value')).toEqual('hello');

        done()
    })
});
