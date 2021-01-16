import React, {useState, useEffect} from 'react'
import Filter from './Filter';
import Loading from './Loading';
import Pagination from './Pagination'
import Record from './Recordss';
import SearchBar from './SearchBar';
const url = 'https://api.enye.tech/v1/challenge/records'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [group, setGroup] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20)

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([])
  
  const fetchRecords = async () => {
    try {
      const response = await fetch(url);
      const record = await response.json();
      const {records: {profiles: detail}} = record
      setLoading(false)
      setGroup(detail)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
 }

 const updateInput = async () => {
   const results = group.filter(search => {
     return search.Gender.toLowerCase() === input || 
            search.FirstName.toLowerCase() === input || 
            search.LastName.toLowerCase() === input || 
            search.Latitude === input || 
            search.Longitude === input || 
            search.CreditCardNumber.toLowerCase() === input || 
            search.CreditCardType.toLowerCase() === input || 
            search.Email.toLowerCase() === input || 
            search.DomainName.toLowerCase() === input || 
            search.PhoneNumber === input || 
            search.MacAddress.toLowerCase() === input || 
            search.URL.toLowerCase() === input || 
            search.LastLogin.toLowerCase() === input || 
            search.PaymentMethod.toLowerCase() === input 
            
  })
    setInput(input)
    setSearchResults(results)
    console.log(results, group, input);
 }
 
 useEffect(() => {
   updateInput()
 }, [input, group])

  useEffect(() => {
    fetchRecords();
  }, [])
  
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = group.slice(indexOfFirstPost, indexOfLastPost);
  
  
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  
  if (loading) {
      return (
      <main>
          <Loading />
      </main>
    )
  } 
    return (
      <main>
        <Filter />
        <SearchBar keyword={input} setKeyword={setInput}/>
        {searchResults.length > 0 ? <Record record={searchResults} /> : <Record record={currentPosts} />}
        
        <Pagination postPerPage={postPerPage} totalPosts={group.length} paginate={paginate}/>
      </main>
    )
  
}

export default App