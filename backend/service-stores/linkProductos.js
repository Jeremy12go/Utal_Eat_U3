const mongoose = require('mongoose');
const Product = require('./models/Product'); // ajusta la ruta si es diferente
const Store = require('./models/Store');

mongoose.connect('mongodb://localhost:27017/stores_db');

(async () => {
    try {
        // Lista de tus IDs personalizados
        //Mcdonalds
        //const codigos = ["mc001", "mc002", "mc003", "mc004", "mc005"];
        //KFC
        //const codigos = ["kfc001", "kfc002", "kfc003", "kfc004", "kfc005"];
        //Insert Coin
        //const codigos = ["ic001", "ic002", "ic003", "ic004", "ic005"];
        //Papa Johns
        //const codigos = ["pj001", "pj002", "pj003", "pj004", "pj005"];
        //Doggis
        const codigos = ["dg001", "dg002", "dg003", "dg004", "dg005"];
        // Buscar productos con esos IDs personalizados
        const productos = await Product.find({ id: { $in: codigos } });

        if (productos.length === 0) {
            console.log("⚠️ No se encontraron productos con esos IDs");
            return mongoose.disconnect();
        }

        const productosIds = productos.map(p => p._id);

        // Agregar los productos encontrados a la tienda
        /*
        await Store.findOneAndUpdate(
            { id: "store1" },
            { $push: { productsList: { $each: productosIds } } }
        );
         */
        //AQUI CAMBIA LA ID A LA TIENDA QUE CORRESPONDE, SINO QUEDA MAL ENLAZADO
        await Store.findOneAndUpdate(
            { id: "store5" },
            { $push: { productsList: { $each: productosIds } } }
        );

        console.log("✅ Productos enlazados correctamente a la tienda");
    } catch (err) {
        console.error("❌ Error al enlazar productos:", err.message);
    } finally {
        mongoose.disconnect();
    }
})();
