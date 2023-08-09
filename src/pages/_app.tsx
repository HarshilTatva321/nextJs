import RootLayout from "../app/layout";
import '../styles/custom.css';

export default function MyApp({ Component, pageProps }: any) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}