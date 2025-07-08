const mongoose = require('mongoose');
const Product = require('./models/Product'); // ajusta la ruta si es diferente
const Store = require('./models/Store');

mongoose.connect('mongodb://localhost:27017/stores_db');

(async () => {
    try {
        // Lista de tus IDs personalizados
        const codigos = ["mc001", "mc002", "mc003", "mc004", "mc005"];

        // Buscar productos con esos IDs personalizados
        const productos = await Product.find({ id: { $in: codigos } });

        if (productos.length === 0) {
            console.log("⚠️ No se encontraron productos con esos IDs");
            return mongoose.disconnect();
        }

        const productosIds = productos.map(p => p._id);

        // Agregar los productos encontrados a store1
        await Store.findOneAndUpdate(
            { id: "store1" },
            { $push: { productsList: { $each: productosIds } } }
        );

        console.log("✅ Productos enlazados correctamente a store1");
    } catch (err) {
        console.error("❌ Error al enlazar productos:", err.message);
    } finally {
        mongoose.disconnect();
    }
})();
