import React from 'react'
import { Helmet } from 'react-helmet';

export default function Layout({title, children}) {

    return (
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <main className="container-main">
                {children}
            </main>
        </div>
    );
}