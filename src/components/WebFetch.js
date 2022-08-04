import { useState, useEffect } from "react"

const WebFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=United+States`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
//   useEffect(() => {
//     const getData = async () => {
//         try {
//             const response = await fetch(
//                 "http://universities.hipolabs.com/search?country=United+States"
//                 )
//         };
//         if (!response.ok) {
//             throw new Error(
//                 `This is an HTTP error: The status is ${response.status}`
//             );
//         }
//         let actualData = await response.json();
//         setData(actualData);
//         setError(null);
//     } catch(err) {
//         setError(err.message);
//         setData(null);
//     }   finally {
//         setLoading(false);
//     }
//         // console.log(actualData)

//     }
//         getData()
//     // .then((response) => {
//     //     // console.log(response)
//     //     response.json();
//     // })
//     // .then((actualData) => { 
//     //     // console.log(actualData);
//     //     setData(actualData);
//     //     setError(null);
//     // })
//     // .catch((err) => {
//     //     // console.log(err.message);
//     //     setError(err.message);
//     //     setData(null);
//     // })
//     // .finally(() => {
//     //     setLoading(false);
//     // })
//   }, [])

  return (
    <div>
        {loading && <div>A moment please...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul className="ul">
            {data &&
                data.map(({ id, country, web_pages, name }) => (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{web_pages}</p>
                        <p>{country}</p>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default WebFetch