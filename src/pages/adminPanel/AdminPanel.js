import { useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import {
    IconBellRinging,
    IconSwitchHorizontal,
    IconLogout,
    IconDashboard,
    IconBuildingCottage,
    IconUsers,
    IconBrandDisqus,
    IconAlertCircle,
    IconRefresh,
    IconUser,
} from '@tabler/icons';
import Logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        },

        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
                    .background,
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                },
            },
        },
    };
});

const data = [
    { link: '', label: 'Dashboard', icon: IconDashboard },
    { link: '', label: 'Message', icon: IconBellRinging },
    { link: '', label: 'Posts', icon: IconBuildingCottage },
    { link: '', label: 'Users', icon: IconUsers },
    { link: '', label: 'Comments', icon: IconBrandDisqus },
    { link: '', label: 'Reports', icon: IconAlertCircle },
    { link: '', label: 'Update', icon: IconRefresh },
    { link: '', label: 'Owner', icon: IconUser },
];

export default function AdminPanel() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <Navbar height={700} width={{ sm: 300 }} p="md">
            <Navbar.Section grow>
                <Group className={classes.header} position="apart">
                    <img width={100} src={Logo} alt="" />
                    <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                </Group>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Link  className={classes.link}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </Link>

                <Link  className={classes.link}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </Link>
            </Navbar.Section>
        </Navbar>
    );
}