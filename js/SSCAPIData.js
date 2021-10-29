import SSCSingleUser from "./SSCSingleUser.js";

export default class SSCAPIData
{
    #_allData;
    constructor( endpoint, parameters = {} )
    {
        this.#_allData = this.dataFromAPI( endpoint, parameters );
    }
    dataFromAPI = ( endpoint, parameters ) =>
    {
        let finalData = [];
        fetch( this.getCompleteURL( endpoint, parameters ) )
        .then( response => 
        {
            if ( ! response.ok )
            {
                throw new Error ( `Error Message: ${ response.status }` );
            }

            return response.json();
        })
        .then( data => 
        {
            data.results.forEach( ( element, index ) => 
            {
                finalData.push( new SSCSingleUser( element, index ) );
            } );
        } )
        .catch( err => 
        {
            console.log( 'Something is wrong' );
            console.log( err );
        } );
        return finalData;
    }
    getCompleteURL = ( endpoint, parameters ) =>
    {
        if ( typeof parameters === 'undefined' )
        {
            return this.endpoint;
        }
        let finalURL = `${ endpoint }?`;
        for( const param in parameters )
        {
            finalURL += `${ param }=${ parameters[param] }&`;
        }
        return finalURL.slice(0, -1);
    }
    getSinglePageData = ( pageNumber, itemsPerPage, wholeData) => 
    {
        const firstItemIndex = ( pageNumber - 1 ) * itemsPerPage;
        const lastItemIndex = pageNumber * itemsPerPage;
        let singlePageData = [];
        for( let index = firstItemIndex; index < lastItemIndex; index++ )
        {
            if ( index == wholeData.length )
            {
                break;
            }

            singlePageData.push( wholeData[index] );
        }
        return singlePageData;
    }
    getAllData = () => this.#_allData;
    getSingleUserData = index => this.#_allData[index];

}