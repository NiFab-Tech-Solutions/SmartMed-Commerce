
import Image from "next/image";
import Link from "next/link";
import { CgProductHunt } from "react-icons/cg";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiEarrings } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { MdMoney, MdSupportAgent } from "react-icons/md";
import { SiStockx } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";
const role = 'admin'
const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: <HiHome />,
                label: "Dashboard",
                href: "/admin",
                visible: ["admin", "transimitter", "agent", "Financier", "Customer"],
            },
            {
                icon: <MdSupportAgent />,
                label: "Agents",
                href: "/admin/agent",
                visible: ["admin", "agent"],
            },
            {
                icon: <SiStockx />,
                label: "Stock",
                href: "/admin/stock",
                visible: ["admin"],
            },
            {
                icon: <CgProductHunt />,
                label: "Products",
                href: "/admin/products",
                visible: ["admin"],
            },
            {
                icon: <TbCategoryFilled />,
                label: "Categories",
                href: "/admin/categories",
                visible: ["admin"],
            },
            {
                icon: <MdMoney />,
                label: "Transactions",
                href: "/admin/transactions",
                visible: ["admin"],
            },
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: <FaUser />,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <GiEarrings />,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <FaSignOutAlt />,
                label: "Logout",
                href: "/auth/login",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className="h-[96vh] flex flex-col justify-between ">
            <Link
                href="/"
                className="flex absolute top-2 items-center justify-center lg:justify-start gap-2"
            >
                <Image src="/logo.jpg" alt="logo" width={100} height={100} />
            </Link>
            <div className="mt-12 text-sm">
                {menuItems[0].items.map((item) => {
                    if (item.visible.includes(role)) {
                        return (
                            <Link
                                href={item.href}
                                key={item.label}
                                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                            >
                                {typeof item.icon === "string" ? (
                                    <Image src={item.icon} alt={item.label} width={20} height={20} />
                                ) : (
                                    item.icon
                                )}
                                <span className="hidden lg:block">{item.label}</span>
                            </Link>
                        );
                    }
                })}
            </div>

            <div className="mt-4 text-sm  ">
                {menuItems[1].items.map((item) => {
                    if (item.visible.includes(role)) {
                        return (
                            <Link
                                href={item.href}
                                key={item.label}
                                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                            >
                                {typeof item.icon === "string" ? (
                                    <Image src={item.icon} alt={item.label} width={20} height={20} />
                                ) : (
                                    item.icon
                                )}
                                <span className="hidden lg:block">{item.label}</span>
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Menu;
