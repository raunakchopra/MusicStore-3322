const mongoose = require('mongoose');

class Music {
    constructor() {
        const MusicSchema = new mongoose.Schema({
            name: String,
            category: String,
            composer: String,
            description: String,
            price: Number,
            published: Number,
            new_arrival: Boolean,
        }, { timestamps: true });

        this.model = mongoose.model('Music', MusicSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Music;
