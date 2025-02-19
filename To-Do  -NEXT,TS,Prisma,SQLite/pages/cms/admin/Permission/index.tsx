import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useState, useEffect } from 'react';
import styles from '@/styles/admin_pages/admin_permission.module.css';

interface Permissions {
  view: boolean;
  edit: boolean;
  delete: boolean;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  permissions: Permissions;
}

const AdminPermission: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);

    if (adminStatus) {
      fetchUsers();
    } else {
      console.error("Unauthorized access");
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/adminPermissions?email=admin@example.com');
      const data = await response.json();

      if (response.ok) {
        const usersWithPermissions = data.map((user: any) => ({
          ...user,
          permissions: user.accessRights ? {
            view: user.accessRights.includes('view'),
            edit: user.accessRights.includes('edit'),
            delete: user.accessRights.includes('delete')
          } : { view: false, edit: false, delete: false }
        }));
        setUsers(usersWithPermissions);
      } else {
        console.error('Failed to fetch users:', data.message);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePermissionChange = (userId: string, permissionType: keyof Permissions) => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user =>
        user.id === userId
          ? { ...user, permissions: { ...user.permissions, [permissionType]: !user.permissions[permissionType] } }
          : user
      );
      console.log('Updated users', updatedUsers);
      return updatedUsers;
    });
  };

  const handleUpdateClick = async (userId: string) => {
    const user = users.find(user => user.id === userId);
    if (user) {
      if (!user.permissions.view && (user.permissions.edit || user.permissions.delete)) {
        alert('You can\'t give edit or delete access without checking view');
        return;
      }
      
      const accessRights = Object.keys(user.permissions).filter(key => user.permissions[key as keyof Permissions]);
      try {
        const response = await fetch(`/api/permissions/${userId}?email=admin@example.com`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accessRights })
        });
        if (response.ok) {
          fetchUsers();
        } else {
          console.error('Failed to update user');
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };

  if (!isAdmin) {
    return <div>You need to be an admin to view this page.</div>;
  }

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
          {users.map(user => (
            <tr key={user.id} className={styles.tableRow}>
              <td className={styles.tableData}>{user.fullName}</td>
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
                <button className={styles.updateBtn} onClick={() => handleUpdateClick(user.id)}>Update Permissions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPermission;