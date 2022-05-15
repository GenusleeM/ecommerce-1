import './NavBarDropdown.css'

const NavBarDropdown = (props) => {
    return (
        <nav className='NavBarDropdown'>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

export default NavBarDropdown