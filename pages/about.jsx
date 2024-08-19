import React from 'react'
import Link from 'next/link'
import ListingDetails from '@/src/components/ListingDetails'
import PageHeader from '@/src/components/PageHeader'
import { Card } from 'react-bootstrap'

export function getStaticProps(){
    return new Promise((resolve,reject)=>{
        fetch(`https://web422-assignment1-htoc.onrender.com/api/listings/2373963`)
        .then(res=> res.json())
        .then(data=>{
            resolve({props:{listing:data}})
        })
    })
}

export default function About(props){
    return(
        <>
            <Card style={{ width: '70rem' }} className="bg-light">
            <Card.Body>
            <PageHeader text="About the Developer : Luckshihaa Krishnan" />
            <p>I am in my fourth semester in Computer Programming and 
                Analysis program at Seneca Polytechnic. I have had the passion
                and interest in computer programming for a long time, and learning
                various programming languages shows how unique each one is!
            </p>
            <br/>
            <p>
                To build my career and experiences, I did my co-op placement in highschool
                at a company called Radeon Technologies Ltd. This was a virtual placement as 
                it was also my first time working for a company and it was a great experience.
                To build my soft skills as well, I have been working at Marshalls for two years and built
                many skills such as team work and collaboration, communication and independancy.                
    
                Outside of school, I have many other hobbies I like to do in my free 
                time such as going for a walk while listening to music which helps 
                me with stress. As much as I am focused with school,
                I know I should also focus on my health.
            </p>
            <br/>
            <p> One of the places I would like to spend the weekend is: <Link href="/listing/2373963">{props.listing.name}</Link></p>
            </Card.Body>
            <ListingDetails listing={props.listing}/>
          </Card>

        </>
    )
}
