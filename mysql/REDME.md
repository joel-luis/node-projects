# Setting Up MySQL Database in Node.js Project on Linux

This guide outlines the steps to set up a MySQL database in a Node.js project on a Linux system.

## Prerequisites

- Node.js installed on your system
- Terminal access with sudo privileges

## Steps

1. Update package lists:

   ```
   sudo apt update
   ```

2. Install MySQL Server:

   ```
   sudo apt install mysql-server
   ```

3. Run MySQL Secure Installation to configure initial settings including setting up a root user password:

   ```
   sudo mysql_secure_installation
   ```

4. Check the status of the MySQL service:

   ```
   systemctl status mysql.service
   ```

5. Enter the MySQL root user:

   ```
   sudo mysql -u root
   ```

6. View existing databases:

   ```
   show databases;
   ```

7. Create a new database:

   ```
   CREATE DATABASE <database_name>;
   ```

8. Use the newly created database:

   ```
   USE <database_name>;
   ```

9. Create a new user and password for the database:

   ```
   create user 'you-user'@'localhost' IDENTIFIED BY 'Your-password@123';
   ```

10. Grant privileges to the new user:

    ```
    GRANT ALL ON *.* TO 'you-user'@'localhost' WITH GRANT OPTION;
    ```

    ```
    ALTER USER 'YOUR-user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Your-password@123';
    ```

    ```
    FLUSH PRIVILEGES;
    ```

11. Exit the MySQL root session:

    ```
    exit
    ```

12. Test the database connection by logging in with the newly created user:

    ```
    mysql -u <database_name> -p
    ```

13. Show users

```
select user, authentication_string, plugin, host from mysql.user;
```

This completes the setup of your MySQL database for use in your Node.js project.
