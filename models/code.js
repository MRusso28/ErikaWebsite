const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idNumber: Number,
  DOB: String,
  codes: [{
    codeTime: String,
    codeText: String,
    codeType: String,
    originalCodeText: String
  }],
  familyNotified: Boolean,
  patientDeceased: Boolean,
  cprPerformed: Boolean,
  transferredTo: String,
  signatures: [String],
  notes: String
});

module.exports = mongoose.model('Code', codeSchema);
