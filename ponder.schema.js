"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferEvent = exports.token = exports.account = void 0;
var ponder_1 = require("ponder");
exports.account = (0, ponder_1.onchainTable)("account", function (t) { return ({
    address: t.hex().primaryKey(),
}); });
exports.token = (0, ponder_1.onchainTable)("token", function (t) { return ({
    id: t.bigint().primaryKey(),
    owner: t.hex().notNull(),
}); });
exports.transferEvent = (0, ponder_1.onchainTable)("transfer_event", function (t) { return ({
    id: t.text().primaryKey(),
    timestamp: t.integer().notNull(),
    from: t.hex().notNull(),
    to: t.hex().notNull(),
    token: t.bigint().notNull(),
}); });
