import React from 'react';
import Head from "next/head";
import {NextPage} from "next";

type LayoutProps = {
    title: string
}

const Layout = () => {
    return (
        <div>
            <Head>
                <title>{'Abogado Berrios'}</title>
            </Head>
            <main>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Layout;
