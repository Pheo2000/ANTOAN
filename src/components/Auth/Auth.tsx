import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from 'react'
import Loading from "../helper/Loading/loading";

interface LayoutProps {
    children?: React.ReactNode;
}

const Auth: React.FC<LayoutProps> = ({ children }) => {
    // const tokenString = localStorage.getItem("store")
    // const token = JSON.parse(tokenString as string).token;
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
  const host = "http://144.126.136.135:8085"

    const hanlderLogin = async () => {
        // const tokeEX = localStorage.getItem("store")
        // console.log("sfds", tokeEX)
        // const url = "http://144.126.136.135:8085/api/nguoi-dung/get/page"
        // await fetch(url)
        //     .then(async (res) => await res.json())
        //     .then(data => console.log("lll", data))
        //     .then(data => setIsLoading(false))


        // const url = `${host}/api/nguoi-dung/get/page`;
        // await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         // 'Authorization': `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(async data => await data.json())
        //     .catch(err => router.push("/login"))
        setIsLoading(false)
    }

    useEffect(() => {
        hanlderLogin()
    }, [])


    if (isLoading) {
        return <Loading></Loading>
    } else {
        return (
            <>
                {children}
            </>
        )
    }


}

export default Auth