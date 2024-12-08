import React from "react"
import Header from "../Header"
import Footer from "../Footer"

interface NodeProps {
    children: React.ReactNode
}


const Wrapper: React.FC<NodeProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Wrapper