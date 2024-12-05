const Nav = ({btnName}) => {
    return (
        <>
        <button className="border-b border-transparent hover:border-b hover:border-b-black duration-700">
            {btnName}
        </button>
        </>
    );
};

export default Nav;