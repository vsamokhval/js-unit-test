describe("Hello", function() {
	it("says hello to receiver", function() {
		expect(sayHello('Jane')).toBe("Hello, Jane!");
		//expect(sayHello()).toBe("Hello, world");
	});
});