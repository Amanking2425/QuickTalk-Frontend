// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import React from 'react'
// import { login } from '../lib/api';

// const useLogin = () => {

//      const queryClient = useQueryClient();


//   const {
//     mutate, 
//     isPending, error,
//   } = useMutation({
//     mutationFn: login,
//     onSuccess: () => queryClient.invalidateQueries({queryKey: ["authUser"]}),
//   });

//   return {error, isPending, loginMutation: mutate};
// }

// export default useLogin


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";

const useLogin = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    error,
  } = useMutation({
    mutationFn: login,

    // ✅ ✅ ✅ THIS IS THE MISSING PART
    onSuccess: (data) => {
      // SAVE TOKEN IN LOCALSTORAGE
      localStorage.setItem("token", data.token);

      // REFRESH AUTH USER QUERY
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  return { error, isPending, loginMutation: mutate };
};

export default useLogin;
