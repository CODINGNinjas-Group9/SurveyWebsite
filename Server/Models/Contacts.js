"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactsSchema = new Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    emailAddress: String,
    inputMessage: String,
}, {
    collection: "contacts",
});
const Model = mongoose_1.default.model("contact", ContactsSchema);
exports.default = Model;
//# sourceMappingURL=Contacts.js.map