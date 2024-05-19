const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

  },

  {
    toJSON: {
        getters: true,
    },
    id: false,
}
);

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

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});


module.exports = Thought;
  