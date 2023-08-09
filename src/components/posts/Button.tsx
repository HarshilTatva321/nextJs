const Button = ({ children, onClick }: { children: React.ReactNode, onClick: (e?: any) => void }) => {
    return (
        <button
            className="common-button"
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;