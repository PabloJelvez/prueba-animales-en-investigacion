let data = (()=>{
    try {
        console.log('hola')
        const url = "./animales.json";
        const getData = async () => {
            const response = await fetch(url);
            const json = await response.json(); 
            console.log(json)
            const { animales } = json;
            return animales;
        }
        return {getData};
    } catch (error) {
        console.log(error);
    }
})();

export default data;