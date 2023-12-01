export default function NavHeader() {

    const NavButton = ({label}: {label: string}) => {
        return <a href="" className="hover:shadow-md border border-white hover:border-gray-100 transition-all w-32 py-3 rounded hover:rounded-lg text-center">{label}</a>
    }

    const NavSignIn = () => {
        return (
            <a href="" className="bg-blue-400 text-white hover:shadow transition-all px-8 py-3 rounded-md">Sign In</a>
        )
    }

    return (
        <header className="flex flex-row justify-between self-start mx-20 my-14">
            <div className="bg-blue-200 w-40">
                <p>logo</p>
            </div>
            <div>
                <ul className="flex flex-row gap-2">
                    <NavButton label="Home"/>
                    <NavButton label="Products"/>
                    <NavButton label="About Us"/>
                    <NavButton label="Blogs"/>
                    <NavButton label="Contact us"/>
                    <NavButton label="Login"/>
                    <NavSignIn />
                </ul>
            </div>
        </header>
    )
}