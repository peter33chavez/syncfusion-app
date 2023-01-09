import React, { useCallback, useEffect, useState } from 'react'

interface State {
    loading: boolean
    data: null | any
    error: null | any
};

const useFetch = (url:string|undefined, key:string|undefined, query:string|undefined) => {
  const [ state, setState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  })

  const refetch = useCallback(async () => {
    console.log(url,key,query);
        setState({loading: true, data: null, error: null});
        // const res = fetch(`${url}${key}${query}`);
        try{
            const res = await fetch(`${url}${key}&q=San Jose&aqi=no
            `);
            const fetchedData = await res.json();
            setState({loading: false, data: fetchedData, error: null});
        }
        catch(err){
            setState({loading: false, data: null, error: err});
        }
        
  }, [query])

  return {state, refetch};
}

export default useFetch