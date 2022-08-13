const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubmissionSchema = new Schema({
    student: {type: Schema.Types.ObjectId, required: true },
    language: { type: String, required: true },
    date_made: { type: Date, required: true },
    comment: { type: String, required: true },
});

module.exports = mongoose.model('Submission', SubmissionSchema);

