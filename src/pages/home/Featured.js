// import { Container, Grid } from '@mantine/core';
// import styles from './Featured.module.css'
// import React from 'react';
// import image from '../../assets/images/daka.jpg'

// const Featured = () => {
//     return (
//         <Container size='lg' className={styles.container}>
//             <h1 className={styles.title}>
//                 Wide range of property to suit all budgets & tastes
//             </h1>
//             <Grid gutter={60}>
//                 <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
//                     <div >
//                         <img className={styles.img} src={image} alt="" />
//                     </div>
//                     <div className={styles.align}>
//                         <span>Chittagong</span>
//                         <span>for Rent</span>
//                     </div>
//                     <div className={styles.align}>
//                         <span>2 bathrooms</span>
//                         <span>৳2400 per day</span>
//                     </div>
//                 </Grid.Col>
//                 <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
//                     <div >
//                         <img className={styles.img} src={image} alt="" />
//                     </div>
//                     <div className={styles.align}>
//                         <span>Chittagong</span>
//                         <span>for Rent</span>
//                     </div>
//                     <div className={styles.align}>
//                         <span>2 bathrooms</span>
//                         <span>৳2400 per day</span>
//                     </div>
//                 </Grid.Col>
//                 <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
//                     <div >
//                         <img className={styles.img} src={image} alt="" />
//                     </div>
//                     <div className={styles.align}>
//                         <span>Chittagong</span>
//                         <span>for Rent</span>
//                     </div>
//                     <div className={styles.align}>
//                         <span>2 bathrooms</span>
//                         <span>৳2400 per day</span>
//                     </div>
//                 </Grid.Col>
//                 <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
//                     <div >
//                         <img className={styles.img} src={image} alt="" />
//                     </div>
//                     <div className={styles.align}>
//                         <span>Chittagong</span>
//                         <span>for Rent</span>
//                     </div>
//                     <div className={styles.align}>
//                         <span>2 bathrooms</span>
//                         <span>৳2400 per day</span>
//                     </div>
//                 </Grid.Col>
//                 <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
//                     <div >
//                         <img className={styles.img} src={image} alt="" />
//                     </div>
//                     <div className={styles.align}>
//                         <span>Chittagong</span>
//                         <span>for Rent</span>
//                     </div>
//                     <div className={styles.align}>
//                         <span>2 bathrooms</span>
//                         <span>৳2400 per day</span>
//                     </div>
//                 </Grid.Col>
//                 <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}> 
//                     <div >
//                         <img className={styles.img} src={image} alt="" />
//                     </div>
//                     <div className={styles.align}>
//                         <span>Chittagong</span>
//                         <span>for Rent</span>
//                     </div>
//                     <div className={styles.align}>
//                         <span>2 bathrooms</span>
//                         <span>৳2400 per day</span>
//                     </div>
//                 </Grid.Col>
//             </Grid>
//         </Container>
//     );
// };

// export default Featured;


import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import styles from './Featured.module.css'



const mockdata = [
    {
        title: 'Top 10 places to visit in Norway this summer',
        image:
            'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 18, 2022',
    },
    {
        title: 'Hawaii beaches review: better than you think',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 9, 2022',
    },
    {
        title: 'Best forests to visit in North America',
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 27, 2022',
    },
    {
        title: 'Best forests to visit in North America',
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 27, 2022',
    },
    {
        title: 'Mountains at night: 12 best locations to enjoy the view',
        image:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 12, 2022',
    },
    {
        title: 'Top 10 places to visit in Norway this summer',
        image:
            'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 18, 2022',
    },
];

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

export default function Featured() {
    const { classes } = useStyles();

    const cards = mockdata.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
        <Container size='xl' pb='5rem'>
            <h1 className={styles.title}>
                Wide range of property to suit all budgets & tastes
            </h1>
            <SimpleGrid
                cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 },
                { maxWidth: 'md', cols: 2, spacing: 'md' }]}>
                {cards}
            </SimpleGrid>
        </Container>
    );
}