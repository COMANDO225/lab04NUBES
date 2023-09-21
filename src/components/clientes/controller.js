const clientes = [
	{
		id: 1,
		nombre: "Anderson",
		apellido: "Almeyda",
	},
	{
		id: 2,
		nombre: "Evelyn",
		apellido: "Blas",
	},
	{
		id: 3,
		nombre: "Profe",
		apellido: "Teobaldo",
	},
];

export const findAll = async (req, res) => {
	try {
		res.json({
			ok: true,
			data: clientes,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		});
	}
};
