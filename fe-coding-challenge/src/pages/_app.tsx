import Layout from "@/components/layout";

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;