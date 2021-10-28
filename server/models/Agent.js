const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const agentSchema = new Schema({
  agentName: {
    type: String,
    required: true,
  },

  client: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
  },
});
const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
