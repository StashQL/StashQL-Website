import React, { Component, useState, useEffect } from 'react';
import Navbar from '../components/Nav.jsx';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import { animateScroll } from 'react-scroll';
import Footer from '../components/footer/Footer.jsx';
import { red } from '@mui/material/colors';

const Demo = (props) => {

  const query1 = `{
    authors {
      name
      books {
        name
      }
    }
}`

  const mutation1 = `mutation {
    addAuthor(name: "John Smith", refillCache: "authors") {
      name
    }
}`

  const [query, setQuery] = useState(query1);
  const [returnedData, setReturnedData] = useState('');
  const [runTimes, setRunTime] = useState([]);
  const [queries, addQueries] = useState([]);
  const [speeds, addSpeeds] = useState([]);


  const [userData, setUserData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ["#FC5CAC"],
      borderColor: "#FC5CAC",
      borderWidth: 3,
    }]
  });

  useEffect(() => {
    setUserData({
      labels: queries,
      datasets: [{
        color: 'red',
        data: speeds,
        backgroundColor: ["#FC5CAC"],
        borderColor: "#FC5CAC",
        borderWidth: 3,
      }]
    })
  }, [queries, speeds]);

  // useEffect(() => {
  //   window.addEventListener('beforeunload', demoAuthor)
  //   return () => {
  //     window.removeEventListener('beforeunload', demoAuthor)
  //   }
  // }, []);

  // useEffect(() => {
  //   window.onunload = async function() {
  //     var result = demoAuthor();
  //     return result;
  //   }
  // }, []);

  // const demoAuthor = async () => {
  //   // e.preventDefault(e);
  //   clearCache();
  //   let method = 'DELETE';
  //   await fetch('/api/demoAuthor', {
  //     method,
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log('Errpr in deleting: ', err));
  //   return demoAuthor;
  // }

  // useEffect(() => {
  //   window.onunload = window.onbeforeunload = async function() {
  //     var result = demoAuthor();
  //     return result;
  //   }
  // }, []);

  // const demoAuthor = async () => {
  //   // e.preventDefault(e);
  //   clearCache();
  //   let method = 'DELETE';
  //   await fetch('/api/demoAuthor', {
  //     method,
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log('Errpr in deleting: ', err));
  //   return demoAuthor;
  // }


  useEffect(() => {
    window.onbeforeunload = function() {
      // e.preventDefault();
      var result = demoAuthor();
      return;
    }
  }, []);

  const demoAuthor = async () => {
    clearCache();
    let method = 'DELETE';
    await fetch('/api/demoAuthor', {
      method,
      headers: { 'Content-Type': 'application/json' }
    })
      .catch((err) => console.log('Errpr in deleting: ', err));
    return demoAuthor;
  }

  // const submitQuery = async () => {
  //   let method = 'POST';
  //   await fetch('/api/graphql', {
  //     method,
  //     body: JSON.stringify({query}),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then(({ data, runTime }) => {
  //       setReturnedData(JSON.stringify(data, null, 2));
  //       setRunTime(oldRunTimes => [...oldRunTimes, runTime]);
  //       addQueries(oldQueries => [...oldQueries, `Query ${oldQueries.length + 1}`]);
  //       addSpeeds(oldSpeeds => [...oldSpeeds, runTime]);
  //     })
  //     .catch((err) => console.log('Error: ', err));
  // };

  // const submitQuery = async () => {
  //   let method = 'POST';
  //   await fetch('/api/graphql', {
  //     method,
  //     body: JSON.stringify({query}),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then(({ data, runTime }) => {
  //       setReturnedData(JSON.stringify(data, null, 2));
  //       setRunTime(oldRunTimes => [...oldRunTimes, runTime]);
  //       addQueries(oldQueries => [...oldQueries, `Query ${oldQueries.length + 1}`]);
  //       addSpeeds(oldSpeeds => [...oldSpeeds, runTime]);
  //     })
  //     .catch((err) => console.log('Error: ', err));
  // };

  // const submitMutation = async () => {
  //   let method = 'POST';
  //   await fetch('/api/graphql', {
  //     method,
  //     body: JSON.stringify({query}),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then(({ data }) => {
  //       setReturnedData(JSON.stringify(data, null, 2));
  //     })
  //     .catch((err) => console.log('Error: ', err));
  // };

  const clearCache = async () => {
    let method = 'POST';
    await fetch('/api/clearCache', {
      method,
      headers: { 'Content-Type': 'application/json' },
    })
      .catch((err) => console.log('Error: ', err));
  }

  return (

    // <div>
    //   <Navbar demoAuthor={demoAuthor}/>

    //   <div id='demoContainer'>
      
    //     <div id='leftSide'>

    //       <div id='leftBox'>
    //         <div id='leftBoxOptions'>
    //           <h3 id='query1' onClick={() => {setQuery(query1); setReturnedData('')}}>Query</h3>
    //           <h3 id='mutation1' onClick={() => {setQuery(mutation1); setReturnedData('')}}>Mutation</h3>
    //         </div>
    //         <textarea value={query} readOnly={true} id='selectedQuery'>
    //         </textarea>
    //         <div id='btnContainer'>
    //           {query === query1 ? <button id='submitBtn' onClick={() => {submitQuery()}}>Submit Query</button> : <button id='submitBtn' onClick={() => {submitMutation()}}>Submit Mutation</button>}
    //           <button id='clearBtn' onClick={() => {clearCache()}}>Clear Cache</button>
    //         </div>

    //       </div>

    //       <div id='rightBox'>
    //         <div id='rightBoxOptions'>
    //           <h3>Returned Data</h3>
    //         </div>
    //         <textarea value={returnedData} readOnly={true} id='returnedData'>
    //         </textarea>
    //       </div>

    //     </div>

    //     <div id='rightSide'>
    //       <div id='rightBoxOptions'>
    //         <h3 id='querySpeed'>Query Speeds</h3>
    //       </div>
    //       <div id='chart'>
    //         <Line data={userData} options={{
    //           scales: {
    //             yAxes: {
    //               min: 0,
    //               max: 450,
    //               ticks: {
    //                 color: 'black',
    //                 font: {
    //                   size: 17
    //                 }
    //               }
    //             },
    //             xAxes: {
    //               ticks: {
    //                 color: 'black'
    //               }
    //             },
    //           },
    //         }}/>
    //       </div>
    //     </div>
    //   </div>

    //    <div id='demoText'>
    //      <h1>See first-hand what StashQL can do for your GraphQL applications</h1>
    //      <p>Upon the first time submitting the query above, StashQL will cache the returned data. Running the query again will retrieve the data from the cache, resulting in faster queries and improved performance.</p>
    //      <h2>What about mutations?</h2>
    //      <p>In the mutation example above, the refillCache argument is passed in with a value of "authors". Upon seeing this, StashQL will update any data within the cache that queried for authors</p>
    //    </div>

    // </div>

    <div>
      <Navbar demoAuthor={demoAuthor}/>

      <div id='demoText'>
         <h1>See first-hand what StashQL can do for your GraphQL applications</h1>
         <p>Upon the first time submitting the query above, StashQL will cache the returned data. Running the query again will retrieve the data from the cache, resulting in faster queries and improved performance.</p>
         <h2>What about mutations?</h2>
         <p>In the mutation example above, the refillCache argument is passed in with a value of "authors". Upon seeing this, StashQL will update any data within the cache that queried for authors</p>
       </div>

      <div id='demoContainer'>
      <div id='innerContainer'>
        <div id='leftSide'>

          <div id='leftBox'>
            <div id='leftBoxOptions'>
              <h3 id='query1' onClick={() => {setQuery(query1); setReturnedData('')}}>Query</h3>
              <h3 id='mutation1' onClick={() => {setQuery(mutation1); setReturnedData('')}}>Mutation</h3>
            </div>
            <textarea value={query} readOnly={true} id='selectedQuery'>
            </textarea>
            <div id='btnContainer'>
              {query === query1 ? <button id='submitBtn' onClick={() => {submitQuery()}}>Submit Query</button> : <button id='submitBtn' onClick={() => {submitMutation()}}>Submit Mutation</button>}
              <button id='clearBtn' onClick={() => {clearCache()}}>Clear Cache</button>
            </div>

          </div>

          <div id='rightBox'>
            <div id='rightBoxOptions'>
              <h3>Returned Data</h3>
            </div>
            <textarea value={returnedData} readOnly={true} id='returnedData'>
            </textarea>
          </div>

        </div>

        <div id='rightSide'>
          <div id='rightBoxOptions'>
            <h3 style={{color: '#fff'}} id='querySpeed'>Query Speeds</h3>
          </div>
          <div id='chart'>
            <Line data={userData} options={{
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                yAxes: {
                  title: {
                    display: true,
                    text: 'Performance in Milliseconds',
                    font: {
                      size: 17
                    },
                    padding: 5,
                    color: '#fff'
                  },
                  // grid: {
                  //   color: (context) => {
                  //     return '#fff';
                  //   }
                  // },
                  min: 0,
                  max: 500,
                  ticks: {
                    color: '#868792',
                    font: {
                      size: 17,
                    },
                  }
                },
                xAxes: {
                  title: {
                    display: true,
                    text: 'Queries',
                    font: {
                      size: 17
                    },
                    padding: 5,
                    color: '#fff'
                  },
                  // grid: {
                  //   color: (context) => {
                  //     return '#fff';
                  //   },
                  // },
                  ticks: {
                    color: '#868792'
                  },
                },
              },
            }}/>
          </div>
        </div>
      </div>
      </div>

      <Footer/>    
    </div>
  );
}

export default Demo;

