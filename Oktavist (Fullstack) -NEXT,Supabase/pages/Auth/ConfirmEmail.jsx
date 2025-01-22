import { useRouter } from 'next/router';
import { useEffect } from 'react';
import supabase from '@/lib/supabase';

const ConfirmEmail = () => {
    const router = useRouter();

    useEffect(() => {
        // Get the URL hash
        const hash = window.location.hash;

        // Parse the hash parameters
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get('access_token');
        const type = params.get('type'); // e.g., 'signup'

        if (accessToken && type === 'signup') {
            // Authenticate the user with the access token
            supabase.auth.setSession(accessToken).then(({ error }) => {
                if (error) {
                    console.error('Error during email confirmation:', error.message);
                    alert('Failed to confirm email. Please try again.');
                } else {
                    alert('Email confirmed successfully!');
                    router.push('/Auth/UserSignin'); // Redirect to sign-in page
                }
            });
        } else {
            alert('Invalid or missing confirmation data.');
        }
    }, [router]);

    return <div>Confirming your email...</div>;
};

export default ConfirmEmail;
