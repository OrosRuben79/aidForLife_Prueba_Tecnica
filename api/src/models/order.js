const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Producto'
    },

  ],
  typeOrder: {
    type: String,
    required: true,
    enum: ["LOCAL", "DELIVERY", "RESERVATION"],
  },
  table: {
    type: Number,
  },
  address: {
    type: String,

  },
  stateOrder: {
    type: String,
    enum: ["FINISH", "IN PROCESS", "REJECT"],
    default: "IN PROCESS",
  },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
	// valuePaid: {
	// 	type: Number,
	// },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = model("Order", OrderSchema);
