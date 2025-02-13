import { useSession } from "next-auth/react";

const Test: React.FC = () => {
    const session = useSession();
    console.log('test: ', session);
    return (
        <div>
            <h1>Test Page</h1>
            <h4>{session?.data?.user?.name}</h4>
        </div>
    );
};
export default Test;