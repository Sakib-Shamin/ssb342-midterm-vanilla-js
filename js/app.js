import SSCAPIData from './SSCAPIData.js';

const App = ( () => 
{
    const itemsPerPage = 12, currentPage = 1, totalUsers = 24;
    let _searchBar, _cardHolder, _paginationHolder;
    let __sscApiData;
    const initialize = () => 
    {
        __sscApiData = new SSCAPIData( 'https://randomuser.me/api/', {
            results: totalUsers
        } );

        // console.log( __sscApiData.getAllData() );

        console.log( __sscApiData.getSinglePageData( currentPage, itemsPerPage, __sscApiData.getAllData()) );

        domInit();
    }
    const domInit = () =>
    {
        _searchBar = document.querySelector( '#sscRUSearchbar' );
        _cardHolder = document.querySelector( '#sscRUCardsContainer' );
        _paginationHolder = document.querySelector( '#sscRUPagination' );
        renderAll();
    }
    const eventListeners = () =>
    {

    }
    const renderAll = () => 
    {
        renderCard();
        renderPagination();
        fetchDataForCard();
    }
    const renderCard = ( cardData = [] ) => 
    {
        let allCards = '';
        if( cardData.length === 0 )
        {
            for( let index = 0; index < itemsPerPage; index++ )
            {
                allCards += `<div class="ssc-ru-single-card"><div class="ssc-ru-user-avatar ssc-skeleton"></div><div class="ssc-skeleton"></div><div class="ssc-skeleton"></div><div class="ssc-skeleton"></div></div>`;
            }

            _cardHolder.innerHTML = allCards;

            return;
        }
    }
    const fetchDataForCard = () => 
    {
        // const __sscApiData = new SSCAPIData( 'https://randomuser.me/api/', {
        //     results: totalUsers;
        // } )
    }
    const renderPagination = ( loaded = false ) =>
    {
        let listContainer = '<ul>';
        const numberOfPages = totalUsers / itemsPerPage;
        if ( totalUsers % itemsPerPage !== 0 )
        {
            numberOfPages++;
        }
        for ( let index = 0; index < numberOfPages; index++ )
        {
            let singleList = `<li><a href='#' class='ssc-skeleton'></a></li>`;
            if( loaded === true)
            {
                // console.log( loaded );
                singleList = `<li><a href='#' `
                if( index === 0)
                {
                    singleList += `class='ssc-ru-current-page' `;
                }
                singleList += `data-pg-no=${ index + 1 }>${ index + 1 }</a></li>`;
            }
            listContainer += singleList;
        }
        listContainer += `</ul>`;
        _paginationHolder.innerHTML = listContainer;
    }
    return {
        initialize: initialize,
        eventListeners: eventListeners
    }

    // const _sscApiData = new SSCAPIData( 'https://randomuser.me/api/', {
    //     results: totalUsers
    // } );
    
})();

App.initialize();
App.eventListeners();