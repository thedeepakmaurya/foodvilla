import { createContext } from "react";

const userContext = createContext(
    {
        user: {
            name: "Deepak Maurya",
            email: "deepak.maurya@gmail.com",
        }
    })

export default userContext;