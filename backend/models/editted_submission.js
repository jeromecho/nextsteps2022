const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EdittedSubmissionSchema = new Schema({
    comment: { type: String, required: true },
    code: { type: String, required: true },
    submission: {type: Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('EdittedSubmission', SubmissionSchema);

