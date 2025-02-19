// import Link from 'next/link';
// import { useEffect, useRef, useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// interface SingleLevelDropdownMenuProps {
//   buttonLabel: string;
//   items: {
//     title: string;
//     url?: string;
//     icon?: JSX.Element;
//     action?: () => void;
//   }[];
// }
// export const SingleLevelDropdownMenu = ({
//   buttonLabel,
//   items,
// }: SingleLevelDropdownMenuProps) => {
//   const [open, setOpen] = useState(false);
//   const handleToggle = () => {
//     setOpen((prev) => {
//       if (!prev) setFocusedIndex(null);
//       return !prev;
//     });
//   };

//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
//   const navigate = useNavigate();
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
//     if (event.key === "ArrowDown") {
//       event.preventDefault();
//       setOpen(true);
//       setFocusedIndex(0); // Focus on the first item when the arrow is pressed
//     } else if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       handleToggle();
//     } else if (event.key === "Escape") {
//       setOpen(false);
//       setFocusedIndex(null); // Reset focus when dropdown closes
//     }
//   };

//   const handleItemKeyDown = (
//     event: React.KeyboardEvent<HTMLLIElement>,
//     index: number
//   ) => {
//     if (event.key === "ArrowDown") {
//       event.preventDefault();
//       setFocusedIndex((prevIndex) =>
//         prevIndex! < items.length - 1 ? prevIndex! + 1 : 0
//       );
//     } else if (event.key === "ArrowUp") {
//       event.preventDefault();
//       setFocusedIndex((prevIndex) =>
//         prevIndex! > 0 ? prevIndex! - 1 : items.length - 1
//       );
//     } else if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       const selectedItem = items[index];
//       if (selectedItem.url) {
//         navigate(selectedItem.url);
//       } else if (selectedItem.action) {
//         selectedItem.action();
//       }
//       setOpen(false);
//       setFocusedIndex(null);
//       buttonRef.current?.focus();
//     } else if (event.key === "Escape") {
//       setOpen(false);
//       setFocusedIndex(null);
//       buttonRef.current?.focus();
//     }
//   };
//   useEffect(() => {
//     const handler = (event: MouseEvent | TouchEvent) => {
//       if (
//         open &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     document.addEventListener("touchstart", handler);
//     return () => {
//       document.removeEventListener("mousedown", handler);
//       document.removeEventListener("touchstart", handler);
//     };
//   }, [open]);

//   useEffect(() => {
//     if (open && focusedIndex !== -1) {
//       const focusedItem = document.getElementById(
//         `dropdown-item-${focusedIndex}`
//       );
//       focusedItem?.focus();
//     }
//   }, [focusedIndex, open]);

//   return (
//     <div className="relative" ref={menuRef}>
//       <button
//         type="button"
//         className="inline-flex items-center justify-center rounded-md text-sm border border-[#e4e4e7] h-10 px-4 py-2"
//         onClick={handleToggle}
//         id="dropdown-button"
//         aria-haspopup="true"
//         aria-expanded={open}
//         aria-controls="dropdown-menu"
//         onKeyDown={handleKeyDown}
//         ref={buttonRef}
//       >
//         {buttonLabel}
//         <span className="ml-2">
//           {open ? <FaChevronUp /> : <FaChevronDown />}
//         </span>
//       </button>
//       {open && (
//         <div className="absolute left-1/2 -translate-x-1/2 top-12">
//           <ul className="w-56 h-auto shadow-md rounded-md p-1 border bg-white"
//           role="menu"
//           id="dropdown-menu"
//           aria-labelledby="dropdown-button"
//           >
//             {items.map((item, index) => (
//               <li
//               key={index}
//               id={`dropdown-item-${index}`}
//               className={`relative flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 rounded-md ${
//               focusedIndex === index ? "bg-gray-100" : ""
//               }`}
//               tabIndex={focusedIndex === index ? 0 : -1}
//               role="menuitem"
//               onKeyDown={(event) => handleItemKeyDown(event, index)}
//             >
//               {item.icon && <span>{item.icon}</span>}
//               {item.url ? (
//                 <Link
//                   to={item.url}
//                   className="w-full text-left"
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.title}
//                 </Link>
//               ) : (
//                 <button
//                   className="w-full text-left"
//                   onClick={() => {
//                     item.action?.();
//                     setOpen(false);
//                   }}
//                   type="button"
//                 >
//                   {item.title}
//                 </button>
//               )}
//             </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
