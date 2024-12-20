"use client"
import Image from "next/image";
import styles from "./page.module.css"
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

  return (
    <HomePage />
    // <div className={styles.page}>
    //   <p>Hello</p>
    //   <main className={styles.main}>
    //     <p>Hello Climate Action Atlas</p>
    //     {/* <div>{data.map((item, id) => {
    //       return <p>{}</p>
    //     })}</div> */}
    //   </main>
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
