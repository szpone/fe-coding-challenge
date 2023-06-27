import React from 'react';
import Main from './main';
import Header from './header';
import Image from 'next/image';
import GigaclearLogo from '../../../public/assets/logo.svg'

const Layout = ({ children }: any) => {
    return (
        <>
        <Header>
            <Image src={GigaclearLogo} alt="Gigaclear" priority />
        </Header>
        <Main>
            {children}
        </Main>

        </>
    )
}

export default Layout