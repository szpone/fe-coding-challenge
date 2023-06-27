import React from 'react'

interface Props {
    text: string;
}

const Header = ({ text }: Props) => {
    return (
        <h1>
            {text}
        </h1>
    )
}

export default Header;