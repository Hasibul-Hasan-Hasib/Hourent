import React from 'react';
import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { Button, Container, Menu } from '@mantine/core';
import useAuth from '../../hooks/useAuth';



const NavBar = () => {

    const { logOut, setUser, user, setIsLoading } = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                navigate('/')
            })
            .finally(() => {
                setIsLoading(true)
            })
    }

    console.log(user.photoURL);


    return (
        <>
            <Container size='lg'>
                <div className={styles.navContainer}>
                    <Link to='/'>
                        <img src={logo} width='150px' alt="" />
                    </Link>
                    <div className={styles.align}>
                        <Link className={styles.navLink} to='/' >Home</Link>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink} >Properties</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to='/properties'>
                                    For Rent
                                </Menu.Item>
                                <Menu.Item component={Link} to='/properties'>
                                    For Sell
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item component={Link} to='/properties'>
                                    Chittagong
                                </Menu.Item>
                                <Menu.Item component={Link} to='/properties'>
                                    Dhaka
                                </Menu.Item>
                                <Menu.Item component={Link} to='/properties'>
                                    Barisal
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Link className={styles.navLink} to='/blog' >Blog</Link>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink}>Pages</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to='/contact'>
                                    Contact
                                </Menu.Item>
                                <Menu.Item component={Link} to='/about'>
                                    About Us
                                </Menu.Item>
                                <Menu.Item component={Link} to='/featured-house'>
                                    Featured House
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        {user?.email ?
                            <Menu shadow="md" width={200} trigger='hover'>
                                <Menu.Target>
                                    <img style={{borderRadius:'50%'}} className={styles.navLink} width={35} src={user.photoURL} alt="non" />
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item component={Link} to='/saved'>
                                        saved
                                    </Menu.Item>
                                    <Menu.Item component={Link} to='/bookings'>
                                        bookings
                                    </Menu.Item>
                                    <Menu.Item component={Link} onClick={handleLogout}>
                                        Logout
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                            :
                            <Button color='cyan' component={Link} to='/login' sx='margin-left: 1rem'>Login</Button>}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default NavBar;