import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchSingleDrink = async (id) => {
    try {
        const res = await axios.get(`${url}${id}`);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
};

const SingleDrinkPage = async ({ params }) => {
    const data = await fetchSingleDrink(params.id);
    const { strDrink, strDrinkThumb } = data?.drinks[0];

    return (
        <div>
            <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>Back to drinks</Link>
            <h1 className='text-4xl mb-8'>{strDrink}</h1>
            <Image
                alt={strDrink}
                className='w-48 h-48 rounded-lg shadow-lg mt-4'
                height={720}
                priority
                src={strDrinkThumb}
                width={720}
            />
        </div>
    );
};

export default SingleDrinkPage;