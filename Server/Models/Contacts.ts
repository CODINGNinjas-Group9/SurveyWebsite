/*  File Descripton :-  Contacts.ts File-  Contacts schema 
    Website Name :- Survey Ninjas
      Team Name :- CodingNinjas

        Anureet Kaur - 301174444
        Mridula Ramakrishnan - 301145813
        Muhammad Hassan - 301178235
        Nilam Keshwala - 301042029
        Raghuveer Manam - 300715775
        Roshna Raju - 301174285

        Date: 04th August  2021
*/

import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the mongoose schema

const ContactsSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    contactNumber: String,
    emailAddress: String,
    inputMessage: String,
  },
  {
    collection: "contacts",
  }
);

const Model = mongoose.model("contact", ContactsSchema);
export default Model;
