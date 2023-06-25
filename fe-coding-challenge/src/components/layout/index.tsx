import React from 'react';
import Main from './main';
import Header from './header';
import Image from 'next/image';
import GigaclearLogo from '../../../public/assets/Vector.svg'

const Layout = () => {
    return (
        <>
        <Header>
            <Image src={GigaclearLogo} alt="Gigaclear" priority />
        </Header>
        <Main />

        </>
    )
}

export default Layout