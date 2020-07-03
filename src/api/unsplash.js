import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NXWwRyeWRk_u3T1WV6kPIyoaA1RerN2zqys5NJ9E2DM'
    }
});