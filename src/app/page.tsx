'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import HomePage from './components/homepage/Homepage';
// import { seedDatabase }  from '';

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const loadData = seedDatabase(4);
  //   setData(loadData);
  // }, [])
  //   const [selectId, setSelectId] = useState();
  //   const [selectData, setSelectData] = useState<any | null>();
  //   const fetchData = async () => {
  //     try {
  //         const response = await fetch(`/app/initiatives/${selectId}`);
  //         if (!response.ok) {
  //             throw new Error('Project not found');
  //         }
  //         if(response.status === 201) {
  //           const data = await response.json();
  //           setSelectData(data)
  //           console.log("200")
  //         }
  //     } catch (error: any) {
  //       setSelectData(null);
  //         console.error(error.message);
  //     }
  // };

  //  useEffect (()=>{
  //   fetchData();
  //   },[])

  return <HomePage />;
}
