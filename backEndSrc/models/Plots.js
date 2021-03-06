const mongoose = require('mongoose');

const PlotSchema = new mongoose.Schema({
	height: Number,
	width: Number,
	title: String,
	subPlot: [Object],
});

const Plots = mongoose.model('Plot', PlotSchema);

module.exports = Plots;
