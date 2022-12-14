import { React, useRef, useState } from 'react';
import styles from './Property.module.css';
import { Carousel } from '@mantine/carousel';
import { Badge, Button, Container, Grid, LoadingOverlay, Modal } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';
import Autoplay from 'embla-carousel-autoplay';
import Description from './Description';
import Suggestion from './Suggestion';
import { Form, useNavigate, useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const Property = () => {


    const { id } = useParams();
    const { user } = useAuth();
    const { posts, bookings, isLoading } = useData();
    const [opened, setOpened] = useState(false);
    const userBookings = bookings.filter(booking => booking.user_id === user.uid)
    const post = posts.find(post => post.post_id === parseInt(id));
    const dep = userBookings.filter(booking => booking.post_id === post.post_id)
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const navigate = useNavigate();





    const onSubmit = () => {
        if (dep[0]) {
            navigate('/bookings')
        }
        else {
            try {
                axios.post("http://localhost:3100/bookings",
                    {
                        user_id: user.uid,
                        vendor_id: post.user_id,
                        post_id: post.post_id,
                        status: 0,
                    })
                    .then(res => {
                        if (res.data.insertId) {
                            console.log(res)
                            alert('order placed successfully')
                            navigate('/bookings')
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        }
    };






    return (
        <Container size='lg' className={styles.container}>
            {
                isLoading === false ?
                    <>
                        <Grid justify='space-between' align='flex-start' mt='3rem' columns={24}>

                            {/* Info Section */}

                            <Grid.Col span={12}>
                                <Carousel
                                    mx="auto"
                                    withIndicators
                                    plugins={[autoplay.current]}
                                    onMouseEnter={autoplay.current.stop}
                                    onMouseLeave={autoplay.current.reset}
                                    loop
                                >
                                    <Carousel.Slide>
                                        <img width='100%' height={465} style={{ borderRadius: '15px' }} src={post ? post.img1 : ''} alt="" />
                                    </Carousel.Slide>
                                    <Carousel.Slide>
                                        <img width='100%' height={465} style={{ borderRadius: '15px' }} src={post ? post.img2 : ''} alt="" />
                                    </Carousel.Slide>
                                    <Carousel.Slide>
                                        <img width='100%' height={465} style={{ borderRadius: '15px' }} src={post ? post.img3 : ''} alt="" />
                                    </Carousel.Slide>
                                </Carousel>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div className={styles.mapIcon}>
                                        <IconMapPin size={24} />
                                        <Modal
                                            opened={opened}
                                            onClose={() => setOpened(false)}
                                            size="xl"
                                        >
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.24575281821!2d90.40165817856042!3d23.789728086438796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1672586368825!5m2!1sen!2sbd" style={{border:'none',borderRadius:'px'}} width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </Modal>
                                        <span onClick={() => setOpened(true)} style={{ marginLeft: '0.5rem' }}>{post ? post.post_loc : 'loading'}</span>
                                    </div>
                                    <div>
                                        <Badge variant='filled' color="cyan">{post ? post.post_type === 0 ? 'Rent' : 'Sell' : 'loading'}</Badge>
                                        <Badge variant='filled' color="cyan" style={{ marginLeft: '0.5rem' }}>{post ? post.post_type === 0 ? 'Not Available' : 'Available' : 'loading'}</Badge>
                                    </div>
                                </div>
                            </Grid.Col>

                            {/* booking section */}

                            <Grid.Col component={Form} span={11} className={styles.bookingSectionContainer}>
                                <Description key={post ? post.post_id : ''} data={post ? post : []} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.5rem' }}>
                                    <h3>BDT - {post ? post.price.toLocaleString(undefined, { maximumFractionDigits: 2 }) : ''} Tk</h3>
                                    <Button onClick={onSubmit} size='sm' color='cyan' style={{ width: '48%' }}>Book Now</Button>
                                </div>
                            </Grid.Col>
                        </Grid>
                        {/* <Comment post={post}/> */}
                        <Suggestion posts={posts.slice(3, 6)} />
                    </>
                    :
                    <LoadingOverlay visible={isLoading} overlayBlur={2} />
            }
        </Container>
    );
};

export default Property;