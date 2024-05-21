import React, { useEffect, useState } from 'react';
import SEctionTitle from '../../../components/SectionTitle/SEctionTitle';

const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <SEctionTitle subHeading={"Popular Items"} heading={"From Out Menu"}></SEctionTitle>
        </div>
    );
};

export default PopularMenu;