import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

// Utility function to chunk the array into groups of 4
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

function Carusel() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Group products into arrays of 4
    const productChunks = chunkArray(data, 4);

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                {productChunks.map((chunk, index) => (
                    <div key={index} className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex items-center justify-around w-full">
                        {chunk.map((product) => (
                            <div key={product.id} className="flex flex-col items-center w-1/4">
                                <img src={product.image} alt={product.title} className="h-[200px] object-contain" />
                                <div className="text-center mt-5 mb-5">
                                    <h3 className="h-6 overflow-hidden ">{product.title}</h3>
                                    <span>${product.price}</span>
                                    <p className="h-[100px] overflow-hidden">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carusel;
