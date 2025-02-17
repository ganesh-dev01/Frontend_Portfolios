import { ThemeContext } from '@/Theme/Themestate'
import { useContext, useState } from 'react'
import { Menu, User } from 'lucide-react';
import styles from '@/styles/admin.module.css';
import UserTasks from './UserTasks';
import AdminPermission from './Permission';
import AdminEditTask from './Edit_task';
import AdminProfile from './Profile';

const Admin: React.FC = () => {
    const data = useContext(ThemeContext);
    let { theme } = data;


    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = (v:number) => {
        setMobileNavOpen(!mobileNavOpen);
        setActive(v);
    };

    const Content=(v:number)=>{
        switch(v){
            case 1:
                return <UserTasks />
            case 2:
                return <AdminPermission />
            case 3:
                return <AdminEditTask />
            case 4:
                return <AdminProfile />
            default:
                return <UserTasks />
        }

    }
    let[active,setActive]=useState(1);

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            {/* Desktop SideNav */}
            <div className={styles.desktop_sidenav}>
                <div className={styles.desktop_sidenav_header}>
                    <p>My To-Dos</p>
                </div>
                <ul className={styles.menu_list}>
                    <li onClick={()=>setActive(1)}>User Tasks</li>
                    <li onClick={()=>setActive(2)}>Permission</li>
                    <li onClick={()=>setActive(3)}>Edit Task</li>
                    <li onClick={()=>setActive(4)}>Profile</li>
                </ul>
            </div>

            {/* Mobile SideNav */}
            <div className={styles.mobile_menu_icon} onClick={()=>toggleMobileNav(active)}>
                <Menu size={24} />
            </div>

            <div className={`${styles.mobile_sidenav} ${mobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobile_menu_list}>
                    <li onClick={()=>toggleMobileNav(1)}>User Tasks</li>
                    <li onClick={()=>toggleMobileNav(2)}>Permission</li>
                    <li onClick={()=>toggleMobileNav(3)}>Edit Task</li>
                    <li onClick={()=>toggleMobileNav(4)}>Profile</li>
                </ul>
            </div>

            {/* Main Content */}

            <div className={styles.main_content}>
                {Content(active)}
            </div>

        </div>
    );
};

export default Admin;
