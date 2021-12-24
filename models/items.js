const db = require('../models/conn');

class Item {

    constructor(id, name, unq, inventory) {
        this.id = id;
        this.name = name;
        this.unq = unq;
        this.inventory = inventory;

    }

    
    static inventoryChange(itemid, qty) {
        // needs to remove/add inventory to specific item
        console.log(`This is itemid: ${itemid}`);
        return db.result(`
        UPDATE tablets
        SET inventory = inventory + ${qty}
        WHERE id=${itemid}
        `)
        
    }
    
    
}

module.exports = Item;