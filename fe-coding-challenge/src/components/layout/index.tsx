import React from 'react';
import Main from './main';
import Navbar from './navbar';
import Image from 'next/image';
import GigaclearLogo from '../../../public/assets/logo.svg'

const Layout = ({ children }: any) => {
    return (
        <>
        <Navbar>
            <Image src={GigaclearLogo} alt="Gigaclear" priority />
        </Navbar>
        <Main>
            {children}
        </Main>

        </>
    )
}

export default Layout