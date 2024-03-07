import React from 'react'

const Button = ({ className, children, handleClick }) => {
    return (
        <button
            type='button'
            className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button