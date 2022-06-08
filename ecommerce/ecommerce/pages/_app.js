import '../styles/globals.css'
import { Layout } from "../components";
import { StateContext} from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext> {/* pass the data from StateContext to every conponent */}
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )

}

export default MyApp
