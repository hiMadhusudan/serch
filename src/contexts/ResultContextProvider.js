import React,{createContext,useContext,useState} from 'react';
//Hooks 
//create COnteext APi intialized here
const ResultContext = createContext();
//Rapid api url for the request of google Query
const baseUrl = 'https://google-search72.p.rapidapi.com/search';

export const ResultContextProvider = ({children}) => {
    //results hoook to store and pass params for the results 
    const [results,setResults] = useState([]);
    //is loading to check if its still loading initially false
    const[isLoading,setIsLoading] = useState(false);
    //we need the searach term that i am passign as  a param to api
    const[searchTerm,setSearchTerm] = useState('Isaac the Web Developer');


    //here URL means the ROutes that i have described that is the image,video,news etc
    const getResults = async (type) => {
        setIsLoading(true);
        //no axios for now like the sira quote generatoe
        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            //headers available with the api 
            headers: {
                'X-RapidAPI-Key': '1c73e4fd97msh1ef4e3ac66c9294p13d1cdjsn9e173518d803',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
              }
        });

        const data = await response.json();
    
        setResults(data);
        setIsLoading(false);
    }
    return (
    <ResultContext.Provider value={{results,searchTerm,getResults,setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);