import { clientesRouter, productosRouter } from "../components";

const listRoutes = [
	["/clientes", clientesRouter],
	["/productos", productosRouter],
];

export const routes = (app) => {
	listRoutes.forEach(([path, controller]) => {
		app.use(path, controller);
	});
};
