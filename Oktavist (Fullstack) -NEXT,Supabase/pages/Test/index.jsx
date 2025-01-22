import supabase from '@/lib/supabase';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Test = () => {
    // let email_data = useSelector((state) => state.admin.data);

    let [val, setVal] = useState(null);

    const fetch_data = async () => {
        const { data, error } = await supabase.from('signup').select('*');

        if (error) {
            alert('Error fetching data:', error.message);
        } else {
            console.log('Fetched Data:', data);
            setVal(data);
        }
    }

    useEffect(() => {
        fetch_data();
    }, []);

    return (
        <div>
            <h4>Hello World</h4>
        </div>
    );
};

export default Test;
