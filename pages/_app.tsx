import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Login from "../components/Login";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
