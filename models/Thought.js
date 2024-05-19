const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        min_length:1,
        max_length: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => new Date(timeStamp).toLocaleString(),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
       
        virtuals: true,
      },
      id: false,
    }
  );

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
  