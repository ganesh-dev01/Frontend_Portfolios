import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import styles from '@/styles/admin_pages/admin_permission.module.css';

interface Permissions {
    view: boolean;
    edit: boolean;
    delete: boolean;
}

interface User {
    id: number;
    name: string;
    email: string;
    permissions: Permissions;
}

const AdminPermission: React.FC = () => {
   const data = useContext(ThemeContext);
   let {theme} = data;
  

    // Sample user data
    const [userPermissions, setUserPermissions] = useState<User[]>([
        { id: 1, name: "John Doe", email: "john@example.com", permissions: { view: true, edit: false, delete: false } },
        { id: 2, name: "Jane Smith", email: "jane@example.com", permissions: { view: true, edit: true, delete: false } },
        { id: 3, name: "Alice Brown", email: "alice@example.com", permissions: { view: false, edit: false, delete: false } }
    ]);

    // Handle checkbox change
    const handlePermissionChange = (userId: number, permissionType: keyof Permissions) => {
        setUserPermissions(prevUsers =>
            prevUsers.map(user =>
                user.id === userId
                    ? { ...user, permissions: { ...user.permissions, [permissionType]: !user.permissions[permissionType] } }
                    : user
            )
        );
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <h4 className={styles.pageTitle}>User Permissions</h4>
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr className={styles.tableRow}>
                        <th className={styles.tableHead}>Username</th>
                        <th className={styles.tableHead}>Email</th>
                        <th className={styles.tableHead}>Permission</th>
                        <th className={styles.tableHead}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userPermissions.map(user => (
                        <tr key={user.id} className={styles.tableRow}>
                            <td className={styles.tableData}>{user.name}</td>
                            <td className={styles.tableData}>{user.email}</td>
                            <td className={`${styles.tableData} ${styles.permissionCell}`}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={user.permissions.view}
                                        onChange={() => handlePermissionChange(user.id, "view")}
                                        className={styles.checkbox}
                                    />
                                    View
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={user.permissions.edit}
                                        onChange={() => handlePermissionChange(user.id, "edit")}
                                        className={styles.checkbox}
                                    />
                                    Edit
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={user.permissions.delete}
                                        onChange={() => handlePermissionChange(user.id, "delete")}
                                        className={styles.checkbox}
                                    />
                                    Delete
                                </label>
                            </td>
                            <td className={styles.tableData}>
                                <button className={styles.updateBtn}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPermission;
