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
import HelpPage from './components/HelpPage/HelpPage.jsx';
import UserInfo from './components/UserInfoPage/UserInfo.jsx';

import OauthRedirectPage from './components/Loginpage/OauthRedirectPage.jsx';
import {CheckoutPage} from "./components/PaymentPage/CheckoutPage.jsx";

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
			<Route path="/checkout" element={<CheckoutPage />} />
			<Route path="/buychatbot" element={<BuyChatbot />} />
			<Route path="/help" element={<HelpPage />} />
			<Route path="/userinfo" element={<UserInfo />} />
		</Route>,
	),
);
