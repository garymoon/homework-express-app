'use strict'

const assert = require('node:assert');
const { after, describe, it } = require('node:test');

const { server } = require("./index.js");

const serverURL = "http://localhost:3000";

describe('The webserver', async () => {
    it('should return an HTML document at /', async () => {
        const res = await fetch(serverURL, { "method": "GET" });

        assert.match(res.headers.get("content-type")||"", /^text\/html/);
    });

    it('should return a 200 at /a', async () => {
        const res = await fetch(`${serverURL}/a`, { "method": "HEAD" });

        assert.strictEqual(res.status, 200);
    });

    it('should return a 404 at /b', async () => {
        const res = await fetch(`${serverURL}/b`, { "method": "HEAD" });

        assert.strictEqual(res.status, 404);
    });

    after(() => { server.close() });
});
