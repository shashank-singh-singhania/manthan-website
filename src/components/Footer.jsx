const Footer = () => {
  return (
    <footer className="text-textDark py-6 text-center border-t border-gray-200">
      Made with ❤️ by{" "}
      <a
        href="https://tech.kiet.edu/team-erp/"
        rel="noreferrer"
        target="_blank"
        className="hover:text-primary font-semibold "
      >
        TEAM ERP
      </a>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="py-12 border-t border-gray-100 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Changelog
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Community
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Support
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   API Status
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-gray-600">
//             © 2025 KIET. All rights reserved.
//           </p>

//           <p className="text-sm text-gray-600">
//             Made with ❤️ by{" "}
//             <a
//               href="https://tech.kiet.edu/team-erp/"
//               rel="noreferrer"
//               target="_blank"
//               className="text-gray-900 hover:text-primary font-semibold transition-colors duration-200"
//             >
//               TEAM ERP
//             </a>
//           </p>

//           <div className="flex gap-4">
//             <a
//               href="#"
//               className="text-gray-600 hover:text-primary transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//               </svg>
//             </a>

//             <a
//               href="#"
//               className="text-gray-600 hover:text-primary transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//               </svg>
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-primary transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
