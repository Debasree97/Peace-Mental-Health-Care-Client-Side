import React from 'react';
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Details = () => {

    const { disabiltyId } = useParams();

    const [details, setDetails] = useState([]);

    const x = disabiltyId;

    useEffect(() => {
      fetch(
        "https://debasree97.github.io/mentalDisorderList/mentalDisorderList.json"
      )
        .then((res) => res.json())
        .then((data) => setDetails(data));
    }, []);

    const findId = (disorderId) => disorderId.id === {disabiltyId} ;

    const singleDisorder = details.find(findId);
    console.log(singleDisorder);

    
    return (
        <div>
            {
                details.filter(detail=>detail.id==={disabiltyId})
            }
        </div>
    );
};

export default Details;