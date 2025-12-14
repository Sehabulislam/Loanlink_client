import React from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    
    const {isLoading : roleLoading , data : role ="borrower" } = useQuery({
        queryKey : ['user-role',user?.email],
        queryFn : async ()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`)
            return res.data?.role || 'borrower'
        }
    })
    
    return (roleLoading , role)
};

export default useRole;