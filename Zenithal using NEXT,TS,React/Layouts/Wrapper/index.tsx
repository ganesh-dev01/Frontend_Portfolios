import React from "react"
import Header from "../Header"
import Footer from "../Footer"

interface NodeProps {
    children: React.ReactNode
}


const Wrapper: React.FC<NodeProps> = ({ children }) => {
    return (
        <div className="wrapper">

            <div className="header">
                <Header />
            </div>

            <div className="main">
                {children}
            </div>


            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Wrapper