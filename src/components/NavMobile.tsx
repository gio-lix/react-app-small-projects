import {navigationData} from "../helper/data";

const NavMobile = () => {
    // const {} = nav
    return (
        <ul className="flex justify-center items-center flex-col gap-y-4 px-6 py-8">
            {navigationData.map((item, index) => (
                <li key={index}>
                    <a className="text-indigo-800 text-xl" href={item.href}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavMobile;