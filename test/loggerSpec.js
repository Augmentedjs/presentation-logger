describe("Given a color logger", () => {
	let logger = null;
	beforeEach(() => {
		logger = new Logger.ColorConsoleLogger();
	});

	afterEach(() => {
		logger = null;
	});

	it("can request a logger", () => {
		expect(logger).to.not.be.undefined;
	});

	it("can log info", () => {
		const m = logger.info("xx");
		expect(m).to.not.equal("");
	});

	it("can log debug", () => {
		const m = logger.debug("xx");
		expect(m).to.not.equal("");
	});

	it("can log warn", () => {
		const m = logger.warn("xx");
		expect(m).to.not.equal("");
	});

	it("can log an object", () => {
		const m = logger.log({ "name": "Bob" });
		expect(m).to.not.equal("");
	});

	it("can log multiple object", () => {
		const m = logger.log({ "name": "Bob" }, { "planet": "Mars" });
		expect(m).to.not.equal("");
	});

	it("can log multiple objects with string labels", () => {
		const m = logger.log("Labels", { "name": "Bob" }, { "planet": "Mars" });
		expect(m).to.not.equal("");
	});
});
