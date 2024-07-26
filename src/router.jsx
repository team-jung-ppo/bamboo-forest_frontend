import { UnknownErrorBoundary } from './errors/UnknownErrorBoundary.jsx';
import {
	Outlet,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Loginpage } from './components/Loginpage';
import { ChattingPage } from './components/ChattingPage/index.jsx';
import BuyBattery from './components/PaymentPage/BuyBattery.jsx';
import BuyChatbot from './components/PaymentPage/BuyChatbot.jsx';

import OauthRedirectPage from './components/Loginpage/OauthRedirectPage.jsx';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			component={
				<UnknownErrorBoundary>
					<Outlet />
				</UnknownErrorBoundary>
			}
		>
			<Route path="/login" element={<Loginpage />} />
			<Route path="/redirect" element={<OauthRedirectPage />} />
			<Route path="/chatting" element={<ChattingPage />} />
			<Route path="/paybattery" element={<BuyBattery />} />
			<Route path="/buychatbot" element={<BuyChatbot />} />
		</Route>,
	),
);
