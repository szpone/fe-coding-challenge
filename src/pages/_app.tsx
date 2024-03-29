import Layout from "@/components/layout";

const App = ({ Component, pageProps }: any) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App;