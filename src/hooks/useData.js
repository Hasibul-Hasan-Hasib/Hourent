import { useEffect, useState } from "react"
import axios from 'axios'


const useData = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const postUrl = `http://localhost:3100/posts`;
    const userUrl = `http://localhost:3100/users`;
    const bookingsUrl = `http://localhost:3100/bookings`;
    const reviewsUrl = `http://localhost:3100/reviews`;

    // console.log(users);
    // console.log(posts);
    // console.log(bookings)
    // console.log(reviews);


    const fetchData = async () => {
        const postData = await axios.get(postUrl)
            .finally(() => setIsLoading(false));
        setPosts(postData.data);

        const userData = await axios.get(userUrl)
            .finally(() => setIsLoading(false));
        setUsers(userData.data);

        const bookingsData = await axios.get(bookingsUrl)
            .finally(() => setIsLoading(false));
        setBookings(bookingsData.data);

        const reviewsData = await axios.get(reviewsUrl)
            .finally(() => setIsLoading(false));
        setReviews(reviewsData.data);
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])



    return { users, posts, bookings, reviews, isLoading };
}

export default useData;