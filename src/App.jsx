import { MainLayout } from "./layouts/MainLayout";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
	return (
		<MainLayout className={"text-slate"}>
			<AppRouter />
		</MainLayout>
	);
};
