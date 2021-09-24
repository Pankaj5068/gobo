import React from "react";
// import { Link } from "react-router-dom";
// import _ from "lodash";

// const Pagination = (props) => {
//   const { itemsCount, pageSize, currentPage, onPageChange } = props;
//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   if (pagesCount === 1 || pagesCount === 0) return null;
//   const pages = _.range(1, pagesCount + 1);
//   return (
//     <div className="blog_pagination_section jb_cover">
//       <ul>
//         <li>
//           <Link
//             className="prev"
//             onClick={() =>
//               onPageChange(currentPage === 1 ? currentPage : currentPage - 1)
//             }
//           >
//             <i className="flaticon-left-arrow"></i>
//           </Link>
//         </li>
//       </ul>
//       <ul>
//         {pages.map((page, pai) => (
//           <li
//             className={
//               page === currentPage
//                 ? "third_pagger"
//                 : "d-block d-sm-block d-md-block d-lg-block"
//             }
//             key={pai}
//           >
//             <Link onClick={() => onPageChange(page)}>{page}</Link>
//           </li>
//         ))}
//       </ul>
//       <ul>
//         <li>
//           <Link
//             className="next"
//             onClick={() =>
//               onPageChange(
//                 currentPage === pages.length ? currentPage : currentPage + 1
//               )
//             }
//           >
//             <i className="flaticon-right-arrow"></i>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

const Pagination = () => {
  return (
    <div className="blog_pagination_section jb_cover">
      <ul>
        <li>
          <a href="#/" className="prev">
            <i className="flaticon-left-arrow"></i>
          </a>
        </li>
        <li>
          <a href="#/">1</a>
        </li>
        <li className="third_pagger">
          <a href="#/">2</a>
        </li>
        <li className="d-block d-sm-block d-md-block d-lg-block">
          <a href="#/">3</a>
        </li>
        <li className="d-none d-sm-block d-md-block d-lg-block">
          <a href="#/">...</a>
        </li>
        <li className="d-none d-sm-block d-md-block d-lg-block">
          <a href="#/">6</a>
        </li>

        <li>
          <a href="#/" className="next">
            <i className="flaticon-right-arrow"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
