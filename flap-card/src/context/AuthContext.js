import React, {useState, useEffect, useContext } from  "react"
import { auth } from '../firebase'
const authContext = React.createContext()

const ContextProvider = ({children}) => {
    const [user, setUser ] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
       const logout =  auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
        })
        return () => logout()
    }, [user])

    const value = { user }

    return <authContext.Provider value={value}>{!loading && children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext) 

export default ContextProvider