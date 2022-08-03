# movies
## Movies features (Product Team)
* Pages : we have Two pages 
    * Home  Page -> List of movies
        * Header -> links to Movies, favourites
        * banner -> First movie ka banner
        * List of trending movies 
        * Pagination 
  * Favourites Page:
        * Header -> links to Movies, favourites
        * Genres list
        * Searchbar, no of items modifier
        * Favourite movies : sorting,deletion feature 
        * Pagination

## Technical Prerequisites (Engineering manager)
* How to make a (Ajax)request in react and render that data on ui
  * React -> life cycle methods
* Favourite page features that are highly used: 
  * Pagination,
  * group by,
  * sorting,
  * searching
* Multiple pages -> Routing 
* Practice : communication between multiple components
* Sending data from one page to another

  ***I will not focus on ui**

### data Source 
* Trending Movies : They are sourced from TMDB api 
  * Data Availabe from TMDB API 
      * Movies Img src 
      * Movie name 
      * Genre -> Type of movie
      * Rating 
      * Popularity
  
* data file : movies.js
* get small prepend in backdrop path (normal image ): https://image.tmdb.org/t/p/w500/
* Banner image prepend : https://image.tmdb.org/t/p/original

Day1 -> Main Page 