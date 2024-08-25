/*********************************************************************************
*  WEB422 – Assignment 3
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Luckshihaa Krishnan    Student ID: 186418216    Date: 16/02/2024
*
********************************************************************************/ 

import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import ListingDetails from "@/src/components/ListingDetails";
import PageHeader from "@/src/components/PageHeader";


export default function Home() {
  const [page, setPage] = useState(1)
  const [pageData,setPageData] = useState([])
  let new_id

  function previous(){
    {
      page > 1 
      && (setPage(page - 1))
    }
  }
  
  function next(){
    setPage(page + 1)
  }

  useEffect( () =>{
    fetch(`https://web422-assignment1-htoc.onrender.com/api/listings?page=${page}&perPage=10`).
    then(res=>res.json())
    .then(data=>{
      setPageData(data);
    })
  },[])
  
  
  
  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings"/>
      <Accordion>
        {pageData.map((listing)=>{
          return (<Accordion.Item eventKey = {listing._id} 
          key = {listing._id}>
          <Accordion.Header>
            <b>{listing.name}</b>&nbsp; 
            {listing.address.street}
          </Accordion.Header>
          <Accordion.Body>
            <ListingDetails listing={listing}/>
          </Accordion.Body>
        </Accordion.Item>)
        })}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next}/>
      </Pagination>     
    </>
  );
}


