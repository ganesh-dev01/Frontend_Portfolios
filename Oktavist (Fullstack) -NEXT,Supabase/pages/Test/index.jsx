import supabase from '@/lib/supabase';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Test = () => {
    let email_data = useSelector((state) => state.admin.data);

    let [sigupTable, setSignupTable] = useState(null);

    const fetch_data = async () => {
        const { data, error } = await supabase.from('signup').select('*');

        if (error) {
            alert('Error fetching data:', error.message);
        } else {
            console.log('Fetched Data:', data);
            setSignupTable(data);
        }
    }

    useEffect(() => {
        fetch_data();
    }, []);


    let c = sigupTable?.find((item) => item.email === email_data?.email);

    return (
        <div>
            <h4>Hello World</h4>
            <h4>{email_data?.email}</h4>
            <h4>{c?.name}</h4>
        </div>
    );
};

export default Test;
