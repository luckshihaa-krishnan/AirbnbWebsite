import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/src/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/src/components/PageHeader";


export default function ListingID(){
    const router = useRouter()
    const {id} = router.query

    const { data, error, isLoading } = useSWR(`https://web422-assignment1-htoc.onrender.com/api/listings/${id}`);

  return(<>
      {
        error
        && (<Error statusCode={404}/>)
      }
      {
        isLoading && !error && data
        && (<>
            <PageHeader listing="name"/>
            <ListingDetails listing={listing}/>
            </>
        )
      }
    
    </>)
}