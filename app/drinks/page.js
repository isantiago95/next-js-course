import axios from 'axios';
import Drinkslists from '@/components/Drinkslists';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch drinks');
    }
};

const DrinksPage = async () => {

    const data = await fetchDrinks();
    console.log(data);

    return (
        <div>
            <Drinkslists drinks={data.drinks} />
        </div>
    );
};

export default DrinksPage;