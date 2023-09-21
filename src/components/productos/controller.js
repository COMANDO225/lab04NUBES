const productos = [
	{
		id: 1,
		nombre: "Laptop",
		precio: 5000,
		cantidad: 10,
	},
	{
		id: 2,
		nombre: "Mouse",
		precio: 100,
		cantidad: 100,
	},
	{
		id: 3,
		nombre: "Teclado",
		precio: 200,
		cantidad: 50,
	},
];

export const findAll = async (req, res) => {
	try {
		res.json({
			ok: true,
			data: productos,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		});
	}
};
